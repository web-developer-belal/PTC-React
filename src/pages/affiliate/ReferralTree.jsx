import React, { useState } from "react";

const ReferralTree = ({ referrals }) => {
  const [scale, setScale] = useState(1);
  const [layout, setLayout] = useState("vertical"); // vertical | horizontal

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.1, 2));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5));
  const toggleLayout = () =>
    setLayout((prev) => (prev === "vertical" ? "horizontal" : "vertical"));

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="flex justify-between items-center mb-4 px-4">
        <div className="space-x-2">
          <button onClick={zoomOut} className="btn btn-sm btn-outline">
            -
          </button>
          <button onClick={zoomIn} className="btn btn-sm btn-outline">
            +
          </button>
        </div>
        <button onClick={toggleLayout} className="btn btn-sm btn-secondary">
          Toggle Layout
        </button>
      </div>

      {/* Zoomable Area */}
      <div className="overflow-auto border rounded-md p-4">
        <div
          className="inline-block transform origin-top-left"
          style={{ transform: `scale(${scale})` }}
        >
          <div className="flex flex-col items-start">
            {referrals.map((ref) => (
              <ReferralNode
                key={ref.id}
                referral={ref}
                level={0}
                layout={layout}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ReferralNode = ({ referral, level, layout }) => {
  const hasChildren = referral.children && referral.children.length > 0;
  const borderColors = ["border-blue-500", "border-green-500", "border-purple-500"];
  const borderColor = borderColors[level % borderColors.length];
  const isVertical = layout === "vertical";

  return (
    <div
      className={`flex ${
        isVertical ? "flex-col items-center" : "flex-row items-start"
      } relative`}
    >
      {/* Parent Node */}
      <div className="flex flex-col items-center z-10">
        <div
          className={`w-16 h-16 rounded-full border-4 ${borderColor} overflow-hidden`}
        >
          <img
            src={referral.avatar}
            alt={referral.name}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="mt-2 font-medium text-sm">{referral.name}</span>
      </div>

      {/* Connector Line */}
      {hasChildren && (
        <div
          className={`${
            isVertical
              ? "h-6 w-px border-l-2"
              : "w-6 h-px border-t-2 mt-8 ml-2"
          } border-dashed border-gray-400`}
        ></div>
      )}

      {/* Children */}
      {hasChildren && (
        <div
          className={`${
            isVertical
              ? "flex flex-col items-center mt-2"
              : "flex flex-col space-y-4 ml-6 mt-4"
          } relative`}
        >
          {isVertical && referral.children.length > 1 && (
            <div className="relative flex justify-between gap-2 w-full px-8">
              <div className="absolute top-2 left-8 right-8 h-px border-t-2 border-dashed border-gray-400 z-0"></div>
              {referral.children.map((child) => (
                <div
                  key={child.id}
                  className="flex flex-col items-center relative z-10"
                >
                  <div className="h-2 mt-2 w-px border-neutral border-dashed border-l-2 mb-1"></div>
                  <ReferralNode
                    referral={child}
                    level={level + 1}
                    layout={layout}
                  />
                </div>
              ))}
            </div>
          )}

          {/* For single child or horizontal layout */}
          {(referral.children.length <= 1 || !isVertical) &&
            referral.children.map((child) => (
              <ReferralNode
                key={child.id}
                referral={child}
                level={level + 1}
                layout={layout}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default ReferralTree;
