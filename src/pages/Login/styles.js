import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #000029;

`;

export const Form = styled.form`
  width: 400px;
  border-right: 1px solid #9f9f9f;
  border-left: 1px solid #9f9f9f;
  border-radius: 8px;
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: 25px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    margin-bottom: 15px;
    padding: 10px 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #9f9f9f;
    border-radius: 8px;
    background: #000029;
    &::placeholder {
      color: #9f9f9f;
    }
    &:focus {
      border: 1px solid #3a8fc7;
      font-weight: bold;
      &::placeholder {
        font-weight: bold;
      }
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #3a41c7;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 40%;
    margin-top: 10px;
    cursor: pointer;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;