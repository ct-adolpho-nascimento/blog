'use client';

import { styled } from "styled-components";

const SkeletonShortDescription = styled.div`
  margin-top: 0.75rem /* 12px */;
  height: 300px /* 12px */;
  width: 100%;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(63 63 70 / 1);
`;

interface ShortDescriptionProps {
  content: string
}

const postShortDescription: React.FC<ShortDescriptionProps> = ({ content }) => {
  return (
    <SkeletonShortDescription>{content}</SkeletonShortDescription>
  )
}

export default postShortDescription;