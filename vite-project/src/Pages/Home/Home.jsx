import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  console.log("Home component rendered");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/revent");
        setEvents(response.data); // Set the array of 3 events
        console.log("Fetched events:", response.data);
      } catch (error) {
        console.error("Axios error:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <div style={{ margin: 0 }}>
        <section
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img
            className="MImg"
            src="./src/Assets/School.jpg"
            alt=" school image"
          />
        </section>
        <div 
  style={{
    fontSize: "1.8rem",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "20px",
    letterSpacing: "1px",
    fontFamily: "'Poppins', sans-serif"
  }}>
          <h1>What we've been up to</h1>
        </div>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
  <p style={{ fontSize: "1rem", color: "#444" }}>
    A glimpse into our latest activities and achievements!
  </p>
</div>

        <div>
          <div className="event-container">
            {events.map((event, idx) => {
              const imageUrl = event.images?.[0]?.url;

              return (
                <div
                  key={idx}
                  style={{
                    border: "1px solid #ccc",
                    backgroundColor: "white",
                    padding: "16px",
                    borderRadius: "10px",
                    maxWidth: "400px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3>{event.title || "No title"}</h3>
                  <p>{new Date(event.date).toLocaleDateString()}</p>
                  <p>{event.description || "No description"}</p>

                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={event.title || "Event image"}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                        marginTop: "10px",
                      }}
                    />
                  ) : (
                    <p style={{ color: "gray" }}>No image available</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div 
  style={{
    fontSize: "1.8rem",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "20px",
    letterSpacing: "1px",
    fontFamily: "'Poppins', sans-serif"
  }}>
          <h1>Why Choose us</h1>
        </div>
        <section className="biggie">
          <section className="bluey">
            <div className="b2">
              <div className="feature">
                <img className="imgg" src="./src/Assets/feas.jpeg" />
                <h3>Very Affordable Fees</h3>
              </div>
              <div className="feature">
                <img className="imgg" src="./src/Assets/feee.jpeg" />
                <h3>Food provided free of cost</h3>
              </div>
              <div className="feature">
                <img className="imgg" src="./src/Assets/books.jpeg" />
                <h3>Free Textbooks</h3>
              </div>
              <div className="feature">
                <img className="imgg" src="./src/Assets/rel.jpeg" />
                <h3>Religious Teaching</h3>
              </div>
              <div className="feature">
                <img className="imgg" src="./src/Assets/newteecher.png" />
                <h3>Experienced Staff</h3>
              </div>
              <div className="feature">
                <img className="imgg" />
                <h3>Excellent Sports Faclities</h3>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
export default Home;
