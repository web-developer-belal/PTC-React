import { FaHome, FaBullseye, FaWallet, FaUser } from "react-icons/fa";
import { IoColorPalette, IoSettings } from "react-icons/io5";
import { Link } from "react-router";
import AppearanceSetting from "../../pages/settings/AppearanceSetting";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">


      <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <AppearanceSetting></AppearanceSetting>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="relative max-w-5xl mx-auto z-10">
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="absolute cursor-pointer right-0 -top-[100px] w-10 h-10 flex items-center justify-center  rounded-full bg-neutral !text-neutral-content shadow-md"
        >
          <IoColorPalette />
        </button>
      </div>
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
          <Link to="/settings" className="btn btn-ghost btn-circle text-xl">
            <IoSettings />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
