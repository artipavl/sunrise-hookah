import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Container = styled.div`
  width: 100%;
  box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.05),
    0px 4px 8px -2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  margin: auto;
  padding: 16px 25px;
  margin-top: 70px;
  background: rgb(249, 250, 251);
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

  padding: 10px 14px;

  border-radius: 8px;
  border: 1px solid #d0d5dd;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

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
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #344054;

  :hover,
  :focus {
    background-color: #e74e13;
  }
`;
