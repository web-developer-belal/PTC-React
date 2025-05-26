import { Link } from "react-router";
import { FiSettings, FiUser, FiBell, FiCreditCard, FiShield } from "react-icons/fi";

const settingsLinks = [
  { name: "General", icon: <FiUser />, to: "/settings/general" },
  { name: "Appearance", icon: <FiSettings />, to: "/settings/appearance" },
  { name: "Notifications", icon: <FiBell />, to: "/settings/notifications" },
  { name: "Payments", icon: <FiCreditCard />, to: "/settings/payments" },
  { name: "Security", icon: <FiShield />, to: "/settings/security" },
];

const Setting = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Settings</h1>
      <div className="grid grid-cols-1 gap-4">
        {settingsLinks.map(({ name, icon, to }) => (
          <Link
            key={name}
            to={to}
            className="flex items-center space-x-4 p-4 rounded-lg shadow bg-base-100 hover:bg-base-200"
          >
            <div className="text-2xl">{icon}</div>
            <span className="text-lg font-medium">{name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Setting;
