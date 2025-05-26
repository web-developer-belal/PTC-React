import { Link } from "react-router";
import { FaBell, FaWallet } from "react-icons/fa";
import CountUp from "react-countup";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm mt-2 px-4 flex-wrap">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          PTC
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 flex-wrap">
        {/* Account Balance */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-primary-content shadow-sm">
          <FaWallet className="text-lg" />
          <div className="flex flex-col leading-tight">
            <span className="text-xs opacity-80">Balance</span>
            <span className="text-md font-bold">
              $
              <CountUp end={132.5} duration={1} decimals={2} />
            </span>
          </div>
        </div>

        {/* Notification Bell with badge */}
        <div className="indicator">
          <span className="indicator-item badge badge-error badge-sm">3</span>
          <button className="btn btn-ghost btn-circle text-xl">
            <FaBell />
          </button>
        </div>

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
