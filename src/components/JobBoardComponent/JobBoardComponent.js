import React from 'react';
import {StyledBox,StyledImageContainer,StyledImage,StyledText,StyledH3,StyledH2,StyledParagraph,StyledTools,StyledSpan,StyledNewSpan, StyledFeaturedSpan} from './style'

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
    const tags = [role, level];

    if(tools) {
        tags.push(...tools);
    }
    if(languages) {
        tags.push(...languages);
    }

    return (
        
        <StyledBox>
            <StyledImageContainer>
             <StyledImage src={logo} alt={company}></StyledImage>
            </StyledImageContainer>
            <StyledText>
                <StyledH3>
                    {company}
                    {isNew && (<StyledNewSpan>New</StyledNewSpan>)}
                    {featured && (<StyledFeaturedSpan>Featured</StyledFeaturedSpan>)}
                </StyledH3>

                <StyledH2>{position}</StyledH2>
                <StyledParagraph>{postedAt} · {contract} · {location}</StyledParagraph>
            </StyledText>
        <StyledTools>
            {tags ? tags.map((tag) => <StyledSpan>{tag}</StyledSpan>) : ""}
        </StyledTools>
        </StyledBox>
        
);
}

export default JobBoardComponent;