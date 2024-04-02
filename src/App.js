import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute';

// 1. 전체상품페이지, 로그인, 상품상세페이지
// 1-1. 네비게이션 바
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품 디테일을 눌렀으나, 로그인이 안되어 있을 경우에는 로그인 페이지가 먼저 나온다.
// 5. 로그인이 되어있을 경우 , 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. , 다시 로그인 페이지가 보인다.
// 8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 9. 상품을 검색할 수 있다. 

function App() {
  const [authenticate, setauthenticate] = useState(false) // true면 로그인이 됨 false면 로그인이 안됨

  useEffect(() => {
    console.log("AAAA",authenticate)
  },[authenticate])

  return ( // detail 페이지는 Restful Route의 규칙을 따라서 만든다.
          // Navbar를 Routes 위에 넣어서 화면 전환시에도 계속 나오게 만든다.
          // Rest API 와 Restful와 같은 개념
    <div>
      <Navbar authenticate={authenticate}  setauthenticate ={setauthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route 
          path="/login" 
          element={<Login setauthenticate = {setauthenticate}/>}
          />
        <Route 
          path="/product/:id" 
          element={<PrivateRoute />}/> 
      </Routes>
    </div>
  );
}

export default App;
