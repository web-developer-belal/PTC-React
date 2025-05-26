import { Link } from "react-router";

const PaymentSetting = () => {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Payment Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Card Number</label>
          <input type="text" className="input input-bordered w-full" placeholder="**** **** **** 1234" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Expiry Date</label>
          <input type="text" className="input input-bordered w-full" placeholder="MM/YY" />
        </div>
        <div>
          <label className="block mb-1 font-medium">CVV</label>
          <input type="password" className="input input-bordered w-full" placeholder="***" />
        </div>
        <div className="flex justify-between mt-4">
                    <Link to="/settings" className="btn btn-secondary">Back</Link>

          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentSetting;