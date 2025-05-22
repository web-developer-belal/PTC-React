import React from "react";

const DashboardStateCard = ({ icon, title, value }) => {
  return (
    <div className="card bg-base-100 shadow-md border border-base-200">
      <div className="card-body items-center text-center">
        <div className="text-3xl">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default DashboardStateCard;
