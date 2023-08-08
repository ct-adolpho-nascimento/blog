'use client';

import { styled } from "styled-components";

const SkeletonDescription = styled.div`
  margin-top: 0.75rem /* 12px */;
  height: 0.75rem /* 12px */;
  width: 66.666667%;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(63 63 70 / 1);
`;

function postDescription() {
  return (
    <SkeletonDescription />
  )
}

export default postDescription;