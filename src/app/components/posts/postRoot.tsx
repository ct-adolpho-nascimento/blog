'use client';

import { ReactNode } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem /* 24px */;
`;

const SkeletonInner = styled.div`
  height: 620px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem /* 16px */;
  background-color: rgb(24 24 27 / 0.8);
  border-radius: 1rem /* 16px */;
`;

interface postRootProps {
  children: ReactNode
}

function postRoot({ children }: postRootProps) {
  return (
    <Container>
      <SkeletonInner>
        {children}
      </SkeletonInner>
    </Container>
  );
}

export default postRoot;