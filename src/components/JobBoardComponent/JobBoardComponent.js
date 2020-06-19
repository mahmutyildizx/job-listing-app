import React from 'react';
import {StyledBox,StyledImageContainer,StyledImage,StyledText,StyledH3,StyledH2,StyledParagraph,StyledTools,StyledSpan} from './style'

const JobBoardComponent = ({
    job: {
        company,
        logo,
        isNew,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools
    }
}) => {
    const langAndTools = [];

    if(tools) {
        langAndTools.push(...tools);
    }
    if(languages) {
        langAndTools.push(...languages);
    }

    return (
    <>
        <StyledBox>
            <StyledImageContainer>
             <StyledImage src={logo} alt={company}></StyledImage>
            </StyledImageContainer>
            <StyledText>
                <StyledH3>{company}</StyledH3>
                <StyledH2>{position}</StyledH2>
                <StyledParagraph>{postedAt} · {contract} · {location}</StyledParagraph>
            </StyledText>
        <StyledTools>
            {langAndTools ? langAndTools.map((langAndTool) => <StyledSpan>{langAndTool}</StyledSpan>) : ""}
        </StyledTools>
        </StyledBox>
    </>
);
}

export default JobBoardComponent;