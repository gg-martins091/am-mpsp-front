import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: #333;
  margin-top: 15px;
  background: rgba(66, 152, 245, .3);
  padding: 15px;
  box-shadow: 4px 7px 15px -4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  h3 {
    font-size: 18px;
    color: #111;
  }
`;

export const Form = styled.form`
  border-radius: 8px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  .inputs {
    margin-right: 30px;
  }
  img {
    margin-bottom: 25px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
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
    width: 108%;
    border: 1px solid #ccc;
    border-radius: 8px;
    &::placeholder {
      color: #ccc;
    }
    &:focus {
      border: 1px solid #999;
      color: #999;
      &::placeholder {
        color: #999;
      }
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #3a41c7;
    height: 46px;
    border: 0;
    border-radius: 5px;
    width: 30%;
    margin-top: 10px;
    align-self: center;
    cursor: pointer;
    &:hover {
      background: #3a62c7;
    }
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