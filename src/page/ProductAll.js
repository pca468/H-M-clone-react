import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container,Row,Col, Alert } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { keyboard } from '@testing-library/user-event/dist/keyboard'

const ProductAll = () => {

  const [ProductList, setProductList] = useState([])
  const [query, setQuery] = useSearchParams();
  let [error, setError] = useState("");

  const getProducts= async ()=>{
      try{

        let searchQuery = query.get('q') || "";
        console.log("쿼리값은? ",searchQuery)
        let url =`https://my-json-server.typicode.com/pca468/H-M-clone-react/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);

        if(data.length < 1){
          if(searchQuery !== ""){
            setError(`${searchQuery}와 일치하는 상품이 없습니다.`)
          }else {
            throw new Error("결과가 없습니다.")
          }
        }
    } catch(err) {
      setError(err.message)
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);
  

  return (
    <div>
        <Container>
          {error ? (
            <Alert variant='danger' className='text-center'>
              {error}
            </Alert>
          ) : (
            <Row className='product-list'>
            {ProductList.map((menu) => (
              <Col lg={3}>
                <ProductCard item={menu}/>
              </Col>))}
          </Row>
          )}
         
        </Container>
      <ProductCard/>
    </div>
  )
}

export default ProductAll
