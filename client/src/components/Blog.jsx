import React from 'react';
import './Blog.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Eminent Limo Premier Corporate Transportation Services",
      excerpt: "Welcome to Eminent Limo, your trusted partner for professional and luxurious corporate transportation. Whether you're heading to a business meeting, a corporate event, or need reliable airport transfers, our premier corporate transportation services are designed to meet your every need. Experience unparalleled comfort, punctuality, and discretion with our fleet of high-end vehicles and professional chauffeurs.",
      link: "#"
    },
    {
      id: 2,
      title: "Eminent Limo Elegant Wedding Transportation Services",
      excerpt: "Welcome to Eminent Limo, your premier provider of luxurious and reliable wedding transportation. Make your special day even more memorable with our exquisite fleet and impeccable service. From the moment you say 'I do' to your grand exit, we ensure every detail of your transportation is handled with elegance and precision.",
      link: "#"
    }
  ];

  return (
    <>
      <div className="blog-page">
        <div className="navbar-container">
          <Navbar showHamburger={true} />
        </div>
        
        <div className="blog-header">
          <h1>Blog</h1>
          <p>Guides, tips, and updates from Eminent Limo.</p>
        </div>

        <div className="blog-posts-container">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-post-card">
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <a href={post.link} className="read-more-link">Read more</a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;


