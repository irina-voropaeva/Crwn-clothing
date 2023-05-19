import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CategoryPreviewTitle = styled.h2`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  text-align: center;
`;

export const Preview = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
