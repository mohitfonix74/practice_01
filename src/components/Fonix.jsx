import React, { useState, useEffect } from 'react';
import {
    FiCalendar, FiClipboard, FiCheckSquare, FiFileText,
    FiGrid, FiMessageSquare, FiUsers, FiBarChart2,
    FiFolder, FiClock, FiPlus, FiSearch, FiMenu, FiX
} from 'react-icons/fi';
import {
    CheckCheck, LayoutGrid, Monitor, Power, Globe, Bell, Mail, Plus, Search
} from 'lucide-react';

const Fonix = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [currentTime, setCurrentTime] = useState('09:56:05 am');
    const [clockInTime, setClockInTime] = useState(null);
    const [clockStatus, setClockStatus] = useState('Clock In');
    const [showClockModal, setShowClockModal] = useState(false);
    const [projects, setProjects] = useState({ open: 1, completed: 0, hold: 0 });
    const [tasks, setTasks] = useState({ todo: 41, inProgress: 2.5, done: 2.0 });
    const [myTasks, setMyTasks] = useState([
        {
            id: 457,
            title: 'Task: Clone CRM template and style form layout using CRM-based template',
            startDate: '02-05-2025',
            deadline: '02-05-2025',
            status: 'In progress'
        },
        {
            id: 458,
            title: 'Learn JS variables, data types, operators, and loops',
            startDate: '03-05-2025',
            deadline: '03-05-2025',
            status: 'To do'
        },
        {
            id: 459,
            title: 'Work with arrays, objects, and functions (arrow functions)',
            startDate: '03-05-2025',
            deadline: '03-05-2025',
            status: 'To do'
        }
    ]);
    const [events, setEvents] = useState([
        { title: 'Raksha Bandhan', date: 'Sat, August 09' },
        { title: 'Independence Day', date: 'Fri, August 15' },
        { title: 'Diwali', date: 'Mon, October 20 – Wed, October 22' }
    ]);
    const [timesheetData, setTimesheetData] = useState([2.5, 2.0, 1.5, 1.0, 0.5 ,3.0]);
    const [todoInput, setTodoInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [stickyNote, setStickyNote] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
            setCurrentTime(timeString);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleClockAction = () => {
        if (clockStatus === 'Clock In') {
            setClockInTime(new Date());
            setClockStatus('Clock Out');
        } else {
            setClockInTime(null);
            setClockStatus('Clock In');
        }
        setShowClockModal(true);
        setTimeout(() => setShowClockModal(false), 1000);
    };

    const addTodo = () => {
        if (todoInput.trim()) {
            setTodos([...todos, { id: Date.now(), title: todoInput, date: new Date().toLocaleDateString() }]);
            setTodoInput('');
        }
    };

    const navItems = [
        { name: 'Dashboard', icon: <FiGrid className="text-lg" /> },
        { name: 'Events', icon: <FiCalendar className="text-lg" /> },
        { name: 'Projects', icon: <FiClipboard className="text-lg" /> },
        { name: 'Tasks', icon: <FiCheckSquare className="text-lg" /> },
        { name: 'Notes', icon: <FiFileText className="text-lg" /> },
        { name: 'Whiteboards', icon: <FiGrid className="text-lg" /> },
        { name: 'Messages', icon: <FiMessageSquare className="text-lg" /> },
        { name: 'Team', icon: <FiUsers className="text-lg" /> },
        { name: 'Reports', icon: <FiBarChart2 className="text-lg" /> },
        { name: 'Files', icon: <FiFolder className="text-lg" /> }
    ];

    return (
        <div className={`${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'} flex flex-col md:flex-row min-h-screen font-sans transition-colors duration-300 `}>
            {/* Mobile Menu Button (always visible on mobile) */}

            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-indigo-600 text-white shadow-lg"
            >
                {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed md:static z-40 w-64 h-full transition-all duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-r ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} flex flex-col`}
            >
                <div className="p-4 border-b border-t border-gray-700">
                    <img
                        src="https://dashboard.fonixtech.io/assets/images/logo/logo-dark.png"
                        alt="logo"
                        className="w-36 mx-auto md:mx-0"
                    />
                </div>
                <nav className="flex-1 overflow-y-auto py-4">
                    <ul className="space-y-1 px-2">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <button
                                    onClick={() => {
                                        setActiveTab(item.name);
                                        if (window.innerWidth < 768) setIsSidebarOpen(false);
                                    }}
                                    className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 ${activeTab === item.name
                                        ? 'bg-indigo-600 text-white'
                                        : `${isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`}`}
                                >
                                    <span className="mr-3">{item.icon}</span>
                                    <span className="font-medium">{item.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img
                                src="https://i.pravatar.cc/150?img=3"
                                alt="profile"
                                className="w-10 h-10 rounded-full object-cover mr-3"
                            />
                            <div>
                                <p className="font-medium">Mohit Kumawat</p>
                                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Developer</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
                        >
                            {isDarkMode ? '🌞' : '🌙'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden border-t-1 border-gray-700 pt-1">
                {/* Navbar */}
                <nav className={`w-full flex items-center justify-between px-6 py-3 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
                    <div className="flex items-center gap-4 ">
                        <h1 className="text-xl font-bold text-indigo-400 ps-2">{activeTab}</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2">
                            <button className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                                <Search className="text-indigo-400" />
                            </button>
                            <button className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                                <Plus className="text-indigo-400" />
                            </button>
                            <button className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                                <Globe className="text-indigo-400" />
                            </button>
                            <button className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                                <FiClock className="text-indigo-400" />
                            </button>
                            <button className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                                <Bell className="text-indigo-400" />
                            </button>
                            <button className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                                <Mail className="text-indigo-400" />
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className={`hidden md:block ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{currentTime}</span>
                            <div className="relative">
                                <img
                                    src="https://i.pravatar.cc/150?img=3"
                                    alt="profile"
                                    className="w-10 h-10 rounded-full object-cover border-2 border-indigo-400"
                                />
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Dashboard Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6">
                    {/* Top Cards Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 p-3">
                        {/* Projects Overview */}
                        <div className={`rounded-lg shadow-md  p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <h3 className="text-lg font-semibold mb-6 ">Projects Overview</h3>
                            <div className="grid grid-cols-3 gap-6 pt-4">
                                <div className=" text-white p-6 flex flex-col items-center justify-center rounded-lg text-center">
                                    <h6 className="text-xm  mb-2">Open</h6>
                                    <p className="text-lg font-bold">{projects.open}</p>
                                </div>
                                <div className=" text-white p-6 flex flex-col items-center justify-center rounded-lg text-center">
                                    <h6 className="text-sm font-medium mb-2">Completed</h6>
                                    <p className="text-lg font-bold">{projects.completed}</p>
                                </div>
                                <div className=" text-white p-6 flex flex-col items-center justify-center rounded-lg text-center">
                                    <h6 className="text-sm font-medium mb-2">Hold</h6>
                                    <p className="text-lg font-bold">{projects.hold}</p>
                                </div>
                            </div>
                        </div>


                        {/* Tasks Overview */}
                        <div className={`rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} w-full max-w-md h-auto p-4`}>
                            <h3 className="text-base font-semibold mb-3 p-1">Tasks Overview</h3>
                            <div className="grid grid-cols-3 gap-5">
                                <div className="text-white p-3 rounded-lg text-center">
                                    <h6 className="font-medium text-xs mb-1 w-max">To Do</h6>
                                    <p className="text-lg font-semibold">{tasks.todo}</p>
                                </div>
                                <div className="text-white p-3 rounded-lg text-center">
                                    <h6 className="font-medium text-xs mb-1 w-max">In Progress</h6>
                                    <p className="text-lg font-semibold">{tasks.inProgress}</p>
                                </div>
                                <div className="text-white p-3 rounded-lg text-center">
                                    <h6 className="font-medium text-xs mb-1">Done</h6>
                                    <p className="text-lg font-semibold">{tasks.done}</p>
                                </div>
                            </div>
                        </div>


                        {/* Time Tracking */}
                        <div className={`rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-4`}>
                            <h3 className="text-lg font-semibold mb-4">Time Tracking</h3>
                            <div className="flex flex-col items-center">
                                <div className="text-2xl font-bold mb-4">{currentTime}</div>
                                <button
                                    onClick={handleClockAction}
                                    className={`p-2 rounded-3 font-medium ${clockStatus === 'Clock In' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'} text-white transition-colors duration-200`}
                                >
                                    {clockStatus}
                                </button>
                                {clockInTime && (
                                    <p className="mt-2 text-sm text-gray-400">
                                        Clocked in at: {clockInTime.toLocaleTimeString()}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Content Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* My Tasks */}
                        <div className={`rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <div className="p-4 border-b border-gray-700">
                                <h3 className="text-lg font-semibold">My Tasks</h3>
                            </div>
                            <div className="p-4 space-y-3 flex flex-col gap-3">
                                {myTasks.map((task) => (
                                    <div
                                        key={task.id}
                                        className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-all hover:shadow-md`}
                                    >
                                        <h4 className="font-medium mb-1">{task.title}</h4>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                                {task.startDate} - {task.deadline}
                                            </span>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${task.status === 'In progress'
                                                ? 'bg-yellow-500 text-white'
                                                : task.status === 'To do'
                                                    ? 'bg-gray-500 text-white'
                                                    : 'bg-green-500 text-white'
                                                }`}>
                                                {task.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Timesheet */}
                        <div className={`rounded-lg h-max shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <div className="p-4 border-b border-gray-700">
                                <h3 className="text-lg font-semibold">My Timesheet</h3>
                            </div>
                            <div className="p-4">
                                <div className="grid grid-rows-5  gap-2">
                                    {timesheetData.map((hours, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center bg-indigo-600 text-white p-3 rounded-lg"
                                        >
                                            <span className="text-xs">Day {index + 1}</span>
                                            <span className="font-bold">{hours} hrs</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Events */}
                        <div className={`rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <div className="p-4 border-b border-gray-700">
                                <h3 className="text-lg font-semibold">Upcoming Events</h3>
                            </div>
                            <div className="p-4 space-y-3 flex flex-col gap-3">
                                {events.map((event, index) => (
                                    <div
                                        key={index}
                                        className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} border-l-4 border-indigo-500`}
                                    >
                                        <h4 className="font-medium">{event.title}</h4>
                                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{event.date}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Notes */}
                        <div className={`rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <div className="p-4 border-b border-gray-700">
                                <h3 className="text-lg font-semibold">Quick Notes</h3>
                            </div>
                            <div className="p-4">
                                <textarea
                                    value={stickyNote}
                                    onChange={(e) => setStickyNote(e.target.value)}
                                    placeholder="Type your notes here..."
                                    className={`w-full p-3 rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                                    rows="4"
                                />
                                <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                                    Save Note
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Clock In/Out Modal */}
            {showClockModal && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
                    {clockStatus === 'Clock Out' ? 'Successfully Clocked In!' : 'Successfully Clocked Out!'}
                </div>
            )}
        </div>
    );
};

export default Fonix;