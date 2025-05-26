import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Link } from "react-router";

const DashboardStateCard = ({
  icon,
  title,
  value,
  valuePrefix = "",
  count = false,
  color = "",
  link = "",
}) => {
  const CardContent = (
    <motion.div
      className={`card shadow-sm border border-base-200 ${color} hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 rounded-xl`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="card-body py-4 px-3 grid grid-cols-2 items-center space-y-2 h-30">
        {/* Icon */}
        <div className="text-6xl mx-auto">{icon}</div>

        <div className="flex flex-col gap-2">
          {/* Title */}
          <h3 className="text-sm font-medium opacity-80">{title}</h3>

          {/* Value */}
          <p className="text-2xl font-bold leading-tight">
            {count ? (
              <>
                {valuePrefix}
                <CountUp end={value} duration={1} />
              </>
            ) : (
              `${valuePrefix}${value}`
            )}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return link ? <Link to={link}>{CardContent}</Link> : CardContent;
};

export default DashboardStateCard;
