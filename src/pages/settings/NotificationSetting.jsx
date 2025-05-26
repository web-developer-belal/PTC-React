import { Link } from "react-router";
import Breadcrumbs from "../../components/Breadcrumbs";
import { CiSettings } from "react-icons/ci";
import { BiNotification } from "react-icons/bi";

const breadcrumbItems = [
  { label: "Settings", href: "/settings", icon: CiSettings },
  { label: "Notification", href: "/settings/notifications", icon: BiNotification },
];

const NotificationSetting = () => {
  return (
    <div className="">
      <Breadcrumbs items={breadcrumbItems} />
      <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
      <form className="space-y-4">
        {[
          { label: "Email Notifications", className: "toggle-primary" },
          { label: "Device Notifications", className: "toggle-secondary" },
          { label: "Payment Alerts", className: "toggle-accent" },
          { label: "Task Reminders", className: "toggle-success" },
          { label: "Account Status Updates", className: "toggle-warning" },
          { label: "Security Alerts", className: "toggle-error" },
        ].map((item, idx) => (
          <div className="form-control" key={idx}>
            <label className="label cursor-pointer justify-between w-full flex items-center">
              <span className="label-text">{item.label}</span>
              <input type="checkbox" defaultChecked className={`toggle ${item.className}`} />
            </label>
          </div>
        ))}
        
      </form>
    </div>
  );
};

export default NotificationSetting;
