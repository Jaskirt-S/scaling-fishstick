import "./Footer.css";

function Footer() {
  return (
    <div
      className="footer-container"
      style={{
        backgroundColor: "rgb(79, 114, 182)",
        padding: "20px",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        color: "white"
      }}
    >
      <section
        className="footer-section"
        style={{ margin: "10px", minWidth: "200px" }}
      >
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><h3 style={{ marginBottom: "10px", fontSize: "18px" }}>Other Links</h3></li>
          <li>Public Disclosure</li>
          <li>Management & Staff</li>
        </ul>
      </section>
      <section
        className="footer-section"
        style={{ margin: "10px", minWidth: "200px" }}
      >
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><h3 style={{ marginBottom: "10px", fontSize: "18px" }}>Socials</h3></li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100083023557049&mibextid=rS40aB7S9Ucbxw6v"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#e0e0e0", textDecoration: "none", transition: "color 0.2s ease-in-out" }}
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://x.com/BasjsChkSahib?t=IZtsCAk9BTRYi7TgivjQ2A&s=08"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#e0e0e0", textDecoration: "none", transition: "color 0.2s ease-in-out" }}
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/basjs_chk/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#e0e0e0", textDecoration: "none", transition: "color 0.2s ease-in-out" }}
            >
              Instagram
            </a>
          </li>
        </ul>
      </section>
      <section
        className="footer-section"
        style={{ margin: "10px", minWidth: "200px" }}
      >
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><h3 style={{ marginBottom: "10px", fontSize: "18px" }}>Contact</h3></li>
          <li>
            <a
              className="footer-button email-button"
              href="mailto:jaskirt5sidhu@gmail.com"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
                marginTop: "8px"
              }}
            >
              Email Us
            </a>
            &nbsp;
            <a
              className="footer-button call-button"
              href="tel:9056808386"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#28A745",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
                marginTop: "8px"
              }}
            >
              Call Us
            </a>
          </li>
          <li>
            
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Footer;
