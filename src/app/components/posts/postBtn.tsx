'use client';

import React, { ReactNode } from "react";
import { styled } from "styled-components";

const SkeletonBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.75rem 0 /* 12px */;
  width: 25%;
  height: 2rem /* 12px */;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(255 0 128 / 1);
`;

interface BtnProps {
  title: string;
}

const postBtn: React.FC<BtnProps> = ({ title }) => {
  return (
    <SkeletonBtn>{title}</SkeletonBtn>
  )
}

export default postBtn;