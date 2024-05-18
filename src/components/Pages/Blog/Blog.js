import React from "react";
import "./Blog.css";
import useTitle from "../../hook/useTitle";
import BlogPost from "./BlogPost"; // Assuming you've named the BlogPost component file as "BlogPost.js"

const Blog = () => {
  useTitle("Blog");

  const blogPosts = [
    {
      imageSrc: "./images/blog-1.jpg",
      altText: "Design",
      category: "design",
      date: "Apr 04, 2023",
      title: "Design conference in 2023",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, autem?",
    },
    // Add other blog posts here
  ];

  return (
    <div className="article blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <section className="blog-post">
        <ul className="blog-posts-list">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              imageSrc={post.imageSrc}
              altText={post.altText}
              category={post.category}
              date={post.date}
              title={post.title}
              text={post.text}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Blog;
