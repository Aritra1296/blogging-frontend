import React, { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import axios from "../../axios";
// import AuthContext from '../../auth/AuthContext'

const Blogs = () => {
  // const { loginUserID, getLoggedIn } = useContext(AuthContext)
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchItems();
    //getLoggedIn()
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
    return <Blog blog={blog} />;
  });
};

export default Blogs;
