import styled from "styled-components";

export const Field = styled.form`
  max-width: 600px;
  margin: auto;
  padding: 40px;
`;

export const Legend = styled.legend`
  color: gold;
`;

export const Label = styled.span`
  color: rgb(122, 227, 111);
  padding: 15px;
  display: inline-block;
  width: 200px;
`;

export const Options = styled.select`
  border: 2px solid black;
  width: 33%;
`;

export const Button = styled.button`
  color: gold;
  background-color: gray;
  padding: 5.5px;

  &:hover {
    background-color: rgb(173, 173, 173);
  }
`;

export const Paragraph = styled.p`
  margin: auto;
  padding: 20px;
  text-align: center;
`;

export const Effect = styled.p`
  color: gold;
  text-align: center;
`;
