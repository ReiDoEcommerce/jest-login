import styled from "styled-components";

export const Input = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;

  .label-animation {
    color: rgb(178 173 192);
    text-align: left;
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 20px;
    background-color: rgb(234 232 238);
    width: 100%;
    transition: 0.3s;
  }

  .input-content {
    width: 100%;
    position: relative;

    input:focus + .label-animation,
    .label-animation:focus {
      background: transparent;
      top: 0;
      width: auto;

      span {
        display: block;
        transform: scale(0.9);
        margin-left: -5px;
      }
    }
  }

  .input-content.edit {
    .label-animation {
      top: 8px;
      transform: unset;
    }

    input:focus + .label-animation {
      background: transparent;
      top: 8px;
      width: unset;

      span {
        display: unset;
        transform: unset;
        margin-left: unset;
      }
    }

    .label-animation {
      opacity: 0.3;
      color: #000000;
      font-size: 12px;
      position: absolute;
    }

    input {
      height: 58px;
      padding-top: 23px;
    }
  }

  .label-animation.active {
    background-color: transparent;
    top: -2px;
    width: auto;

    span {
      display: block;
      transform: scale(0.9);
      margin-left: -5px;
    }
  }

  .input-content + *,
  .input-content + div + * {
    display: block;
  }

  input,
  textarea,
  select {
    width: 100%;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0 20px;
    color: rgba(255, 255, 255, 1);
    border: 0;
  }

  textarea {
    display: block;
  }

  select {
    background-color: #eae8ee;
    color: rgb(51, 33, 84, 1);
    background-image: url("/images/seta-dark.svg");
    background-repeat: no-repeat;
    background-position: 96% center;
    background-size: 16px 9px;
    outline: none;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  select::-ms-expand {
    display: none;
  }

  .selectValidator {
    display: none;
  }

  .selectValidator[value=""] + select {
    color: #b2adc9;
  }

  input,
  select {
    height: 60px;
  }

  input:read-only {
    opacity: 0.7;
    cursor: not-allowed;
  }

  textarea {
    height: 226px;
    padding-top: 18px;
  }

  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: rgba(255, 255, 255, 0.3);
  }

  input::-moz-placeholder,
  textarea::-moz-placeholder {
    /* Firefox 19+ */
    color: rgba(255, 255, 255, 0.3);
  }

  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    /* IE 10+ */
    color: rgba(255, 255, 255, 0.3);
  }

  input:-moz-placeholder,
  textarea:-moz-placeholder {
    /* Firefox 18- */
    color: rgba(255, 255, 255, 0.3);
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  .eye {
    background-color: unset;
    border: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    display: flex;

    svg {
      width: 20px;
      height: auto;
      color: var(--theme-color);
    }
  }

  @media only screen and (max-width: 1600px) {
    margin-bottom: 18px;

    .label-animation {
      padding: 0 18px;
    }

    input,
    textarea,
    select {
      padding: 0 18px;
    }

    input,
    select {
      height: 57px;
    }

    textarea {
      height: 215px;
      padding-top: 17px;
    }
  }

  @media only screen and (max-width: 1400px) {
    margin-bottom: 17px;

    .label-animation {
      padding: 0 16px;
    }

    input,
    textarea,
    select {
      padding: 0 16px;
    }

    input,
    select {
      height: 54px;
    }

    textarea {
      height: 200px;
      padding-top: 16px;
    }
  }

  @media only screen and (max-width: 1200px) {
    margin-bottom: 16px;

    .label-animation {
      padding: 0 15px;
    }

    input,
    textarea,
    select {
      padding: 0 15px;
    }

    input,
    select {
      height: 52px;
    }

    textarea {
      height: 180px;
      padding-top: 15px;
    }
  }

  @media only screen and (max-width: 1024px) {
    margin-bottom: 15px;

    .label-animation {
      padding: 0 14px;
    }

    input,
    textarea,
    select {
      padding: 0 14px;
    }

    input,
    select {
      height: 48px;
    }

    textarea {
      height: 160px;
      padding-top: 14px;
    }

    .input-content input:focus + label {
      top: 2px;
    }

    label.active {
      top: 2px;
    }

    .eye {
      right: 4px;

      svg {
        width: 18px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 13px;

    .label-animation {
      padding: 0 12px;
    }

    input,
    textarea,
    select {
      padding: 0 12px;
    }

    input,
    select {
      height: 44px;
    }

    textarea {
      height: 100px;
      padding-top: 12px;
    }
  }

  @media only screen and (max-width: 600px) {
    margin-bottom: 12px;

    .label-animation {
      padding: 0 11px;
    }

    input,
    textarea,
    select {
      padding: 0 11px;
      border-radius: 5px;
    }

    input,
    select {
      height: 40px;
    }

    textarea {
      height: 90px;
      padding-top: 10px;
    }
  }
`;

export const InputEdit = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background-color: rgba(51, 33, 84, 0.1);
  position: relative;
  padding: 22px 50px 15px 20px;

  input {
    background-color: transparent;
    border: 0;
    color: var(--theme-color);
    width: 100%;
  }

  .editIcon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 23px;
    margin: 0;
    display: flex;

    svg {
      cursor: pointer;
      opacity: 0.3;
      transition: 0.3s;
    }
    svg:hover {
      opacity: 1;
    }
  }
`;

export const InputRadio = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 15px;

  .error-message {
    margin-top: -5px;
  }

  .input-content {
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    width: 100%;
  }

  label {
    cursor: pointer;
  }

  input[type="radio"] {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border: 1px solid #000;
    border-radius: 50%;
    outline: none;
    background-color: #fff;
    transition: 0.3s;
  }

  input[type="radio"]:before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    margin: 3px auto;
    border-radius: 50%;
  }
  input[type="radio"]:checked:hover {
    background-color: transparent;
  }
  input[type="radio"]:checked:before {
    background: var(--theme-color-light);
  }

  label {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  @media only screen and (max-width: 768px) {
    label {
      span {
        width: calc(100% - 22px);
      }
    }

    input[type="radio"]:before {
      width: 9px;
      height: 9px;
      margin: 2.3px auto 0;
    }
  }

  @media only screen and (max-width: 500px) {
    input[type="radio"] {
      width: 13px;
      height: 13px;
    }
    
    input[type="radio"]:before {
      width: 7px;
      height: 7px;
    } 

    label {
      gap: 4px;
      span {
        width: calc(100% - 15px);
        font-size: 11px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .input-content {
      gap: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding-left: 10px;
    }
  }
`;
