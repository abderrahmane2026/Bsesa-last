import React from 'react';
import { BrowserRouter as Router, Route, Routes ,useLocation} from 'react-router-dom';

import Navbar from "./components/NavBare/Navbar"
import HeroSection from './components/Hero/Hero';
import ServiceSection from './components/ServicesSection/ServiseSection';



import ConferenceSection from './components/ConferencesSection/ConferencesSection';
import SecssesSection from './components/Sucssessection/SecssesSection';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AboutUsPage from './pages/About/About';
import PricingSec from './components/PricinSection/Pricin';
import LoginPage from './pages/LoginPage/Login';
import ScrollToTop from './Context/ScrollToTop';
 import SignupPage from './pages/LoginPage/signup';
// 

import NewQuizPage from './Dashboard/Admin Dashboard/NewQuiz/NewQuiz';
import AddVideo from './Dashboard/Admin Dashboard/courseTest/coursetest';

import AdminLayout from './Dashboard/Admin Dashboard/AdminLayout';
import AdminDashboard from './Dashboard/Admin Dashboard/AdminDashboard';
import CreateCategory from './Dashboard/Admin Dashboard/Createcategory/Createcategory';
import NewBlogPage from './Dashboard/Admin Dashboard/createblog/NewBlogPage';
import CreateVideoPage from './Dashboard/Admin Dashboard/createvideo/createvideo';
import NewCourse from './Dashboard/Admin Dashboard/createCourse/CreateCourse';
import NewConferencePage from './Dashboard/Admin Dashboard/Conference/CreateConferencepage';
import BlogDetailPage from './pages/BlogsPage/BlogDetails/BlogDetailPage';
import ActivationPage from './pages/ActivationPage/ActivationPage';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import AccountPage from './Dashboard/User Dashboard/Account/account';
import ConferenceDetails from './pages/Conference/ConferenceDetailPage/ConferenceDetailPage';
import ConferencePage from './pages/Conference/ConferencePage/ConferencePage';
import BlogsPage from './pages/BlogsPage/BlogsPage/BlogsPage';

const App = () => {
  const location = useLocation();

  // تحقق إذا كان المستخدم داخل لوحة تحكم الإدارة
  const isAdminRoute = location.pathname.startsWith('/admin');
  return (
    <div>
       {!isAdminRoute && <Navbar />}
      
      <ScrollToTop /> 
<Routes>


        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<AboutUsPage />} />
        <Route path="/Membership" element={<PricingSec />} />
        
        <Route path="/Login" element={<LoginPage />} />
        {/* create account */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/activate_account/:token" element={<ActivationPage />} />

{/* courses  */}
        <Route path="/Courses" element={<CoursesPage />} />


        {/* blogs */}
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} /> 


        
        <Route path="/Conference" element={<ConferencePage />} />

        
        <Route path="/conference-details/:conferenceId" element={<ConferenceDetails />} />
        


        {/* User deashbord */}
        <Route path="/account" element={<AccountPage />} />




         {/* مسارات الـ Admin */}
         <Route path="/admin" element={<AdminLayout />} >
        <Route index element={<AdminDashboard />} />
          <Route path="NewQuiz" element={<NewQuizPage />} />
          <Route path="NewCourse" element={<NewCourse />} />
          <Route path="NewConference" element={<NewConferencePage />} />
          <Route path="create-video" element={<CreateVideoPage />} />
          <Route path="Newblog" element={<NewBlogPage />} />
          <Route path="create-category" element={<CreateCategory />} />
          <Route path="AddVideotest" element={<AddVideo />} />
        </Route>
        
         </Routes>
      <Footer/>
    
      
      
    </div>
  );
};

export default App;
