import React, { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import axios from "../../axios";


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line
  }, []);

  const fetchItems = async () => {
    try {
      await axios.get(`/blogs/all`).then((res, req) => {
        setBlogs(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return blogs.map((blog) => {
    return <Blog key={blog._id} blog={blog} />
  });
};

export default Blogs;
