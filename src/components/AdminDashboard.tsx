import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "../firebase";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { BarChart2, Calendar, LogOut, Mail, User } from "lucide-react";

export const AdminDashboard = () => {
    // ---------- Auth ----------
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // ---------- Data ----------
    const [submissions, setSubmissions] = useState<any[]>([]);
    const [visits, setVisits] = useState<any[]>([]);
    const [filterDate, setFilterDate] = useState<string>("");

    // ---------- UI State ----------
    const [activeTab, setActiveTab] = useState<"dashboard" | "submissions" | "visits">(
        "dashboard"
    );

    // ---------- Auth Handlers ----------
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === "admin" && password === "Regrain77789@") {
            setLoggedIn(true);
        } else {
            alert("Invalid credentials");
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername("");
        setPassword("");
        setActiveTab("dashboard");
    };

    // ---------- Fetch Data ----------
    useEffect(() => {
        if (!loggedIn) return;
        const fetchSubmissions = async () => {
            const q = query(collection(db, "contact_submissions"), orderBy("createdAt", "desc"));
            const snap = await getDocs(q);
            setSubmissions(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        };
        fetchSubmissions();
    }, [loggedIn]);

    useEffect(() => {
        if (!loggedIn) return;
        const fetchVisits = async () => {
            let q;
            if (filterDate) {
                const start = new Date(filterDate);
                const end = new Date(filterDate);
                end.setDate(end.getDate() + 1);
                q = query(
                    collection(db, "visits"),
                    where("timestamp", ">=", start),
                    where("timestamp", "<", end),
                    orderBy("timestamp", "desc")
                );
            } else {
                q = query(collection(db, "visits"), orderBy("timestamp", "desc"));
            }
            const snap = await getDocs(q);
            setVisits(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        };
        fetchVisits();
    }, [loggedIn, filterDate]);

    // ---------- Helper Stats ----------
    const totalSubmissions = submissions.length;
    const totalVisits = visits.length;
    const todayVisits = visits.filter((v) => {
        const ts = v.timestamp?.toDate?.();
        if (!ts) return false;
        const today = new Date();
        return (
            ts.getDate() === today.getDate() &&
            ts.getMonth() === today.getMonth() &&
            ts.getFullYear() === today.getFullYear()
        );
    }).length;

    // ---------- Layout ----------
    if (!loggedIn) {
        return (
            <motion.div
                className="flex items-center justify-center min-h-screen bg-background"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <Card className="w-96 p-8 bg-card/30 backdrop-blur-xl rounded-xl shadow-2xl">
                    <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Admin Login</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <Input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="bg-input/30 border border-border focus:border-primary"
                            required
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-input/30 border border-border focus:border-primary"
                            required
                        />
                        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition">
                            Login
                        </Button>
                    </form>
                </Card>
            </motion.div>
        );
    }

    return (
        <motion.div
            className="flex min-h-screen bg-background text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Sidebar */}
            <aside className="w-64 bg-card/30 backdrop-blur-lg p-6 hidden md:block">
                <h1 className="text-2xl font-bold mb-8 text-center text-foreground">ReGrain Admin</h1>
                <nav className="space-y-4">
                    <button
                        onClick={() => setActiveTab("dashboard")}
                        className={`flex items-center w-full px-4 py-2 rounded-lg transition ${activeTab === "dashboard" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:bg-white/10"
                            }`}
                    >
                        <BarChart2 className="w-5 h-5 mr-2" /> Dashboard
                    </button>
                    <button
                        onClick={() => setActiveTab("submissions")}
                        className={`flex items-center w-full px-4 py-2 rounded-lg transition ${activeTab === "submissions" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:bg-white/10"
                            }`}
                    >
                        <Mail className="w-5 h-5 mr-2" /> Submissions
                    </button>
                    <button
                        onClick={() => setActiveTab("visits")}
                        className={`flex items-center w-full px-4 py-2 rounded-lg transition ${activeTab === "visits" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:bg-white/10"
                            }`}
                    >
                        <Calendar className="w-5 h-5 mr-2" /> Visits
                    </button>
                    <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 rounded-lg text-muted-foreground hover:bg-white/10 mt-8"
                    >
                        <LogOut className="w-5 h-5 mr-2" /> Logout
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-auto">
                {/* Top Bar for mobile */}
                <div className="flex md:hidden justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                    <Button onClick={handleLogout} variant="ghost" className="text-muted-foreground">
                        <LogOut className="w-5 h-5" />
                    </Button>
                </div>

                {/* Tabs */}
                {activeTab === "dashboard" && (
                    <section className="grid md:grid-cols-3 gap-6 mb-8">
                        {/* Total Submissions Card */}
                        <Card className="bg-card/30 backdrop-blur-xl p-6 rounded-xl shadow-lg flex items-center">
                            <Mail className="w-8 h-8 text-primary mr-4" />
                            <div>
                                <p className="text-sm text-muted-foreground">Total Submissions</p>
                                <p className="text-2xl font-bold text-foreground">{totalSubmissions}</p>
                            </div>
                        </Card>
                        {/* Total Visits Card */}
                        <Card className="bg-card/30 backdrop-blur-xl p-6 rounded-xl shadow-lg flex items-center">
                            <User className="w-8 h-8 text-primary mr-4" />
                            <div>
                                <p className="text-sm text-muted-foreground">Total Visits</p>
                                <p className="text-2xl font-bold text-foreground">{totalVisits}</p>
                            </div>
                        </Card>
                        {/* Today Visits Card */}
                        <Card className="bg-card/30 backdrop-blur-xl p-6 rounded-xl shadow-lg flex items-center">
                            <Calendar className="w-8 h-8 text-primary mr-4" />
                            <div>
                                <p className="text-sm text-muted-foreground">Visits Today</p>
                                <p className="text-2xl font-bold text-foreground">{todayVisits}</p>
                            </div>
                        </Card>
                    </section>
                )}

                {/* Submissions Table */}
                {activeTab === "submissions" && (
                    <section className="mb-12">
                        <Card className="bg-card/30 backdrop-blur-xl p-6 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-semibold mb-4">Contact Form Submissions</h2>
                            {submissions.length === 0 ? (
                                <p className="text-muted-foreground">No submissions yet.</p>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full table-auto border-collapse">
                                        <thead>
                                            <tr className="bg-muted/30">
                                                <th className="p-2 text-left">Name</th>
                                                <th className="p-2 text-left">Email</th>
                                                <th className="p-2 text-left">Message</th>
                                                <th className="p-2 text-left">Submitted At</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {submissions.map((s, i) => (
                                                <motion.tr
                                                    key={s.id}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: i * 0.03 }}
                                                    className="border-b border-muted/20"
                                                >
                                                    <td className="p-2">{s.name}</td>
                                                    <td className="p-2">{s.email}</td>
                                                    <td className="p-2 break-words max-w-xs">{s.message}</td>
                                                    <td className="p-2">
                                                        {s.createdAt?.toDate ? s.createdAt.toDate().toLocaleString() : "-"}
                                                    </td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </Card>
                    </section>
                )}

                {/* Visits Table */}
                {activeTab === "visits" && (
                    <section>
                        <Card className="bg-card/30 backdrop-blur-xl p-6 rounded-xl shadow-lg">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl font-semibold">Website Visits</h2>
                                <div className="flex items-center space-x-2">
                                    <label className="text-sm">Filter by date:</label>
                                    <input
                                        type="date"
                                        value={filterDate}
                                        onChange={(e) => setFilterDate(e.target.value)}
                                        className="border border-border rounded-md p-1 bg-input/30"
                                    />
                                    <Button onClick={() => setFilterDate("")} variant="ghost" className="text-sm">
                                        Clear
                                    </Button>
                                </div>
                            </div>
                            {visits.length === 0 ? (
                                <p className="text-muted-foreground">No visits recorded.</p>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full table-auto border-collapse">
                                        <thead>
                                            <tr className="bg-muted/30">
                                                <th className="p-2 text-left">Timestamp</th>
                                                <th className="p-2 text-left">Path</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {visits.map((v, i) => (
                                                <motion.tr
                                                    key={v.id}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: i * 0.03 }}
                                                    className="border-b border-muted/20"
                                                >
                                                    <td className="p-2">
                                                        {v.timestamp?.toDate ? v.timestamp.toDate().toLocaleString() : "-"}
                                                    </td>
                                                    <td className="p-2">{v.path || "-"}</td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </Card>
                    </section>
                )}
            </main>
        </motion.div>
    );
};
