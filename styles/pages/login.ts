import styled from "styled-components";

interface LoginStyleProps {
  isMaxWidth?: boolean;
}

export const Login = styled.section<LoginStyleProps>`
  padding: 120px 0 150px;

  .tab-account {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }

  .tab-content {
    display: none;
  }

  .tab-content.active {
    display: block;
  }

  .button-tab {
    display: flex;
    align-items: center;
    gap: 15px;
    max-width: 100%;
    width: 100%;
    background-image: url(/images/detalhe-create-account-mobile.jpg);
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 7px;
    height: 80px;
    padding: 0 25px;
    border: unset;
    background-position: right 0;
    background-color: #fff;

    .ball {
      width: 16px;
      height: 16px;
      border: 1px solid #000;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .text {
      span {
        display: block;
        text-align: left;
        color: #000;
      }
    }
  }

  .button-tab.active {
    .ball {
      div {
        width: 8px;
        height: 8px;
        background-color: var(--yellow);
        border-radius: 100%;
      }
    }
  }

  form {
    max-width: ${props => props.isMaxWidth && "600px"};
    width: 100%;
    box-shadow: 0 3px 50px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #ffffff;
    margin: 0 auto;
    padding: 30px 30px 40px;
    text-align: center;

    input {
      background-color: rgba(51, 33, 84, 0.1);
      color: rgb(51, 33, 84, 1);
    }

    input::placeholder {
      color: rgb(51, 33, 84, 0.3);
    }

    .forgot-password-link {
      color: rgb(51, 33, 84, 1);
      margin-bottom: 30px;
      display: inline-block;
    }

    .forgot-password-link:hover {
      color: var(--yellow);
    }

    .forgot-password-link + .forgot-password-link {
      margin-left: 20px;
    }

    .back-to-login {
      margin-top: 20px;
      margin-bottom: 0;
    }

    .try-other-email {
      color: rgb(51, 33, 84, 1);
      margin-top: 30px;

      button {
        background-color: transparent;
        border: 0;
        text-decoration: underline !important;
      }

      button:hover {
        color: var(--yellow);
      }
    }
  }

  .create-account {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    gap: 50px;

    form {
      margin: 0;
    }

    .or {
      color: #fff;
    }
  }

  .tab-content {
    width: 100%;
  }

  @media only screen and (max-width: 1600px) {
    padding: 110px 0 130px;

    form {
      max-width: 580px;
      border-radius: 9.5px;
      padding: 28px 28px 37px;

      .forgot-password-link {
        margin-bottom: 27px;
      }

      .forgot-password-link + .forgot-password-link {
        margin-left: 20px;
      }

      .back-to-login {
        margin-top: 20px;
      }

      .try-other-email {
        margin-top: 28px;
      }
    }

    .create-account {
      gap: 18px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 100px 0 110px;

    .or {
      display: none;
    }

    .container {
      max-width: 90%;
    }

    form {
      max-width: 560px;
      border-radius: 9px;
      padding: 26px 26px 34px;

      .forgot-password-link {
        margin-bottom: 24px;
      }

      .forgot-password-link + .forgot-password-link {
        margin-left: 19px;
      }

      .back-to-login {
        margin-top: 19px;
      }

      .try-other-email {
        margin-top: 25px;
      }
    }

    .create-account {
      gap: 25px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 90px 0 100px;

    .container {
      max-width: 95%;
    }

    form {
      max-width: 540px;
      border-radius: 8.5px;
      padding: 24px 24px 31px;

      .forgot-password-link {
        margin-bottom: 22px;
      }

      .forgot-password-link + .forgot-password-link {
        margin-left: 18px;
      }

      .back-to-login {
        margin-top: 18px;
      }

      .try-other-email {
        margin-top: 22px;
      }

      input[type="radio"] {
        height: 14px;
        width: 14px;
      }

      [class*="paragraph-2"] {
        font-size: 13px;
      }
    }

    .create-account {
      gap: 25px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 80px 0;

    .hide-mobile.active {
      display: none !important;
    }

    .container {
      max-width: 700px;
    }

    .tab-content {
      max-width: 100%;
    }

    form {
      max-width: 100%;
      border-radius: 7px;
      padding: 22px 22px 28px;

      .forgot-password-link {
        margin-bottom: 19px;
      }

      .forgot-password-link + .forgot-password-link {
        margin-left: 17px;
      }

      .back-to-login {
        margin-top: 17px;
      }

      .try-other-email {
        margin-top: 19px;
      }

      .input-content {
        gap: 9px;
      }

      button {
        max-width: 500px;
        margin: 0 auto;
      }
    }

    .create-account {
      gap: 12px;
      flex-direction: column;
    }

    .tab-navigation {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-bottom: 40px;
    }
  }

  @media only screen and (max-width: 900px) {
    padding: 70px 0;

    form {
      max-width: 100%;
      border-radius: 6px;
      padding: 20px;

      .forgot-password-link {
        margin-bottom: 16px;
      }

      .forgot-password-link + .forgot-password-link {
        margin-left: 15px;
      }

      .back-to-login {
        margin-top: 15px;
      }

      .try-other-email {
        margin-top: 16px;
      }
    }

    .create-account {
      gap: 11px;
    }

    .button-tab {
      height: 75px;
      gap: 13px;
      padding: 0 20px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 45px 0;

    form {
      max-width: 100%;
      border-radius: 5.5px;
      padding: 18px;

      .forgot-password-link {
        margin-bottom: 14px;
      }

      .forgot-password-link + .forgot-password-link {
        margin-left: 14px;
      }

      .back-to-login {
        margin-top: 14px;
      }

      .try-other-email {
        margin-top: 14px;
      }

      button {
        max-width: 70%;
      }
    }

    .create-account {
      gap: 10px;
    }

    .button-tab {
      height: 70px;
      gap: 10px;
      padding: 0 20px;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 35px 0;

    .button-tab {
      border-radius: 5px;
    }

    form {
      max-width: 100%;
      border-radius: 5px;
      padding: 10px;

      .forgot-password-link {
        margin-bottom: 12px;
      }

      .forgot-password-link + .forgot-password-link {
        margin-left: 12px;
      }

      .back-to-login {
        margin-top: 12px;
      }

      .try-other-email {
        margin-top: 12px;
      }
    }

    .create-account {
      gap: 9px;
    }

    .tab-navigation {
      gap: 10px;
    }
  }
`;
