import { Link, useLocation } from "react-router-dom";

function BreadCrumbs() {
  const location = useLocation().pathname;

  const currentLink = [];

  const crumbs = location
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink.join("")}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
}

export default BreadCrumbs;
