import styled from "styled-components";

export const Container = styled.header`
  width: 90%;
  margin: 28px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    cursor: pointer;
  }
  @media (min-width: 320px) {
    .buttons {
      width: 40%;
      display: flex;
      justify-content: space-between;
      button {
        width: 90px;
        height: 36px;
        border-radius: 6px;
        border: none;
        background-color: #69665c;
        color: white;
        font-weight: 600;
      }
      button:nth-child(2) {
        width: 50px;
        background: none;
        border: none;
        color: #69665c;
      }
    }
  }
`;
