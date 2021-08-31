import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <i className="fas fa-spinner fa-4x fa-spin" />;
  }

  return (
    <div className="UsersData " style={{ listStyle: "none", marginTop: "10%" }}>
      {posts.map((post) => (
        <h4 key={post.id} className="list-group-item">
          {post.id} : {post.first_name} {post.last_name}
        </h4>
      ))}
    </div>
  );
};

export default Posts;
