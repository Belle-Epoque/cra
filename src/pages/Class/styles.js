import styled from 'styled-components';

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1200px;
  margin: auto;
`;

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  text-align: center;
  padding: 10px;
  img {
    width: 100%;
    height: auto;
  }
`;
