import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // لاستخراج معرّف المؤتمر من الرابط
import './ConferenceDetailPage.css';

const ConferenceDetails = () => {
  const { conferenceId } = useParams(); // الحصول على المعرف من الرابط
  const [conference, setConference] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // استدعاء بيانات المؤتمر من API
    axios.get(`https://bsesa-backend-1.onrender.com/conference/${conferenceId}`)
      .then(response => {
        setConference(response.data.conference);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching conference details:', error);
        setLoading(false);
      });
  }, [conferenceId]);

  if (loading) {
    return <p>Loading conference details...</p>;
  }

  if (!conference) {
    return <p>Conference not found.</p>;
  }

  return (
    <div className="conference-details">
      <h1>{conference.name}</h1>
      <img src={conference.image} alt={conference.name} className="conference-image" />
      <p className="conference-date">
        {new Date(conference.date.start).toLocaleDateString()} - {new Date(conference.date.end).toLocaleDateString()}
      </p>
      <p className="conference-location">{conference.location}</p>
      <p className="conference-description">{conference.description}</p>

      <h3>Speakers</h3>
      <ul>
        {conference.speakers.map(speaker => (
          <li key={speaker._id}>
            {speaker.firstName} {speaker.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConferenceDetails;
