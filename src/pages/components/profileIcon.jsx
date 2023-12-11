import { Link } from "react-router-dom";

function ProfileIcon() {
  return (
    <div className="d-flex">
      <span className="px-4 py-2 rounded-circle border-secundary profile">
      <Link to="/"><i className="bi bi-person-dash icon-window"></i></Link>
      </span>
    </div>
  );
}

export default ProfileIcon;