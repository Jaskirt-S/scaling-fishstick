import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/evento');
        setEvents(response.data);
        console.log
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <div 
  style={{
    fontSize: "1.8rem",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "20px",
    letterSpacing: "1px",
    fontFamily: "'Poppins', sans-serif"
  }}>
          <h1>EVENTS</h1>
        </div>
      <div className="event-container">
        {events.map((event, idx) => {
          const imageUrl = event.images?.[0]?.url;

          return (
            
            <div key={idx}
              style={{
                border: '1px solid #ccc',
                backgroundColor: 'white',
                padding: '16px',
                borderRadius: '10px',
                maxWidth: '370px',
                minWidth: '370px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                marginBottom: '20px',
              }}
            >
              <h3>{event.title || 'No title'}</h3>
              <p>{new Date(event.date).toLocaleDateString()}</p>
              <p>{event.description || 'No description'}</p>

              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={event.title || 'Event image'}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    marginTop: '10px',
                  }}
                />
              ) : (
                <p style={{ color: 'gray' }}>No image available</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
