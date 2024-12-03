import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // For routing to the course details page
import './CoursesPage.css';  // Import the styles for the page

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch courses when the component mounts
  useEffect(() => {
    axios.get('https://bsesa-backend-1.onrender.com/courses')  // Your API endpoint for courses
      .then(response => {
        setCourses(response.data);  // Save courses to the state
        setLoading(false);  // Set loading to false once courses are fetched
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading-state">Loading...</div>;  // Show loading message while fetching data
  }

  return (
    <div className="courses-page">
      <h1 className="page-title">Available Courses</h1>
      <p className="page-description">Explore a variety of courses to enhance your skills and knowledge.</p>
      
      <div className="courses-grid">
        {courses.map(course => (
          <div className="course-card" key={course._id}>
            <img src={course.thumbnailUrl} alt={course.title} className="course-thumbnail" />
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.shortDescription}</p>
            <Link to={`/courses/${course._id}`} className="course-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
