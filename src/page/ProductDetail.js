import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let{id} = useParams()

  const [product, setProduct] = useState(null)
  const getProductDetail= async()=>{
    let url = `https://my-json-server.typicode.com/pca468/H-M-clone-react/products/${id}`
    let reponse = await fetch(url);
    let data = await reponse.json();
    console.log(data)
    setProduct(data);
  }
   useEffect(() => {
    getProductDetail()
  
  },[])

  return (
  
      <Container>
        <Row>
          <Col className='product-img'>
            <img src={product?.img}/>
          </Col>
          <Col>
            <div>{product?.title}</div>
            <div>{product?.price}</div>
            <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item) => (
                    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className="add-button">
              추가
            </Button>
          </Col>
        </Row>
      </Container>
  
  )
}

export default ProductDetail
