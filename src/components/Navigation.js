import React, { useState } from 'react';
import styled from 'styled-components';

const StyledNav = styled.div`
  position: relative;
  display: flex;
  #hamburger {
    position: relative;
    left: 20px;
    top: 10px;
    width: 50px;
    height: 50px;
    z-index: 20;
  }
  #hamburger-btn {
    position: relative;
    top: 20px;
    width: 50px;
    height: 6px;
    background-color: white;
    border-radius: 10px;
    transition: all ease-in-out 500ms;

    &.open-menu {
      background: transparent;

      &#hamburger-btn::before {
        transform: rotate(-45deg);
      }
      &#hamburger-btn::after {
        transform: rotate(45deg);
      }
    }
  }
  #hamburger-btn::before,
  #hamburger-btn::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 6px;
    background-color: white;
    border-radius: 10px;
    transition: all ease-in-out 500ms;
  }
  #hamburger-btn::before {
    transform: translateY(-16px);
  }
  #hamburger-btn::after {
    transform: translateY(16px);
  }

  #menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 99vw;
    height: 100vh;
    background-color: #3498db;
    z-index: 10;
    font-size: 6rem;
    ul {
      list-style: none;
    }
  }
`;

export default function () {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
    !isOpen
      ? document.getElementById('hamburger-btn').classList.add('open-menu')
      : document.getElementById('hamburger-btn').classList.remove('open-menu');
  };

  return (
    <StyledNav>
      <div
        id="hamburger"
        onClick={handleClick}
        role="button"
        aria-expanded={isOpen ? true : false}
      >
        <div id="hamburger-btn"></div>
      </div>
      {isOpen && (
        <div id="menu">
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
            <li>Menu Item 4</li>
            <li>Menu Item 5</li>
          </ul>
        </div>
      )}
    </StyledNav>
  );
}
