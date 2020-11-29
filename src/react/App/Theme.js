import { browser } from "../../shared";
import { createGlobalStyle } from "styled-components";

const { background_color, theme_color, fontFamily } = browser.props;

export const ThemeConfig = {
  font: [fontFamily],
  color: [background_color, theme_color],
};

export const ThemeGlobalStyle = createGlobalStyle`
  body {
    display: flex;
    min-height: 100vh;
    margin: auto;
    background-color: ${({ theme }) => theme.color[0]};
    color: ${({ theme }) => theme.color[1]};
    font-family: ${({ theme }) => theme.font[0]};
  }

  #react-application {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
  }
`;
