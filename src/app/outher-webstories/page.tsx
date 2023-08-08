'use client';

import styled from 'styled-components';
import { useState } from 'react';

const WebsiteRectangle = styled.div`
margin-top: 100px;
  background-color: #24242d;
  width: 560px;
  height: 600px;
  border-radius: 16px;
`;

const Column = styled.div`
  top: 100px;
`;

const EntryPoints = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  background-color: #24242d;
  padding: 20px;
  border: 1px solid #000000;
`;

const EntryPointCardContainer = styled.div`
  img {
    cursor: pointer;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background-clip: content-box;
    border: 2px solid;
    padding: 3px;
    position: relative;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    margin: 5px 0px;
  }

  .entry-point-card-title {
    font-weight: 500;
    font-family: Poppins;
    font-size: 11px;
    line-height: 15px;
    text-align: center;
    display: inline-block;
    color: #fff;
  }
`;

const StoryPlayer = styled.div`
  width: 100%;
  height: 100%;
`;

const PlayerSection = () => {
  const stories = useState([
    { href: 'https://assets.codepen.io/1780597/4.png', title: 'Q&A with ZOE Newman', borderColor: '#FF6F32' },
    { href: 'https://assets.codepen.io/1780597/1.png', title: '24 Hours in New York City', borderColor: '#E6AD1C' },
    { href: 'https://assets.codepen.io/1780597/3.png', title: 'The Next King of the Sea', borderColor: '#466FFF' },
  ]);

  const [webstories] = useState([
    { href: 'https://wsdemos.uc.r.appspot.com/ampfest/s1' },
    { href: 'https://wsdemos.uc.r.appspot.com/ampfest/s2' },
    { href: 'https://wsdemos.uc.r.appspot.com/ampfest/s3' },
  ]);

  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const handleClick = (index) => {
    setActiveStoryIndex(index);
  };

  return (
    <>
      <Column>
        <EntryPoints>
          {stories[0].map((story, index) => (
            <EntryPointCardContainer key={index} onClick={() => handleClick(index)}>
              <img src={story.href} className="entry-point-card-img" />
            </EntryPointCardContainer>
          ))}
        </EntryPoints>

        <WebsiteRectangle>
          <StoryPlayer>
            <iframe key={activeStoryIndex} src={webstories[activeStoryIndex].href} style={{ width: '560px', height: '420px' }} />
          </StoryPlayer>
        </WebsiteRectangle>
        {/* Render EntryPointCardContainer here */}
      </Column>

    </>
  );
};

export default function Home() {
  return (
    <div style={{ backgroundColor: '#202029', display: 'flex', justifyContent: 'space-around' }}>
      {/* <WebsiteSection /> */}
      <PlayerSection />
    </div>
  );
}
