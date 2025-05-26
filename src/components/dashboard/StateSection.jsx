import {
  FaCoins,
  FaClock,
  FaChartLine,
  FaAd,
  FaUsers,
  FaMedal,
} from "react-icons/fa";
import DashboardStateCard from "./DashboardStateCard";

// Array of card data
const stateCards = [
  {
    icon: <FaCoins />,
    title: "Total Earned",
    value: 132,
    valuePrefix: "$",
    count: true,
    color: "bg-primary text-primary-content",
    link: "/earnings",
  },
  {
    icon: <FaClock />,
    title: "Time Spent",
    value: "5h 40m",
    count: false,
    color: "bg-secondary text-secondary-content",
    link: "/time-tracking",
  },
  {
    icon: <FaChartLine />,
    title: "CTR",
    value: "3.2%",
    count: false,
    color: "bg-accent text-accent-content",
  },
  {
    icon: <FaAd />,
    title: "Ads Clicked",
    value: 145,
    count: true,
    color: "bg-info text-info-content",
  },
  {
    icon: <FaUsers />,
    title: "Referrals",
    value: 12,
    count: true,
    color: "bg-success text-success-content",
    link: "/affiliate",
  },
  {
    icon: <FaMedal />,
    title: "Rank",
    value: "#24",
    count: false,
    color: "bg-warning text-warning-content",
  },
];

const StateSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {stateCards.map((card, index) => (
        <DashboardStateCard key={index} {...card} />
      ))}
    </div>
  );
};

export default StateSection;
