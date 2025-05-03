import React, { useState, useEffect } from 'react';
import {
    FiCalendar, FiClipboard, FiCheckSquare, FiFileText,
    FiGrid, FiMessageSquare, FiUsers, FiBarChart2,
    FiFolder, FiClock, FiPlus, FiSearch,
    FiMenu,
    FiShare
} from 'react-icons/fi';
import '../Componentscss/Fonix.css'
import {
    Menu, CheckCheck, LayoutGrid, Monitor, Power, Search,
    Plus, Globe, Clock, Bell, Mail
} from 'lucide-react';
const Fonix = ({label,value1}) => {
    // State for active tab
    const [activeTab, setActiveTab] = useState('Dashboard');


    // Time tracking states
    const [currentTime, setCurrentTime] = useState('09:56:05 am');
    const [clockInTime, setClockInTime] = useState(null);
    const [showClockModal, setShowClockModal] = useState(false);
    const [clockStatus, setClockStatus] = useState('Clock In');

    // Data states
    const [projects, setProjects] = useState({
        open: 1,
        completed: 0,
        hold: 0
    });

    const [tasks, setTasks] = useState({
        todo: 41,
        inProgress: 2.5,
        done: 2.0
    });

    const [myTasks, setMyTasks] = useState([
        {
            id: 457, title: 'Task: Clone CRM template and style form layout using CRM-based template',
            startDate: '02-05-2025', deadline: '02-05-2025', status: 'In progress'
        },
        {
            id: 458, title: 'Learn JS variables, data types, operators, and loops',
            startDate: '03-05-2025', deadline: '03-05-2025', status: 'To do'
        },
        {
            id: 459, title: 'Work with arrays, objects, and functions (arrow functions)',
            startDate: '03-05-2025', deadline: '03-05-2025', status: 'To do'
        }
    ]);

    const [events, setEvents] = useState([
        { title: 'Raksha Bandhan', date: 'Sat, August 09' },
        { title: 'Independence Day', date: 'Fri, August 15' },
        { title: 'Diwali', date: 'Mon, October 20 – Wed, October 22' }
    ]);

    const [timesheetData, setTimesheetData] = useState([2.5, 2.0, 1.5, 1.0, 0.5]);
    const [todoInput, setTodoInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [stickyNote, setStickyNote] = useState('');

    // Update time every second
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

    // Handle clock in/out
    const handleClockAction = () => {
        if (clockStatus === 'Clock In') {
            setClockInTime(new Date());
            setClockStatus('Clock Out');
            setShowClockModal(true);
            setTimeout(() => setShowClockModal(false), 3000);
        } else {
            setClockInTime(null);
            setClockStatus('Clock In');
            setShowClockModal(true);
            setTimeout(() => setShowClockModal(false), 3000);
        }
    };

    // Add new todo
    const addTodo = () => {
        if (todoInput.trim()) {
            setTodos([...todos, { id: Date.now(), title: todoInput, date: new Date().toLocaleDateString() }]);
            setTodoInput('');
        }
    };

    // Navigation items
    const navItems = [
        { name: 'Dashboard', icon: <FiGrid /> },
        { name: 'Events', icon: <FiCalendar /> },
        { name: 'Projects', icon: <FiClipboard /> },
        { name: 'Tasks', icon: <FiCheckSquare /> },
        { name: 'Notes', icon: <FiFileText /> },
        { name: 'Whiteboards', icon: <FiGrid /> },
        { name: 'Messages', icon: <FiMessageSquare /> },
        { name: 'Team', icon: <FiUsers /> },
        { name: 'Reports', icon: <FiBarChart2 /> },
        { name: 'Files', icon: <FiFolder /> }
    ];

    return (
        <div className="flex h-screen bg-[#1C1F26] font-sans">
            {/* Sidebar */}
            <div className="w-64 bg-[#1C1F26]-700  border-gray-200 flex flex-col">
                <div className="p-4  border-gray-200 ">
                    <img src="https://dashboard.fonixtech.io/assets/images/logo/logo-dark.png" alt="" className='w-35' />


                </div>


                <nav className="flex-1 overflow-y">
                    <ul className="space-y-1 p-2">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <button
                                    onClick={() => setActiveTab(item.name)}
                                    className={`w-full flex items-center p-3 rounded-lg text-left ${activeTab === item.name ? 'bg-blue-950 text-blue-600' : 'text-white hover:bg-black'
                                        }`}
                                >
                                    <span className="mr-3">{item.icon}</span>
                                    <span className="font-medium">{item.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <nav className="w-full flex items-center justify-between px-6 py-2 h-21 bg-[#1C1F26] text-white">
                    {/* Left section */}
                    <div className="flex items-center gap-4">

                        <Menu className="text-indigo-400" />
                        <CheckCheck className="text-indigo-400" />
                        <LayoutGrid className="text-indigo-400" />
                        <Monitor className="text-indigo-400" />
                        <Power className="text-pink-500" />
                    </div>

                    {/* Right section */}
                    <div className="flex items-center gap-4">
                        <Search className="text-indigo-400" />
                        <Plus className="text-indigo-400" />
                        <Globe className="text-indigo-400" />
                        <Clock className="text-indigo-400" />
                        <Bell className="text-indigo-400" />
                        <Mail className="text-indigo-400" />
                        <img
                            src="https://i.pravatar.cc/150?img=3"
                            alt="profile"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-indigo-400 font-medium ">Mohit Kumawat</span>
                    </div>
                </nav>
                <div className="containermain">
                    <div className="box ms-3 mt-3 border-b-black bg-gray-800 p-4" id='fbox1'>
                        <FiClock className='text-white border-1 rounded-sm bg-sky-600 p-2 w-12 h-10 ' />
                        <div className="flex items-center clock ms-2">
                            <span className="text-sm  text-gray-500 ms-5">Clock started at: {currentTime}</span>
                            <button
                                onClick={handleClockAction}
                                className={`px-4 py-2 rounded-md btnclock text-sm font-medium ms-5 ${clockStatus === 'Clock In' ? ' bg-blue-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
                                    } text-white`}
                            >
                                {clockStatus}
                            </button>
                        </div>
                    </div>
                    <div className="box ms-3 mt-3 p-3 border-b-black bg-gray-800 " id='fbox2'>

                        <FiMenu className='text-white border-1 rounded-sm bg-sky-600 p-2 w-12 h-10  ' />
                        <h2 className='text-white text-right h42'>42</h2>
                        <p className='text-white text-right'>My Open Tasks</p>
                    </div>
                    <div className="box ms-3 mt-3 p-4 border-b-black bg-gray-800" id='fbox3'>
                        <FiCalendar className='text-white border-1 rounded-sm bg-[#1C1F26]-600 p-2 w-12 h-10  ' />
                        <h2 className='text-white text-right h42'>0</h2>
                        <p className='text-white text-right'>Events Today</p>
                    </div>
                    <div className="box ms-3 mt-3 border-b-black bg-gray-800 p-4" id='fbox4'>
                        <FiShare className='text-white border-1 rounded-sm bg-[#1C1F26]-600 p-2 w-12 h-10  ' />


                        <h2 className='text-white text-right h42'>0</h2>
                        <p className='text-white text-right'>New Posts</p>

                    </div>
                </div>
                {/* Top Bar */}
                <div className="bg-[#1C1F26]-700 border-b border-gray-200 p-4 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">{activeTab}</h2>

                </div>
                {/* Projects Overview */}
                <div className="bg-[#1C1F26]-700  rounded-lg shadow-sm border mt-4 projectwidth border-gray-200">
                    <div className="p-4 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-800">Projects Overview</h3>
                    </div>
                    <div className="p-6 grid grid-cols-3 gap-4 text-center">
                        <div>
                            <h4 className="text-2xl font-bold text-gray-800">{projects.open}</h4>
                            <p className="text-sm text-gray-500">Open</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-gray-800">{projects.completed}</h4>
                            <p className="text-sm text-gray-500">Completed</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-gray-800">{projects.hold}</h4>
                            <p className="text-sm text-gray-500">Hold</p>
                        </div>
                        

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Fonix;