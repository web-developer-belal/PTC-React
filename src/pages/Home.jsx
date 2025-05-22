import Marquee from "react-fast-marquee";
import {
  FaCoins,
  FaClock,
  FaChartLine,
  FaAd,
  FaUsers,
  FaMedal,
} from "react-icons/fa";
import DashboardStateCard from "../components/DashboardStateCard";

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
      {/* 1. Slider */}
      <div className="carousel w-full rounded-box shadow">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://placehold.co/800x200?text=Ad+1"
            className="w-full object-cover"
            alt="Slide 1"
          />
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://placehold.co/800x200?text=Ad+2"
            className="w-full object-cover"
            alt="Slide 2"
          />
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://placehold.co/800x200?text=Ad+3"
            className="w-full object-cover"
            alt="Slide 3"
          />
        </div>
      </div>

      {/* 2. Balance Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="card bg-success text-success-content shadow">
          <div className="card-body">
            <h2 className="card-title">Current Balance</h2>
            <p>$25.60</p>
          </div>
        </div>
        <div className="card bg-warning text-warning-content shadow">
          <div className="card-body">
            <h2 className="card-title">Pending Balance</h2>
            <p>$12.75</p>
          </div>
        </div>
      </div>

      {/* 3. Notice (Marquee) */}
      <div className="bg-base-200 rounded p-2 shadow">
        <Marquee gradient={false} speed={60} pauseOnHover>
          🔔 Welcome to PTC Pro! | 💰 Earn by clicking ads! | 🏆 Weekly contest
          running now! | 📢 Refer & earn bonus!
        </Marquee>
      </div>

      {/* 4. Dashboard Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <DashboardStateCard
          icon={<FaCoins />}
          title="Total Earned"
          value="$132.00"
        />
        <DashboardStateCard
          icon={<FaClock />}
          title="Time Spent"
          value="5h 40m"
        />
        <DashboardStateCard icon={<FaChartLine />} title="CTR" value="3.2%" />
        <DashboardStateCard icon={<FaAd />} title="Ads Clicked" value="145" />
        <DashboardStateCard icon={<FaUsers />} title="Referrals" value="12" />
        <DashboardStateCard icon={<FaMedal />} title="Rank" value="#24" />
      </div>

      {/* 5. Leaderboard Table */}
      <div className="overflow-x-auto max-h-64 scroll-smooth bg-base-100 shadow-sm">
        <h2 className="text-xl px-3 my-5">Leaderboard</h2>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Clicks</th>
              <th>Earnings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Alice</td>
              <td>234</td>
              <td>$54.00</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Bob</td>
              <td>211</td>
              <td>$48.10</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Charlie</td>
              <td>189</td>
              <td>$45.50</td>
            </tr>
            <tr>
              <td>4</td>
              <td>David</td>
              <td>175</td>
              <td>$41.25</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Eve</td>
              <td>162</td>
              <td>$39.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
