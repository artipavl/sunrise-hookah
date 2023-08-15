import styled from 'styled-components';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    gap: 40px;
    align-items: center;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 5vw;
  color: #fff;
  text-transform: uppercase;

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`;

export const SubTitle = styled.h2`
  text-align: center;
  font-size: 3vw;
  color: #fff;
  /* text-transform: uppercase; */
  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`;

export const TelLink = styled(Link)`
  margin-top: 10px;
  text-align: center;
  font-size: 2vw;
  color: #fff;
  text-transform: uppercase;
  @media screen and (min-width: 1440px) {
    text-align: start;
    margin-top: 30px;
  }
`;

export const RegistrationBox = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;

  @media screen and (min-width: 1140px) {
    padding-top: 8px;
    padding-bottom: 100px;
  }
`;

export const Text = styled.p`
  display: block;
  margin-top: 12px;

  font-size: 14px;
  line-height: 17px;
  text-align: center;
`;

export const TextOverflow = styled.span`
  display: none;

  @media screen and (min-width: 1110px) {
    display: inline;
  }
`;

export const RegForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;

  @media screen and (min-width: 570px) {
    width: 543px;
    margin-inline: auto;
  }
`;

export const FormHorizontalBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;

  @media screen and (min-width: 570px) {
    gap: 30px;
    flex-direction: row;
  }
`;

type InputPrpos = {
  errors: string;
};

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const Input = styled(Field)<InputPrpos>`
  position: relative;
  display: inline-block;
  width: 100%;
  background: #ffffff;
  border: 1px solid #ffffff;
  border-color: ${props => props.errors && 'red'};
  /* border-radius: 90px; */

  padding: 10px 20px;

  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    color: #484848;
  }
`;

export const Textarea = styled.textarea<InputPrpos>`
  position: relative;
  display: inline-block;
  width: 100%;
  resize: vertical;
  background: #ffffff;
  border: 1px solid #ffffff;
  border-color: ${props => props.errors && 'red'};
  /* border-radius: 90px; */

  padding: 10px 20px;

  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    color: #484848;
  }
`;

export const Errors = styled.span`
  position: absolute;
  transform: translateY(+100%);
  bottom: 0;
  left: 20px;

  font-size: 14px;
  line-height: 17px;
  color: red;
`;

export const CheckBox = styled(Field)`
  position: absolute;
  width: 0;
  height: 0;
`;

type CheckDivPrpps = {
  bg: String;
  check: boolean;
};

export const CheckDiv = styled.div<CheckDivPrpps>`
  position: relative;
  padding-left: 30px;
  margin-left: 2px;
  color: #484848;

  ::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    margin-right: 8px;
    width: 20px;
    height: 20px;
    /* border: 1px solid #84c551; */
    border: ${props =>
      props.check ? `1px solid #84c551` : `1px solid rgba(0, 0, 0, 0.2)`};

    border-radius: 3px;
  }
  ::after {
    content: '';
    position: absolute;
    top: -7px;
    left: -1px;
    display: block;
    width: 29px;
    height: 29px;

    background-image: ${props => props.check && `url(${props.bg})`};

    background-repeat: no-repeat;
    background-position: left top;
    background-size: cover;
  }
`;

export const Accent = styled.span`
  color: #84c551;
`;

export const Button = styled.button`
  background-color: #e74e13;
  /* border-radius: 90px; */
  min-height: 47px;

  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #ffffff;

  :hover,
  :focus {
    color: #e74e13;
    background-color: #ffffff;
  }
`;
