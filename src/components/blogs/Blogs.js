import React, { useEffect, useState, useContext } from 'react'
import Blog from '../blog/Blog'
import { Row, Col, CardGroup } from 'react-bootstrap'
import axios from 'axios'
// import AuthContext from '../../auth/AuthContext'

const Blogs = () => {
  // const { loginUserID, getLoggedIn } = useContext(AuthContext)
  const [products, setProducts] = useState([])

  // useEffect(() => {
  //   fetchItems()
  //   getLoggedIn()
  //   // eslint-disable-next-line
  // }, [loginUserID])

  // const fetchItems = async () => {
  //   try {
  //     await axios
  //       .get(`http://flybuyapi.aritrarivu.co.in/products`)
  //       .then((res, req) => {
  //         setProducts(res.data)
  //       })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

 

  return (
    <div className='m_20'>
      <CardGroup>
        <Row  className=''>
          {/* {products.map((product, index) => {
            return (
              <Col key={product.productName}>
                <Product
                  product={product}
                
                />
              </Col>
            )
          })} */}
          <Blog/>
        </Row>
      </CardGroup>
    </div>
  )
}

export default Blogs
