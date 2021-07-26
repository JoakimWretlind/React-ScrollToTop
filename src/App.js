import React, { useState, useEffect } from 'react';
import { GlobalStyling } from './globalStyling';
import styled from 'styled-components';
import ScrollToTop from './ScrollToTop';

const BackToTop = styled.div`
    background: #333;
    position: relative;
    max-width: 1280px;
    margin: 3rem auto;
`

const BackToTopH1 = styled.h1`
    font-size: 57px;
    color: #f1f1f1;
    padding: 3rem;
`

const BackToTopP = styled.p`
  color: #999;
  font-size: 3.5rem;
  margin: 0 3rem 4rem;
  padding-bottom: 3rem;
`

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
  }
`

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

function App() {
  return (
    <>
      <GlobalStyling />
      <BackToTop>
        <BackToTopH1> Scroll to Top (Back To Top) </BackToTopH1>
        <BackToTopP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</BackToTopP>
        <BackToTopP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</BackToTopP>
        <BackToTopP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</BackToTopP>
        <BackToTopP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</BackToTopP>
        <BackToTopP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</BackToTopP>
        <BackToTopP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</BackToTopP>
        <BackToTopP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</BackToTopP>
        <BackToTopP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</BackToTopP>
        <ScrollToTop />
      </BackToTop>
    </>

  );
}

export default App;
