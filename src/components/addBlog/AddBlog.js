import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import axios from "../../axios";
//import { Redirect } from 'react-router-dom'
// import AuthContext from '../../auth/AuthContext'

const AddBlog = () => {
  // const { loginUserRole } = useContext(AuthContext)
  const [blogDetails, setblogDetails] = useState({
    blogName: "",
    blogDescription: "",
    blogImage: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setblogDetails({ ...blogDetails, [name]: value });
  };
  const handleImage = (e) => {
    const value = e.target.files[0];
    //console.log(value);
    setblogDetails({ ...blogDetails, blogImage: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(blogDetails);
    const bodyFormData = new FormData();
    bodyFormData.append("blogImage", blogDetails.blogImage);
    bodyFormData.append("blogName", blogDetails.blogName);
    bodyFormData.append("blogDescription", blogDetails.blogDescription);
    axios
      .post("/blogs/submitNew", bodyFormData, {
        "Content-Type": "multipart/form-data",
      })
      .catch((error) => {
        console.log(error);
      });
    setblogDetails({
      blogName: "",
      blogDescription: "",
      blogImage: "",
    });
    alert("Blog Added successfully");
  };
  // if (loginUserRole === 'User') {
  //   return <Redirect to='/products' />
  // }

  return (
    <div>
      <h1 className="text-center">Add a New Blog</h1>
      <Container>
        <Card className="add_product_card mt-5 p-4">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="blogname">
              <Form.Label className="fw-bold">Blog Name:</Form.Label>
              <Form.Control
                type="text"
                name="blogName"
                value={blogDetails.blogName}
                onChange={handleInput}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mt-3" controlId="blogdesc">
              <Form.Label className="fw-bold">Blog Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="blogDescription"
                value={blogDetails.blogDescription}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mt-3" controlId="blogimg">
              <Form.Label className="fw-bold">
                Upload Images : &emsp;
              </Form.Label>
              <br />
              <input
                type="file"
                name="blogImage"
                onChange={handleImage}
                multiple
              />
            </Form.Group>

            <Button className="mt-3" type="submit">
              Add Blog
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default AddBlog;
