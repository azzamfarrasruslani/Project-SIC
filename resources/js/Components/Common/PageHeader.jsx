import { Link } from "@inertiajs/react";
import Icon from "@/Components/Icon/Icon";

export default function PageHeader({ title, breadcrumb, children, onAddClick }) {
  const renderBreadcrumb = () => {
    if (!breadcrumb) return null;

    if (typeof breadcrumb === "string") {
      return <span className="text-gray-500">{breadcrumb}</span>;
    }

    if (Array.isArray(breadcrumb)) {
      return breadcrumb.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index > 0 && <span className="text-gray-500">/</span>}
          <span className="text-gray-500 capitalize">
            <Link href={index === 0 ? route("dashboard") : route(item)}>
              {item}
            </Link>
          </span>
        </div>
      ));
    }

    return null;
  };

  return (
    <div
      id="pageheader-container"
      className="flex items-center justify-between p-4"
    >
      <div id="pageheader-left" className="flex flex-col">
        {title && (
          <span id="page-title" className="text-3xl font-semibold">
            {title}
          </span>
        )}
        <div
          id="breadcrumb-links"
          className="flex items-center font-medium space-x-2 mt-2"
        >
          {renderBreadcrumb()}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        {children}
        <button
          onClick={onAddClick}
          className="flex items-center gap-2 bg-hijau text-white px-4 py-2 rounded-lg"
        >
          <Icon name="plus" className="w-4 h-4" />
          Add Button
        </button>
      </div>
    </div>
  );
}
