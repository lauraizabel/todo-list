import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContainerBody = styled.div`
  width: 90%;
  height: 70vh;
  margin: 70px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  svg {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 340px) {
    .texts {
      h3,
      h4 {
        font-weight: 400;
        text-align: center;
        color: #69665c;
      }
      h3 {
        line-height: 22px;
        margin-bottom: 18px;
      }
      h4 {
        margin-bottom: 18px;
      }
      .tab {
        width: 50px;
        height: 3px;
        background-color: #b2afa1;
        margin-bottom: 18px;
      }
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
