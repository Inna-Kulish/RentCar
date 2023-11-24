import styled from "styled-components";
import HeroImg from "../../images/map.jpg";

export const MainSection = styled.section`
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
`;

export const Section = styled.section`
padding-top: 15px;
`

export const Wrapper = styled.section`
  padding-left: 15px;
  padding-right: 15px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 46px;
  font-family: "ManropeMedium";
  font-size: 44px;
  line-height: 20px;
  color: white;
`;

export const List = styled.ul`
  display: flex;
  column-gap: 24px;
  row-gap: 48px;
`;

export const Item = styled.li`
  padding: 30px;
  flex-basis: calc((100% - (6px * 3)) / 4);
  border: 1px solid #c3c3c3;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const IconSvg = styled.svg`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 50px;
  height: 50px;
  fill: #283c86;
`;

export const TitleBenefit = styled.h2`
  margin-top: 24px;
  color: #283c86;
  font-family: "ManropeSemiBolt";
  font-size: 17px;
  text-align: center;
`;

export const Descr = styled.p`
  margin-top: 14px;
  font-size: 14px;
  line-height: calc(24 / 14);
  letter-spacing: 0.02em;
  text-align: center;
`;
