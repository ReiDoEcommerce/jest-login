import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

const randomColor = colors[Math.floor(Math.random() * colors.length)];

export const GlobalStyle = createGlobalStyle`
:root {
    --theme-color: #332154;
    --theme-color-light: #5d3f98;
    --theme-color-dark: #3c1980;
    --theme-color-extra-light: #7731ff;
    --yellow: #dc9300;
    --container: 1380px;
}

html {
    scroll-behavior: smooth !important;
}

body {
    background-color: var(--theme-color);
    overflow-x: hidden !important;
}

body::-webkit-scrollbar {
  width: 7px;
}

body::-webkit-scrollbar-track {
  background: #f1f1f1;
}

body::-webkit-scrollbar-thumb {
  background: var(--yellow);
}

body::-webkit-scrollbar-thumb:hover {
  background: var(--theme-color-light);
}

*:focus {
    outline: transparent !important;
}

#banner {
    .bg {
        background-image: var(--banner-home);
    }
}

.error-message {
    font-size: 13px;
    color: #db3232;
    text-align: left;
    margin-top: 5px;
}

.default-text {
    color: #fff;
    margin: 40px 0;
}

.uppercase {
    text-transform: uppercase;
}

a,
button {
    cursor: pointer;
    text-decoration: none !important;
    transition: 0.25s;
}

a:hover,
button:hover {
    transition: 0.25s;
}

a::after,
a::before {
    transition: 0.3s;
}

a:hover::after,
a:hover::before {
    transition: 0.3s;
}

ol,
ul {
    list-style: none !important;
    padding-left: 0 !important;
    margin-bottom: 0 !important;
}

* + section, main {
    z-index: 2;
    position: relative;
}

* + section + section {
    z-index: 2;
    position: relative;
}

section + footer {
    z-index: 1;
}

.container {
    max-width: var(--container);
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
}

.select {
    width: 100%;
    background-color: var(--theme-color-light);
    color: #fff;
    border-radius: 50px;
    height: 54px;
    padding: 0 20px;
    border: 0;
    appearance: none;
    background-image: url('/images/arrow-select.png');
    background-position: 95% center;
    background-repeat: no-repeat;
    background-size: 18px 11px;
    outline: none;
  }

  select.branco {
    border: 1px solid var(--theme-color-light);
    background-color: #ffffff;
    color: var(--theme-color);
    background-image: url('/images/arrow-select-purple.png');
  }

  .show-mobile {
    display: none !important;
  }

  #lateralCart.active {
    .overlay {
        animation: opacity 0.3s linear forwards;
        animation-delay: 0.2s;
    }
  }

  @keyframes opacity {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  }



@media only screen and (max-width:1600px) {
    .container {
        max-width: 1200px;
    }
}

@media only screen and (max-width:1400px) {
    .container {
        max-width: 1100px;
    }
}

@media only screen and (max-width:1200px) {
    .container {
        max-width: 1000px;
    }
}

@media only screen and (max-width:1024px) {
    .container {
        max-width: 800px;
    }

    .select {
        background-size:16px 9px;
    }
}

@media only screen and (max-width: 900px) {
    .container {
        max-width: 700px;
    }

    .error-message {
    font-size: 12px;
    margin-top: 4px;
    padding-left: 10px;
}
}

@media only screen and (max-width:768px) {

    .show-mobile {
      display: flex !important;
    }

    .hide-mobile {
      display: none !important;
    }
    
    .container {
        max-width: 600px;
    }


    .loader-button {
        height: 28px;
        width: 28px;
    }
}
`;
