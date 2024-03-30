import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container,Row,Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {

  const [ProductList, setProductList] = useState([])
  const [query, setQuery] = useSearchParams();

  const getProducts= async ()=>{
    let searchQuery = query.get('q') || "";
    console.log("쿼리값은? ",searchQuery)
    let url =`http://localhost:5000/products?q=${searchQuery}`
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    
  }

  useEffect(() => {
    getProducts();
  }, [query]);
  

  return (
    <div>
        <Container>
          <Row>
            {ProductList.map((menu) => (
              <Col lg={3}>
                <ProductCard item={menu}/>
              </Col>))}
          </Row>
        </Container>
      <ProductCard/>
    </div>
  )
}

export default ProductAll
