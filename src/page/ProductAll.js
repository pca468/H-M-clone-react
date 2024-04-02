import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container,Row,Col, Alert } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { keyboard } from '@testing-library/user-event/dist/keyboard'
import { productAction } from '../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'

const ProductAll = () => {

  // const [ProductList, setProductList] = useState([]) redux 에서는 useState대신 useSelector을 사용한다.
  const ProductList = useSelector(state => state.product.ProductList)
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch()
  let [error, setError] = useState("");

  const getProducts=()=>{
       // 아래 코드 처럼 dispatch를 사용하면 바로 reducer를 가는 것이 아니라 productAction을 거쳐서 가게됨

        let searchQuery = query.get('q') || "";
        console.log("쿼리값은? ",searchQuery)
        dispatch(productAction.getProducts(searchQuery));

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
