import { Link } from "react-router";

const General = () => {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">General Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input type="text" className="input input-bordered w-full" placeholder="John Doe" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email Address</label>
          <input type="email" className="input input-bordered w-full" placeholder="you@example.com" />
        </div>
        <div className="flex justify-between mt-4">
          <Link to="/settings" className="btn btn-secondary">Back</Link>
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default General;