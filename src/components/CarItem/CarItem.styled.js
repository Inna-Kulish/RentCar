import styled from "styled-components";
import Heard from "../../images/heard.svg?react";

export const Item = styled.li`
  position: relative;
  flex-basis: 274px;
  height: 426px;
`;
export const ImgCar = styled.img`
  margin-bottom: 14px;
  border-radius: 14px;
`;

export const HeardBtn = styled.button`
  position: absolute;
  padding: 0;
  top: 14px;
  right: 14px;

  border: 0px;
  background-color: transparent;
`;

export const HeardIcon = styled(Heard)`
  display: block;
  stroke: rgba(255, 255, 255, 0.8);
  width: 18px;
  height: 18px;

  &:hover,
  :focus {
    fill: rgba(52, 112, 255, 1);
    stroke: rgba(52, 112, 255, 1);
  }
`;

export const ActiveHeardIcon = styled(Heard)`
  display: block;
  fill: rgba(52, 112, 255, 1);
  stroke: rgba(52, 112, 255, 1);

  width: 18px;
  height: 18px;

  &:hover,
  :focus {
    stroke: rgba(255, 255, 255, 0.8);
    fill: transparent;
  }
`;

export const Wrap = styled.div`
  height: 24px;

  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  overflow: hidden;
`;

export const Title = styled.h2`
  color: #121417;
  font-family: "ManropeMedium";
  font-size: 16px;
  line-height: 24px;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const Price = styled.p`
  font-family: "ManropeMedium";
  font-size: 16px;
  line-height: 24px;
`;

export const Description = styled.p`
  margin-bottom: 28px;
  height: 40px;

  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 18px;
  text-transform: capitalize;
  overflow: hidden;
`;

export const Button = styled.button`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;

  color: white;
  font-family: "ManropeSemiBolt";
  font-size: 14px;
  line-height: 20px;

  border: 0px;
  border-radius: 12px;
  background: #3470ff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #0b44cd;
  }
`;
