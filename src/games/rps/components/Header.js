import './Header.css'
import '../Rps.css'
import styled from 'styled-components';
import H1 from '../components/images/rockpaperart.png'

const Wrapper=styled.section`
background-color: #222;
color: #fff;
font-family: "DotGothic16", sans-serif;
font-weight: 700;`

const Container=styled.div`
margin: auto;
width: 100%;`



function Header() {
  return (
    <Wrapper>
      <Container id="container">
        <img src={H1} id="h1title" alt=""></img>
      </Container>
    </Wrapper>
  );

}

export default Header