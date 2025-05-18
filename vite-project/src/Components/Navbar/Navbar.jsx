import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "rgb(79,114,182)",
        }}
      >
        <Link className="H">
          <p
            className="basjs"
            style={{ fontSize: 70, margin: 0, fontWeight: "bolder" }}
          >
            B A S J S
          </p>
        </Link>
        <h6 style={{ marginLeft: "-255px", marginTop: 53 }}>estd.1915</h6>
        <p />
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: 600,
          }}
        >
          <Link to="/home" className="nav_opt_link">
            <p className="nav_opt">Home</p>
          </Link>
          <Link to="/events" className="nav_opt_link">
            <p className="nav_opt">Events </p>
          </Link>
          <a
            href="./src/assets/Holidays.pdf"
            target="_blank"
            className="nav_opt_link"
          >
            <p className="nav_opt">Calender</p>
          </a>
          <Link to="/Admission" className="nav_opt_link">
            <p className="nav_opt">Admissions</p>
          </Link>
          <Link to="/login" className="nav_opt_link">
            <p className="nav_opt">LOGIN</p>
          </Link>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
