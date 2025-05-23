import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router';

const Task = () => {
  const stats = [
    { title: "Today's Tasks", count: 5 },
    { title: "Completed Tasks", count: 12 },
    { title: "Bonus Tasks", count: 2 },
    { title: "Pending Tasks", count: 3 },
  ];

  const tasks = [
    {
      id: 1,
      title: "Watch Ad Video - App A",
      amount: "$0.50",
      thumbnail: "https://placehold.co/120x70",
      link: "#",
    },
    {
      id: 2,
      title: "Review Product - Site B",
      amount: "$1.00",
      thumbnail: "https://placehold.co/120x70",
      link: "#",
    },
    {
      id: 3,
      title: "Follow Channel - YouTube",
      amount: "$0.30",
      thumbnail: "https://placehold.co/120x70",
      link: "#",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">
      {/* State Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="card bg-base-100 shadow border border-base-200">
            <div className="card-body text-center">
              <h3 className="text-sm text-gray-500">{stat.title}</h3>
              <p className="text-xl font-bold">{stat.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Announcement Marquee */}
      <div className="bg-base-200 p-2 rounded">
        <Marquee gradient={false} speed={60}>
          📢 Complete today’s bonus task to earn extra $1 | 🎁 Invite 3 friends, get $3 instantly | 🔥 New ad offers available every hour!
        </Marquee>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-base-100 shadow p-4 rounded flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-base-200">
            {/* Thumbnail */}
            <div className="w-full sm:w-32 flex-shrink-0">
              <img src={task.thumbnail} alt="Task" className="rounded-lg w-full object-cover" />
            </div>

            {/* Task Info */}
            <div className="flex-1">
              <h4 className="text-lg font-semibold">{task.title}</h4>
              <p className="text-sm text-gray-500 mb-2">Reward: <span className="font-bold text-success">{task.amount}</span></p>
              <Link to="/task-monitor" className="btn btn-sm btn-primary">Do Task</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
