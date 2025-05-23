import React, { useState } from "react";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import { FaUsers, FaDollarSign, FaLink } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import ReferralTree from "./ReferralTree";

const dummyReferrals = [
  {
    id: 1,
    name: "Alice",
    avatar: "https://i.pravatar.cc/50?img=1",
    children: [
      {
        id: 2,
        name: "Bob",
        avatar: "https://i.pravatar.cc/50?img=2",
        children: [
          {
            id: 3,
            name: "Charlie",
            avatar: "https://i.pravatar.cc/50?img=3",
            children: [
              {
                id: 7,
                name: "Grace",
                avatar: "https://i.pravatar.cc/50?img=7",
                children: [],
              },
              {
                id: 8,
                name: "Henry",
                avatar: "https://i.pravatar.cc/50?img=8",
                children: [],
              },
            ],
          },
          {
            id: 12,
            name: "Olivia",
            avatar: "https://i.pravatar.cc/50?img=12",
            children: [
              {
                id: 13,
                name: "Noah",
                avatar: "https://i.pravatar.cc/50?img=13",
                children: [],
              },
              {
                id: 14,
                name: "Emma",
                avatar: "https://i.pravatar.cc/50?img=14",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "David",
        avatar: "https://i.pravatar.cc/50?img=4",
        children: [
          {
            id: 9,
            name: "Ivy",
            avatar: "https://i.pravatar.cc/50?img=9",
            children: [],
          },
          {
            id: 15,
            name: "Liam",
            avatar: "https://i.pravatar.cc/50?img=15",
            children: [
              {
                id: 16,
                name: "Ava",
                avatar: "https://i.pravatar.cc/50?img=16",
                children: [],
              },
              {
                id: 17,
                name: "William",
                avatar: "https://i.pravatar.cc/50?img=17",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: "Eve",
        avatar: "https://i.pravatar.cc/50?img=5",
        children: [
          {
            id: 18,
            name: "Sophia",
            avatar: "https://i.pravatar.cc/50?img=18",
            children: [],
          },
          {
            id: 19,
            name: "James",
            avatar: "https://i.pravatar.cc/50?img=19",
            children: [],
          },
          {
            id: 20,
            name: "Isabella",
            avatar: "https://i.pravatar.cc/50?img=20",
            children: [],
          },
        ],
      },
      {
        id: 6,
        name: "Frank",
        avatar: "https://i.pravatar.cc/50?img=6",
        children: [
          {
            id: 10,
            name: "Jack",
            avatar: "https://i.pravatar.cc/50?img=10",
            children: [
              {
                id: 11,
                name: "Luna",
                avatar: "https://i.pravatar.cc/50?img=11",
                children: [],
              },
              {
                id: 21,
                name: "Mason",
                avatar: "https://i.pravatar.cc/50?img=21",
                children: [],
              },
            ],
          },
          {
            id: 22,
            name: "Charlotte",
            avatar: "https://i.pravatar.cc/50?img=22",
            children: [],
          },
        ],
      },
      {
        id: 23,
        name: "Benjamin",
        avatar: "https://i.pravatar.cc/50?img=23",
        children: [
          {
            id: 24,
            name: "Amelia",
            avatar: "https://i.pravatar.cc/50?img=24",
            children: [],
          },
          {
            id: 25,
            name: "Elijah",
            avatar: "https://i.pravatar.cc/50?img=25",
            children: [],
          },
          {
            id: 26,
            name: "Mia",
            avatar: "https://i.pravatar.cc/50?img=26",
            children: [],
          },
        ],
      },
      {
        id: 27,
        name: "Harper",
        avatar: "https://i.pravatar.cc/50?img=27",
        children: [
          {
            id: 28,
            name: "Logan",
            avatar: "https://i.pravatar.cc/50?img=28",
            children: [
              {
                id: 29,
                name: "Evelyn",
                avatar: "https://i.pravatar.cc/50?img=29",
                children: [],
              },
              {
                id: 30,
                name: "Alexander",
                avatar: "https://i.pravatar.cc/50?img=30",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 31,
        name: "Michael",
        avatar: "https://i.pravatar.cc/50?img=31",
        children: [
          {
            id: 32,
            name: "Abigail",
            avatar: "https://i.pravatar.cc/50?img=32",
            children: [],
          },
          {
            id: 33,
            name: "Daniel",
            avatar: "https://i.pravatar.cc/50?img=33",
            children: [],
          },
          {
            id: 34,
            name: "Emily",
            avatar: "https://i.pravatar.cc/50?img=34",
            children: [],
          },
        ],
      },
      {
        id: 35,
        name: "Matthew",
        avatar: "https://i.pravatar.cc/50?img=35",
        children: [
          {
            id: 36,
            name: "Elizabeth",
            avatar: "https://i.pravatar.cc/50?img=36",
            children: [],
          },
          {
            id: 37,
            name: "Jackson",
            avatar: "https://i.pravatar.cc/50?img=37",
            children: [],
          },
          {
            id: 38,
            name: "Avery",
            avatar: "https://i.pravatar.cc/50?img=38",
            children: [],
          },
          {
            id: 39,
            name: "Sebastian",
            avatar: "https://i.pravatar.cc/50?img=39",
            children: [],
          },
        ],
      },
      {
        id: 40,
        name: "Sofia",
        avatar: "https://i.pravatar.cc/50?img=40",
        children: [
          {
            id: 41,
            name: "Aiden",
            avatar: "https://i.pravatar.cc/50?img=41",
            children: [],
          },
          {
            id: 42,
            name: "Madison",
            avatar: "https://i.pravatar.cc/50?img=42",
            children: [],
          },
          {
            id: 43,
            name: "Samuel",
            avatar: "https://i.pravatar.cc/50?img=43",
            children: [],
          },
          {
            id: 44,
            name: "Scarlett",
            avatar: "https://i.pravatar.cc/50?img=44",
            children: [],
          },
          {
            id: 45,
            name: "Joseph",
            avatar: "https://i.pravatar.cc/50?img=45",
            children: [],
          },
          {
            id: 46,
            name: "Victoria",
            avatar: "https://i.pravatar.cc/50?img=46",
            children: [],
          },
          {
            id: 47,
            name: "David",
            avatar: "https://i.pravatar.cc/50?img=47",
            children: [],
          },
          {
            id: 48,
            name: "Riley",
            avatar: "https://i.pravatar.cc/50?img=48",
            children: [],
          },
          {
            id: 49,
            name: "Christopher",
            avatar: "https://i.pravatar.cc/50?img=49",
            children: [],
          },
          {
            id: 50,
            name: "Zoey",
            avatar: "https://i.pravatar.cc/50?img=50",
            children: [],
          },
        ],
      },
      {
        id: 51,
        name: "Andrew",
        avatar: "https://i.pravatar.cc/50?img=51",
        children: [],
      },
    ],
  },
];


const Affiliate = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("https://example.com/ref/user123");
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const stats = [
    { icon: <FaUsers />, label: "Total Referrals", value: 23 },
    { icon: <FaDollarSign />, label: "Total Earnings", value: 124.75 },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6 mb-16">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="card bg-base-100 shadow border border-base-200">
            <div className="card-body items-center text-center">
              <div className="text-3xl">{stat.icon}</div>
              <h3 className="text-lg font-semibold">{stat.label}</h3>
              <p className="text-xl font-bold">
                <CountUp end={stat.value} duration={2} decimals={stat.label.includes("Earnings") ? 2 : 0} />
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Marquee */}
      <div className="bg-base-200 p-2 rounded">
        <Marquee speed={60} gradient={false}>
          📢 Invite users and earn 20% commission for life | 🎁 Get $1 for every new user who completes first task
        </Marquee>
      </div>

      {/* Referral Link */}
      <div className="card bg-base-100 p-4 flex flex-col sm:flex-row justify-between items-center border border-base-200 shadow">
        <div className="flex items-center space-x-2">
          <FaLink />
          <span className="text-sm">https://example.com/ref/user123</span>
        </div>
        <button className="btn btn-sm btn-outline flex items-center mt-2 sm:mt-0" onClick={handleCopy}>
          <FaCopy className="mr-2" />
          {copySuccess ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Rules */}
      <div className="bg-base-100 p-4 border border-base-300 shadow rounded space-y-2">
        <h3 className="text-lg font-semibold">📜 Rules & Regulations</h3>
        <ul className="list-disc list-inside text-sm">
          <li>Only real users are counted in referrals.</li>
          <li>Commissions are added after referrals complete a task.</li>
          <li>Referral fraud will result in account ban.</li>
        </ul>
      </div>

      {/* Referral Tree */}
      <div>
        <h3 className="text-xl font-bold text-center mb-4">Referral Tree</h3>
        <div className="overflow-x-auto">
          <ReferralTree referrals={dummyReferrals} />
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
