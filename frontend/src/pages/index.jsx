import { Link } from "react-router-dom";


export default function IntroPage() {


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-12 py-20">
            <div className="max-w-6xl w-full text-center space-y-12">
                <h1 className="text-6xl font-extrabold text-blue-400">Study Buddy</h1>
                <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
                    Stay organized, collaborate with peers, and manage your studies effectively with our all-in-one platform.
                </p>
            </div>
            <Link to={"/login"}>
                <button className="mt-12 btn btn-primary btn-lg rounded-full shadow-xl hover:scale-105 transition-transform bg-blue-500 hover:bg-blue-600 border-none text-white text-2xl font-semibold px-8 py-4">    Get Started
                </button>
            </Link>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-16 max-w-6xl w-full">
                <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 text-center">
                    <h2 className="text-2xl font-semibold text-blue-300">📚 Study Plans</h2>
                    <p className="text-gray-400 mt-4">Create and customize study plans to keep track of subjects and topics efficiently.</p>
                </div>
                <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 text-center">
                    <h2 className="text-2xl font-semibold text-purple-300">🤝 Collaboration & Engagement</h2>
                    <p className="text-gray-400 mt-4">Interactive group study, shared notes, and real-time collaboration for an engaging learning experience.</p>
                </div>
                <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 text-center">
                    <h2 className="text-2xl font-semibold text-green-300">🌍 Learn Anywhere</h2>
                    <p className="text-gray-400 mt-4">Sync across devices and continue learning from anywhere, anytime without interruptions.</p>
                </div>
                <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 text-center">
                    <h2 className="text-2xl font-semibold text-yellow-300">📅 Task & Time Management</h2>
                    <p className="text-gray-400 mt-4">Stay on top of assignments and deadlines with smart scheduling and reminders.</p>
                </div>
                <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 text-center">
                    <h2 className="text-2xl font-semibold text-red-300">📖 Custom Study Materials</h2>
                    <p className="text-gray-400 mt-4">Create, organize, and access personalized notes, flashcards, and resources anytime.</p>
                </div>
                <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 text-center">
                    <h2 className="text-2xl font-semibold text-orange-300">🔍 Research & Resources</h2>
                    <p className="text-gray-400 mt-4">Find reliable study resources, reference materials, and learning guides all in one place.</p>
                </div>
                <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 text-center">
                    <h2 className="text-2xl font-semibold text-pink-300">💡 Productivity Boosters</h2>
                    <p className="text-gray-400 mt-4">Use focus timers, break reminders, and motivational tools to enhance productivity.</p>
                </div>
            </div>


        </div >
    );
}
