import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";
import axios from "axios";
import "./App.css";

const UsersDisplay = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    const GetUsersData = async () => {
      setLoading(true);
      const res = await axios.get("https://reqres.in/api/users?page=2");
      setPosts(res.data.data);
      setLoading(false);
      console.log(res.data);

      const Users = JSON.stringify(posts);
      localStorage.setItem("users", Users);
    };

    GetUsersData();
  }, []);

  var indexOfLastPost = currentPage * postsPerPage;
  var indexOfFirstPost = indexOfLastPost - postsPerPage;
  var currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  var paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5" style={{ textAlign: "center" }}>
      <h1
        className="ListUsers"
        style={{ width: "50%", margin: "auto", borderRadius: "20px" }}
      >
        List of Users
      </h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default UsersDisplay;
