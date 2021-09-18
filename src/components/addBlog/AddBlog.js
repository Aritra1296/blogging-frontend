import React, { useState } from "react";
import { Form, Col, Button, Card, Container } from "react-bootstrap";
import "./AddBlog.css";
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
      <div className="m_20">
        <h1 className="col-12 row align-items-center justify-content-center">
          ADD A NEW Blog
        </h1>
      </div>
      <Container>
        <Card className="add_product_card mt-5 p-4">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formGridEmail">
              <Form.Label className="add_product_field">Blog Name:</Form.Label>
              <Form.Control
                type="text"
                name="blogName"
                value={blogDetails.blogName}
                className="add_product_input_field"
                onChange={handleInput}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Label className="add_product_field">
                Blog Description:
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="blogDescription"
                value={blogDetails.blogDescription}
                onChange={handleInput}
                className="add_product_input_field"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="add_product_field">
                Upload Images : &emsp;
              </Form.Label>
              <input
                type="file"
                name="blogImage"
                className="add_product_input_field image_uploader"
                onChange={handleImage}
                multiple
              />
            </Form.Group>

            <Button variant="warning px-4" type="submit">
              Add Blog
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default AddBlog;
