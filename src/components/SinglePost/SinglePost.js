import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import postsList from "../../data";
import "./SinglePost.css";

export default function SinglePost() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const id = parseInt(postId);
  const post = postsList.find(p => p.id === id);

  if (!post) {
    return <h2 style={{ color: "red", padding: "2rem" }}>Post not found!</h2>;
  }

  return (
    <div className="single-post-wrapper">
      <div className="single-post-container">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <h1 className="single-post-title">{post.title}</h1>
        <img src={post.img} alt={post.title} className="single-post-image" />
        <p className="single-post-desc">{post.desc}</p>
      </div>
    </div>
  );
}
