import "./Footer.css"
function Footer() {
  return (
    <>
      <div className="Container" style={{backgroundColor:"rgb(79,114,182)",}}>
        <section>
          <ul>
            <li><h3>Other Links</h3></li>
            <li>Public Disclosure</li>
            <li>Mangement & Staff</li>
          </ul>
        </section>
        <section>
          <ul>
            <li><h3>Socials</h3></li>
            <li>facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </section>
        <section>
          <ul>
            <li><h3>Contact</h3></li>
            <li>Email</li>
            <li>Phone</li>
          </ul>
        </section>
      </div>
    </>
  );
}
export default Footer;
