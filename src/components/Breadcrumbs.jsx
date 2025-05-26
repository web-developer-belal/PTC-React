import { Link } from 'react-router';

const Breadcrumbs = ({ items }) => {
  return (
    <div className="breadcrumbs text-xs mb-4">
      <ul>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          const content = (
            <span className="inline-flex items-center gap-2">
              {item.icon && <item.icon className="h-4 w-4 stroke-current" />}
              {item.label}
            </span>
          );

          return (
            <li key={index}>
              {isLast ? (
                content
              ) : (
                <Link to={item.href || '#'}>{content}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
