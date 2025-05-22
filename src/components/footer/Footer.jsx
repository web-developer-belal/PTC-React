import React from "react";
import { FaHome, FaBullseye, FaWallet, FaUser, FaInfoCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="mx-auto w-full max-w-5xl bg-base-100 border-t border-base-300 shadow-md">
        <div className="flex justify-around items-center h-16">
          <button className="btn btn-ghost btn-circle text-xl">
            <FaHome />
          </button>
          <button className="btn btn-ghost btn-circle text-xl">
            <FaBullseye />
          </button>
          <button className="btn btn-ghost btn-circle text-xl">
            <FaWallet />
          </button>
          <button className="btn btn-ghost btn-circle text-xl">
            <FaUser />
          </button>
          <button className="btn btn-ghost btn-circle text-xl">
            <FaInfoCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
