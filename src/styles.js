import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: #ebf8ff;
    margin: 0;
    padding: 0;
  }
`

export const StyledContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: 768px) {
      width: 100%;
    }
`

export const StyledHeader = styled.header`
    width: 100%;
    background-color: #38b2ac;
    margin-bottom: 2.5rem;

`
export const StyledHeaderImage = styled.img`
    width: 100%;
`