import styled from 'styled-components';


export const StyledBox = styled.div`
    max-width: 100%;
    height: 150px;
    box-shadow: 1px 1px 10px 4px #F0F0F0;
    background-color: #fff;
    margin: 1.25rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border-left: 5px solid #38b2ac;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 480px) {
        height: 200px;
        margin: 2rem auto;
        justify-content: flex-start;
        max-width: 80%
    }

`

export const StyledImageContainer = styled.div`
    margin-left: 1rem; 
    @media (max-width: 480px) {
        max-width: 50px;
        height: 50px;
        transform: translateY(-110px);
    }

`
export const StyledImage = styled.img`
@media (max-width: 480px) {
    max-width: 50px;
    height: 50px;
}

`

export const StyledText = styled.div`
    margin-left: 1rem;
    @media (max-width: 480px) {
        transform: translateX(-90px);
        margin-left: 0.5rem;
    }

`
export const StyledTools = styled.div`
    margin-left: auto;

`

export const StyledH3 = styled.h3`
    color: #38b2ac;
    font-weight: bold;
    font-size: 1.25rem;
    margin: 0.5rem;
    @media (max-width: 480px) {
        font-size: 1rem;
    }

`
export const StyledH2 = styled.h2`
    font-weight: 700;
    font-size: 1.5rem;
    margin: 0.5rem;
    @media (max-width: 480px) {
        font-size: 1rem;
    }

`
export const StyledParagraph = styled.p`
    color: gray;
    font-weight: 700;
    font-size: 1.25rem;
    margin: 0.75rem;
    @media (max-width: 480px) {
        font-size: 1rem;
    }

`
export const StyledSpan = styled.span`
    color: #38b2ac;
    font-weight: bold;
    padding: 0.75rem;
    display: inline-block;
    margin: 0.5rem;
    background: #ebf8ff;
    border-radius: 0.5rem;
    @media (max-width: 480px) {
        font-size: 1rem;
        padding: 0.5rem;
    }


`

export const StyledNewSpan = styled.span`
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    padding: 0.5rem;
    display: inline-block;
    margin: 0.5rem;
    background: #38b2ac;
    border-radius: 1.25rem;
`
export const StyledFeaturedSpan = styled.span`
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    padding: 0.5rem;
    display: inline-block;
    background: #000;
    border-radius: 1.25rem;
`