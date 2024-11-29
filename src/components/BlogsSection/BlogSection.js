import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BlogSection.css';  // Custom styles for the page

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    axios.get('https://bsesa-backend-1.onrender.com/blogs')
      .then(response => {
        setBlogs(response.data);  // Save the response data in state
        setLoading(false);  // Set loading to false once data is loaded
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);  // Stop loading if error occurs
      });
  }, []);

  if (loading) {
    return <div className="loading-state">Loading...</div>;  // Show loading state while fetching data
  }

  return (
    <div className="blogs-page">
      <h1 className="page-title">Our Blogs</h1>
      <p className="page-description">Explore a variety of insightful articles on diverse topics. Stay informed and inspired!</p>
      <div className="blog-cards">
        {blogs.map(blog => (
          <div className="blog-card" key={blog._id}>
            <img src={blog.thumbnailUrl} alt={blog.title} className="blog-image" />
            <h3 className="blog-title">{blog.title}</h3>
            <div className="read-more-container">
              <button className="read-more-button">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
