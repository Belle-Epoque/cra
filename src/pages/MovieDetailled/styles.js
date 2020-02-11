import styled from "styled-components";

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 900px;
  margin: auto;
`;

export const MovieCard = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: center;
  padding: 10px;
  img {
    width: 100%;
    height: auto;
  }
`;
