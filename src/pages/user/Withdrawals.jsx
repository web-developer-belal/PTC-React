import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const dummyData = [
  {
    date: "2025-05-01",
    method: "PayPal",
    account: "john@example.com",
    amount: 25.5,
    status: "Pending",
  },
  {
    date: "2025-05-02",
    method: "Bank",
    account: "doe_acc_2211",
    amount: 40,
    status: "Approved",
  },
  {
    date: "2025-05-03",
    method: "Crypto",
    account: "0xA81f2...",
    amount: 30,
    status: "Rejected",
  },
];

const Withdrawals = () => {
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState({ search: "", status: "", date: "" });

  const filteredData = dummyData.filter((entry) => {
    const matchesSearch = entry.account.toLowerCase().includes(filter.search.toLowerCase());
    const matchesStatus = filter.status === "" || entry.status === filter.status;
    const matchesDate = filter.date === "" || entry.date === filter.date;
    return matchesSearch && matchesStatus && matchesDate;
  });

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Total Withdrawn" value="$420" />
        <StatCard title="Pending Withdrawals" value="$55" />
        <StatCard title="Rejected Withdrawals" value="$15" />
        <StatCard title="Available Balance" value="$100" />
      </div>

      {/* Button */}
      <div className="flex justify-end">
        <button
          className="btn btn-primary"
          onClick={() => setShowForm((prev) => !prev)}
        >
          {showForm ? (
            <>
              <FaTimes className="mr-2" /> Cancel
            </>
          ) : (
            <>
              <FaPlus className="mr-2" /> Make Withdrawal
            </>
          )}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <form className="card bg-base-100 shadow p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Method (e.g., PayPal)" className="input input-bordered w-full" required />
            <input type="text" placeholder="Account Number / Email" className="input input-bordered w-full" required />
            <input type="number" placeholder="Amount ($)" className="input input-bordered w-full" required />
          </div>
          <div className="flex justify-end">
            <button className="btn btn-success">Submit</button>
          </div>
        </form>
      )}

      {/* Filters */}
      {!showForm && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search Account Name"
            className="input input-bordered w-full"
            value={filter.search}
            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          />
          <select
            className="select select-bordered w-full"
            value={filter.status}
            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
          >
            <option value="">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
          <input
            type="date"
            className="input input-bordered w-full"
            value={filter.date}
            onChange={(e) => setFilter({ ...filter, date: e.target.value })}
          />
        </div>
      )}

      {/* Table */}
      {!showForm && (
        <div className="overflow-x-auto bg-base-100 shadow rounded-lg mt-4 mb-16">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Date</th>
                <th>Method</th>
                <th>Account</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">No results found</td>
                </tr>
              ) : (
                filteredData.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.date}</td>
                    <td>{item.method}</td>
                    <td>{item.account}</td>
                    <td>${item.amount}</td>
                    <td>
                      <span className={`badge badge-${getBadgeStyle(item.status)} badge-soft`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Pagination Buttons */}
          <div className="flex justify-end p-4 space-x-2">
            <button className="btn btn-sm btn-outline">Previous</button>
            <button className="btn btn-sm btn-outline">Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Stat Card
const StatCard = ({ title, value }) => (
  <div className="card bg-base-100 shadow border border-base-200">
    <div className="card-body text-center">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </div>
);

// Badge Style Logic
const getBadgeStyle = (status) => {
  switch (status) {
    case "Approved":
      return "success";
    case "Pending":
      return "warning";
    case "Rejected":
      return "error";
    default:
      return "neutral";
  }
};

export default Withdrawals;
