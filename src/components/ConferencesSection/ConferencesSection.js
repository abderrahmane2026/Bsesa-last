import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./ConferenceSection.css"

const ConferenceSection = () => {
  const [conferences, setConferences] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://bsesa-backend-1.onrender.com/conferences')
      .then(response => {
        if (Array.isArray(response.data.conferences)) {
          setConferences(response.data.conferences);
        } else {
          console.error('Expected conferences to be an array');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading conferences...</p>;
  }

  const goToDetails = (conferenceId) => {
    navigate(`/conference-details/${conferenceId}`);
  };

  return (
    <div className="conferences-page">
      <h1 className="page-title">Upcoming Conferences</h1>
      <div className="conference-cards">
        {Array.isArray(conferences) && conferences.length > 0 ? (
          conferences.map(conference => (
            <div 
              className="conference-card" 
              key={conference._id}
              onClick={() => goToDetails(conference._id)}
            >
              <img 
                src={conference.image} 
                alt={conference.name} 
                className="conference-image" 
              />
              <div className="conference-info">
                <h3 className="conference-name">{conference.name}</h3>
                <p className="conference-date">
                  {new Date(conference.date.start).toLocaleDateString()} - {new Date(conference.date.end).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div>No conferences available</div>
        )}
      </div>
    </div>
  );
};

export default ConferenceSection;
