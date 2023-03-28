import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../assets/Logo.svg';
import { ReactComponent as HomeIcon } from '../assets/Home.svg';
import { ReactComponent as HomeBlackIcon } from '../assets/Home-black.svg';
import { ReactComponent as PersonIcon } from '../assets/Person.svg';
import { ReactComponent as PersonBlackIcon } from '../assets/Person-black.svg';
import { ReactComponent as SettingIcon } from '../assets/Setting.svg';
import { ReactComponent as SettingBlackIcon } from '../assets/Setting-black.svg';
import { ReactComponent as LogoutIcon } from '../assets/Logout.svg';
import { TweetModal } from './elements/TweetModal';
import { device } from '../globalStyles.js';

const StyledNav = styled.nav`
  @media screen and (${device.md}) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: white;

    .logo {
      margin-bottom: 0.25rem;
    }
  }

  @media screen and (${device.lg}) {
    align-items: unset;
  }
`;

const StyledLi = styled.li`
  @media screen and (${device.md}) {
    cursor: pointer;
    padding-top: 2rem;
    font-weight: 700;
    color: var(--color-gray-800);

    span {
      display: none;
    }

    .icon {
      display: grid;
      place-items: center;
    }

    .active & {
      color: var(--color-theme);
    }

    &.logout {
      padding-bottom: 1rem;
    }
  }

  @media screen and (${device.lg}) {
    display: flex;
    gap: 1rem;
    padding: 0.75rem 0.5rem;

    span {
      display: block;
    }

    .icon {
      width: 20%;
    }
  }
`;

const StyledNavButton = styled.button`
  cursor: pointer;
  width: 100%;
  margin: 1rem 0;
  padding: 0.5rem 0;
  border: none;
  border-radius: 2rem;
  color: white;
  background-color: var(--color-theme);

  :hover {
    background-color: var(--color-light-orange);
  }
`;

export function Navbar({ tweetInput, currentUser, onChange, onAddTweet }) {
  const { pathname } = useLocation();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleShowModal = () => {
    const nextShowModal = !showModal;
    setShowModal(nextShowModal);
  };

  const handleUserLogoutClick = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <StyledNav>
        <div>
          <div className="logo">
            <LogoIcon />
          </div>
          <ul>
            <NavLink to="/tweets">
              <StyledLi>
                <div className="icon">
                  {pathname.includes('/tweets') &&
                  !pathname.includes('/users') ? (
                    <HomeBlackIcon />
                  ) : (
                    <HomeIcon />
                  )}
                </div>
                <span>首頁</span>
              </StyledLi>
            </NavLink>
            <NavLink
              to={`/users/${currentUser.id}/tweets`}
              className={
                pathname.includes(`users/${currentUser.id}`) && 'active'
              }
            >
              <StyledLi>
                <div className="icon">
                  {pathname.includes(`users/${currentUser.id}`) ? (
                    <PersonBlackIcon />
                  ) : (
                    <PersonIcon />
                  )}
                </div>
                <span>個人資料</span>
              </StyledLi>
            </NavLink>

            <NavLink to="/settings">
              <StyledLi>
                <div className="icon">
                  {pathname.includes('/settings') ? (
                    <SettingBlackIcon />
                  ) : (
                    <SettingIcon />
                  )}
                </div>
                <span>設定</span>
              </StyledLi>
            </NavLink>
          </ul>
          <StyledNavButton onClick={handleShowModal}>推文</StyledNavButton>
        </div>
        <ul>
          <StyledLi className="logout" onClick={handleUserLogoutClick}>
            <div className="icon">
              <LogoutIcon />
            </div>
            <span>登出</span>
          </StyledLi>
        </ul>
      </StyledNav>
      {showModal && (
        <TweetModal
          tweetInput={tweetInput}
          currentUser={currentUser}
          onChange={onChange}
          onAddTweet={onAddTweet}
          onClose={handleShowModal}
        />
      )}
    </>
  );
}

export function AdminNavbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleAdminLogoutClick = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  return (
    <StyledNav>
      <div>
        <div className="logo">
          <LogoIcon />
        </div>
        <ul>
          <NavLink to="/admin/tweets">
            <StyledLi>
              <div className="icon">
                {pathname.includes('/tweets') ? (
                  <HomeBlackIcon />
                ) : (
                  <HomeIcon />
                )}
              </div>
              <span>推文清單</span>
            </StyledLi>
          </NavLink>
          <NavLink
            to="/admin/users"
            className={pathname.includes('uses') && 'active'}
          >
            <StyledLi>
              <div className="icon">
                {pathname.includes('users') ? (
                  <PersonBlackIcon />
                ) : (
                  <PersonIcon />
                )}
              </div>
              <span>使用者列表</span>
            </StyledLi>
          </NavLink>
        </ul>
      </div>
      <ul>
        <StyledLi onClick={handleAdminLogoutClick}>
          <div className="icon">
            <LogoutIcon />
          </div>
          <span>登出</span>
        </StyledLi>
      </ul>
    </StyledNav>
  );
}
