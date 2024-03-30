import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({authenticate, setauthenticate}) => {
    const menuList =[
        "여성",
        "Divided",
         "남성", 
         "신생아/유아", 
         "아동", 
         "H&M HOME", 
         "SALE", 
         "지속가능성",
        ];
        const navigate = useNavigate()

        const goToLogin = () => {
          navigate('/login')
        }

        const search = (event) => {
         // 입력한 검색어를 읽어와서 
         let keyword = event.target.value
         console.log("keyword", keyword)
         //url을 바꿔준다.
         navigate(`/?q=${keyword}`)
        }

  return (
    <div>
      <div>
        {authenticate ? (
            <div class ="login-button" onClick={() => setauthenticate(false)}>
              <FontAwesomeIcon icon={faUser} />
            <div>로그아웃</div>
              </div>
        ): (
          <div class ="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
        </div>
        )}

      </div>
      <div class= "nav-section">
      <img 
      width={100}
      src="https://i.namu.wiki/i/ZWP58I-HjyUkZqnghG-U3ACWqC_zd1jpN3g4B-v7tfzT0OhuYuf101Qd5XJ-soxMoYc0qOrFw8d08HFaL_I9K0TwAMJJ3Kg0jnzX8CfHJP8StqubBOFA1JahuiPpyMeLI-l2n5zKgoEViD7VDipNUA.svg"
      />
      </div>
      <div  className="menu-area">
            <ul className="menu-list">
                {menuList.map(menu => (
                    <li>{menu}</li>
                    ))}
            </ul>
        <div className='searchBox'>           
            <FontAwesomeIcon icon={faSearch} />
            <input type='text' onKeyPress={(event) => search(event)} placeholder='제품검색'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
