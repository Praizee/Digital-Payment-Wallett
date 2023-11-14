import styled from 'styled-components';

export const Button = styled.div`
position: fixed;
padding: 0;
width: 35px;
height: 17%;
right: 1px;
bottom: 50px;
font-size: 3rem;
z-index: 10;
cursor: pointer;
color: #afafaf;
transform: scale(2);
  @media (max-width: 768px) {
width: 35px;
height: 13.5%;
right: -8px;
bottom: 10px;
/* color: pink; */
  }
`
