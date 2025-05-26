import { Link } from "react-router";

const Security = () => {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Current Password</label>
          <input type="password" className="input input-bordered w-full" />
        </div>
        <div>
          <label className="block mb-1 font-medium">New Password</label>
          <input type="password" className="input input-bordered w-full" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Confirm Password</label>
          <input type="password" className="input input-bordered w-full" />
        </div>
        <div className="flex justify-between mt-4">
          <Link to="/settings" className="btn btn-secondary">
            Back
          </Link>

          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default Security;
