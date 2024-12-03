import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './BlogDetailPage.css';  // استيراد ملفات الـ CSS المخصصة لتصميم الصفحة
import { FaCalendarAlt, FaEye, FaRegFileAlt } from 'react-icons/fa';  // استيراد الأيقونات من Font Awesome

const BlogDetailPage = () => {
  const { id } = useParams();  // الحصول على معرّف المدونة من الرابط
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`https://bsesa-backend-1.onrender.com/blog/${id}`)
      .then(response => {
        setBlog(response.data);  // تخزين بيانات المدونة في الحالة
      })
      .catch(error => {
        console.error('Error fetching blog details:', error);
      });
  }, [id]);  // إعادة التحميل عند تغيير معرّف المدونة

  if (!blog) {
    return <div className="loading-state">Loading...</div>;  // عرض حالة التحميل أثناء جلب البيانات
  }

  return (
    <div className="blog-detail-page">
      <div className="blog-header">
        <img src={blog.thumbnailUrl} alt={blog.title} className="blog-thumbnail" />
        <h1 className="blog-title">{blog.title}</h1>
        <div className="blog-meta">
          <div className="meta-item">
            <FaCalendarAlt className="icon" />
            <p className="meta-text">{new Date(blog.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="meta-item">
            <FaEye className="icon" />
            <p className="meta-text">{blog.views} Views</p>
          </div>
        </div>
      </div>
      
      <div className="blog-content">
        <div className="blog-section">
          <h2>Course Overview</h2>
          <p>{blog.content}</p>
        </div>

        <div className="blog-section">
          <h2>Training Categories</h2>
          <ul>
            {blog.categories.map(category => (
              <li key={category._id} className="category-item">{category.name}</li>
            ))}
          </ul>
        </div>

        <div className="blog-footer">
          <p><FaRegFileAlt className="icon" /> For more details, visit our website or contact us!</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
