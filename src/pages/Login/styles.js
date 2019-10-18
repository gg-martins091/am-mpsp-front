import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgb(0,28,120);
  background: linear-gradient(143deg, rgba(0,28,120,1) 0%, rgba(0,46,199,1) 56%, rgba(0,149,255,1) 100%);
`;

export const Form = styled.form`
  width: 350px;
  border-top: 1px solid #fff;
  background: #002294;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
  padding: 20px 30px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 25px;
    color: #fff;
  }
  img {
    margin-bottom: 25px;
  }
  p {
    color: #fff;
    margin-bottom: 15px;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    margin-bottom: 15px;
    padding: 5px 10px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ccc;
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
    border: 0;
    width: 100%;
    padding: 10px 40px;
    margin-top: 10px;
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