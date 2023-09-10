import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { HiMenu, HiShoppingCart } from 'react-icons/hi';
import { FiLogOut } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import logo from '../../assets/thepet_logo_img.png';
import { BiSolidUser } from 'react-icons/bi';
import { Header, StyledNavLink } from './Header2.style';
import { useDispatch, useSelector } from 'react-redux';
import { memberAction } from '../../feature/member/member';

function Header2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const member = useSelector((state) => state.member); // 추가
  const menuList = [
    {
      title: '구독',
      link: '/sub',
    },
    {
      title: '맞춤 추천',
      link: '/customready',
    },
    {
      title: '쇼핑',
      link: '/shop',
    },
    {
      title: '흰디카 예약',
      link: '/heendycar',
    },
    {
      title: '흰디 놀이터',
      link: '/playground',
    },
  ];

  // 햄버거 버튼 toggle state
  const [isToggled, setIsToggled] = useState(false);
  // 사용자 toggle state
  const [userToggled, setUserToggled] = useState(false);

  // 로그인 설정
  const Rest_api_key = process.env.REACT_APP_KAKAO_REST_API_KEY; //REST API KEY
  const redirect_uri = `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`; //Redirect URI
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <Header isToggled={isToggled} userToggled={userToggled}>
      {/* 햄버거 버튼(bar) */}
      <div
        className="toggle"
        onClick={() => {
          setIsToggled(!isToggled);
          setUserToggled(false);
        }}
      >
        {!isToggled ? <HiMenu /> : <IoClose />}
      </div>

      {/* Apple 로고 */}
      <div className="logo">
        <img
          src={logo}
          alt="Logo"
          className="logo"
          onClick={() => navigate('/')}
        />
      </div>

      {/* User 버튼 */}
      <div
        className="user"
        onClick={() => {
          setUserToggled(!userToggled);
          setIsToggled(false);
        }}
      >
        {!userToggled ? <BiSolidUser /> : <IoClose />}
      </div>

      {/* 메뉴 리스트 */}
      <div className="header__menulist">
        {menuList.map((menuEle, idx) => (
          <div className="list__container" key={idx}>
            <StyledNavLink to={menuEle.link}>{menuEle.title}</StyledNavLink>
          </div>
        ))}
      </div>

      {/* User 메뉴 리스트 */}
      <div className="header__right">
        {member.name ? (
          <div className="list__container">
            <StyledNavLink to="/cart" className="menu_icon cart_icon">
              <HiShoppingCart></HiShoppingCart>
              <p className="menu_text cart_text"> 장바구니</p>
            </StyledNavLink>
          </div>
        ) : (
          <></>
        )}
        <div className="list__container">
          {member.name ? (
            <>
              <StyledNavLink to="/mypage">{member.name}님</StyledNavLink>
              <StyledNavLink to="/" className="menu_icon logout_icon" onClick={() => {dispatch(memberAction.clearMember());}}>
                <FiLogOut></FiLogOut>
                <p className="menu_text cart_text"> 로그아웃</p>
              </StyledNavLink>
            </>
          ) : (
            <StyledNavLink to="" onClick={handleLogin}>
              로그인
            </StyledNavLink>
          )}
        </div>
        <div className="list__container">
          <StyledNavLink to="/clubregister">클럽 흰디 가입</StyledNavLink>
        </div>
      </div>
    </Header>
  );
}

export default Header2;
