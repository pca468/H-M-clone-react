import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let{id} = useParams

  const [product, setProduct] = useState(null)
  const getProductDetail= async()=>{
    let url = `http://localhost:5000/products/${id}`
    let reponse = await fetch(url)
    let data = await reponse.json
    console.log(data)
    setProduct(data);
  }
   useEffect(() => {
    getProductDetail()
  
  },[getProductDetail])

  return (
  
      <Container>
        <Row>
          <Col className='product-img'>
            <img src={product?.img}/>
          </Col>
          <Col>
            <div>{product?.title}</div>
          </Col>
        </Row>
      </Container>
  
  )
}

export default ProductDetail
