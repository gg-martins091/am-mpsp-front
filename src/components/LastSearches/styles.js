import styled from "styled-components";


export const Container = styled.div`
  padding: 30px;
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  h3 {
    align-self: center;
  }
  ul {
    padding: 10px 20px;
    list-style: none;
    border: 1px solid #9f9f9f;

    li {
      &:not(:last-child) {
        border-bottom: 1px solid yellow;
        margin-bottom: 10px;
      }
      
      a{
        display: flex;
        align-items: center;
        padding: 10px;
        
        i {
          margin-right: 15px;
        }

        div {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;