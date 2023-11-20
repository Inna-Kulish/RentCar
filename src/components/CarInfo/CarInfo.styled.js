import styled from 'styled-components';


export const Img = styled.img`
width: 461px;
height: 248px;
margin-bottom: 14px;

border-radius: 14px;
background: #F3F3F2;
`

export const Title = styled.h1`
margin-bottom: 8px;
color: #121417;
  font-family: "ManropeMedium";
  font-size: 18px;
  line-height: 24px;
`
export const ListSpecial = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 6px;
`

export const ItemSpecial = styled.li`
padding-right: 6px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 18px;
  text-transform: capitalize;
border-right: 1px solid rgba(18, 20, 23, 0.5);
`

export const CarDecs = styled.p`
margin-top: 14px;
font-size: 14px;
line-height: 20px;
`

export const TitleList = styled.h2`
margin-top: 24px;
margin-bottom: 8px;
font-family: 'ManropeMedium';
font-size: 14px;
line-height: 20px;
`

export const ItemConditions = styled.li`
padding: 7px 14px;
color: #363535;

font-family: 'Montserrat';
font-size: 12px;
line-height: 18px;

border-radius: 35px;
background: #F9F9F9;
`

export const SpanNumber = styled.span`
color: #3470FF;
font-family: 'MontserratSemiBolt';
`

export const TelLink = styled.a`
display: block;
width: fit-content;
margin-top: 24px;
padding: 12px 50px;

color: white;
font-family: 'ManropeSemiBolt';
font-size: 14px;
line-height: 20px;

border-radius: 12px;
background: #3470FF;

transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
    background-color: #0b44cd;
  }
`