import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CourseSection.css';  // Custom styles for the page

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    axios.get('https://bsesa-backend-1.onrender.com/blogs')
      .then(response => {
        setCourses(response.data);  // Save the response data in state
        setLoading(false);  // Set loading to false once data is loaded
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);  // Stop loading if error occurs
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Show loading state while fetching data
  }

  return (
    <div className="courses-page">
      <h1>Our Courses</h1>
      <div className="courses-container">
        {courses.map(course => (
          <div key={course._id} className="course-card">
            <img 
              src={course.thumbnailUrl || 'https://via.placeholder.com/300'} 
              alt={course.title} 
              className="course-image"
            />
            <h2 className="course-title">{course.title}</h2>
            <p className="course-description">{course.content.substring(0, 150)}...</p> {/* Show a truncated description */}
            <button className="course-btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;
