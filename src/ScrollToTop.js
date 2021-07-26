import React, { useState, useEffect } from 'react';
import { FiArrowUp } from "react-icons/fi";
import styled from 'styled-components';

const Scrolls = styled.span`
  position: fixed;
  bottom: 4vh;
  right: 5rem;
  height: 6rem;
  width: 6rem;
  background: #84BCCC;
  color: #fff;
  font-size: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  cursor: pointer;
  transition: .3s ease-out;
  &:hover{
    background: #1A616C;
  }`

const FiArrowUps = styled.i`
  margin-top: 10px;
    animation: scrollTop 0.5s alternate ease infinite;
    @keyframes scrollTop {
    from {
        transform: translateY(2px);
    }
    to {
        transform: translateY(-1px);
    }
}`

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            return window.removeEventListener('scroll', toggleVisibility);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);

        } else {
            setVisible(false);
        }
    };

    return (
        <>
            {visible && (<>
                <Scrolls onClick={scrollToTop}>
                    <FiArrowUps>
                        <FiArrowUp />
                    </FiArrowUps>
                </Scrolls>
            </>
            )}
        </>
    )
}

export default ScrollToTop
