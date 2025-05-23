import React from "react";
import { FaHome, FaBullseye, FaWallet, FaUser, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="mx-auto w-full max-w-5xl bg-base-100 border-t border-base-300 shadow-md">
        <div className="flex justify-around items-center h-16">
          <Link to="/" className="btn btn-ghost btn-circle text-xl">
            <FaHome />
          </Link>
          <Link to="/tasks" className="btn btn-ghost btn-circle text-xl">
            <FaBullseye />
          </Link>
          <Link to="/withdrawals" className="btn btn-ghost btn-circle text-xl">
            <FaWallet />
          </Link>
          <Link to="/profile" className="btn btn-ghost btn-circle text-xl">
            <FaUser />
          </Link>
          <button className="btn btn-ghost btn-circle text-xl">
            <FaInfoCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
