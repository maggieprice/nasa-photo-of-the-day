import styled from "styled-components";

export const NasaPhotoTitle = styled.nav`
  color: black;
  background-color:coral;
  font-size: 2rem;
  margin-bottom: 0.75rem;
  padding:1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width:100%;
  height: 3rem;
  border-radius:1rem;
`;
export const MyImgHolder = styled.div`
display:flex;
justify-content: center;
align-items: center;
width:100%;
background: cornsilk;
margin-top:1rem;
`;

export const MyImage = styled.img`
  flex-shrink: 0;
  width: 100%;
  border-style: none;
  border-radius:1rem;
  display: flex;
  justify-content:center;
  align-items: center;
  
`;

export const MyContent = styled.section`
width:100%;
`;

export const MyContentText = styled.article`
font-size:5rem;
width:100%;
margin-top:1rem; 
padding:2rem;
background-color:coral;
border-radius:1rem;
display: flex;
justify-content: center;
align-items: center;
`;

