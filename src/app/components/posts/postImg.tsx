'use client';

import { ReactNode } from "react";
import { styled } from "styled-components";

const SkeletonImg = styled.div`
  margin: 0.75rem 0;
  height: 3.5rem /* 56px */;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(63 63 70 / 1);
`;

function postImg({ children }: { children: ReactNode }) {
  return (
    <SkeletonImg> {children} </SkeletonImg>
  )
}

export default postImg;