import styled from "styled-components";
import Select from "react-select";

export const Form = styled.form`
  display: flex;
  gap: 18px;
  margin-bottom: 50px;

  align-items: end;
  justify-content: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: #8a8a89;

  font-family: "ManropeMedium";
  font-size: 14px;
  line-height: 18px;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: end;
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const InputSpan = styled.div`
  position: absolute;
  top: 14px;
  left: 24px;
  color: #121417;
  font-family: "ManropeMedium";
  font-size: 18px;
  line-height: 20px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 160px;
  padding-left: 70px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-right: 14px;

  font-size: 18px;
  outline: 0;
  border: 0px;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: #121417;
    opacity: 1;
  }
`;

export const InputRight = styled(Input)`
  padding-left: 50px;
  border-radius: 0px 14px 14px 0px;
`;

export const Button = styled.button`
  padding: 14px 44px;

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

export const StyledSelect = styled(Select)`
  .react-select__control {
    width: 224px;
    padding: 14px 18px;

    color: #121417;
    font-size: 16px;
    font-family: "ManropeMedium";
    line-height: 20px;

    background-color: #f7f7fb;
    border: none;
    border-radius: 14px;
    box-shadow: none;

    &:focus,
    &:active,
    &:hover {
      box-shadow: none;
    }
  }

  .react-select__placeholder {
    color: #121417;
    font-size: 18px;
    font-family: "ManropeMedium";
    line-height: 20px;
  }
  .react-select__input-container {
    margin: 0;
    padding: 0;
    color: white;
  }

  .react-select__dropdown-indicator {
    color: #121417;
    padding: 0;
    position: absolute;

    right: 18px;
    cursor: pointer;
  }

  .react-select__value-container {
    padding: 0;
  }

  .react-select__menu {
    margin-top: 4px;
    padding: 14px 18px;
    width: 224px;

    background-color: white;
    border-radius: 14px;
  }

  .react-select__menu-list {
    &::-webkit-scrollbar {
      width: 8px;
      height: 66px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(18, 20, 23, 0.05);
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:horizontal {
      background-color: rgba(18, 20, 23, 0.05);
      border-radius: 10px;
    }
  }

  .react-select__option {
    font-family: "ManropeMedium";
    font-size: 16px;
    line-height: 20px;
    color: rgba(18, 20, 23, 0.2);
    background-color: transparent;
    text-overflow: ellipsis;
    transition: color 250ms ease, background-color 250ms ease;

    &:focus,
    &:active,
    &:hover {
      color: #121417;
      cursor: pointer;
    }
  }
`;
