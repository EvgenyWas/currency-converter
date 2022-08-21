import styled from 'styled-components'

export const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    height: 100%;
`

export const StyledConverter = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    margin: auto;
    padding: 32px;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.generalWhite};

    @media (max-width: ${({ theme }) => theme.media.extraLarge}) {
        width: 30%;
    }

    @media (max-width: ${({ theme }) => theme.media.large}) {
        width: 40%;
    }

    @media (max-width: ${({ theme }) => theme.media.medium}) {
        width: 50%;
    }

    @media (max-width: ${({ theme }) => theme.media.small}) {
        width: 70%;
    }
`

export const StyledTitle = styled.h1`
    margin-bottom: 30px;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: ${({ theme }) => theme.lineHeights.xl};
    text-align: center;
    background-image: linear-gradient(
        90deg,
        rgba(131, 58, 180, 1) 0%,
        rgba(253, 29, 29, 1) 50%,
        rgba(252, 176, 69, 1) 100%
    );
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;

    @media (max-width: ${({ theme }) => theme.media.medium}) {
        margin-bottom: 20px;
        font-size: ${({ theme }) => theme.fontSizes.lg};
    }
`
