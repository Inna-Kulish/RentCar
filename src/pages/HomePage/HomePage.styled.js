import styled from "styled-components";
import HeroImg from '../../images/map.jpg'

export const Wrapper = styled.section`
width: 100vw;
height: 170px;
padding-top: 90px;

background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(${HeroImg});
     background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const Title = styled.h1`
text-align: center;
margin-bottom: 46px;
font-family: 'ManropeMedium';
font-size: 44px;
line-height: 20px;
color: white;
`

export const List = styled.ul`
display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 48px;

`

export const Item = styled.li`

`