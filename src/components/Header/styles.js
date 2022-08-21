import styled from 'styled-components'

export const StyledHeader = styled.header`
    max-width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 100px;
    padding: 0 20px;
    overflow: hidden;

    @media (max-width: ${({ theme }) => theme.media.large}) {
        margin-bottom: 80px;
    }

    @media (max-width: ${({ theme }) => theme.media.small}) {
        margin-bottom: 40px;
        padding: 0 10px;
    }
`

export const StyledCurrencyItem = styled.div`
    flex-grow: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0 20px;

    &:not(:last-child):after {
        content: '';
        position: absolute;
        top: 10%;
        right: 0;
        bottom: 10%;
        border-right: 2px solid ${({ theme }) => theme.colors.grey};
    }

    @media (max-width: ${({ theme }) => theme.media.large}) {
        padding: 0 10px;
    }

    @media (max-width: ${({ theme }) => theme.media.small}) {
        gap: 5px;
        padding: 0 5px;
    }
`

export const StyledCurrencyItems = styled.div`
    display: flex;
`

export const StyledTitle = styled.h4`
    font-size: ${({ theme }) => theme.fontSizes.md};

    @media (max-width: ${({ theme }) => theme.media.medium}) {
        font-size: ${({ theme }) => theme.fontSizes.sm};
    }

    @media (max-width: ${({ theme }) => theme.media.small}) {
        font-size: ${({ theme }) => theme.fontSizes.xs};
    }
`

export const StyledCurrentAmount = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: ${({ theme }) => theme.lineHeights.sm};

    @media (max-width: ${({ theme }) => theme.media.small}) {
        font-size: ${({ theme }) => theme.fontSizes.xs};
    }
`

export const StyledChangeAmount = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${(props) =>
        !props.isNotZero
            ? 'inherit'
            : props.isPositivieNumber
            ? ({ theme }) => theme.colors.green
            : ({ theme }) => theme.colors.red};

    @media (max-width: ${({ theme }) => theme.media.medium}) {
        display: none;
    }
`

export const StyledArrowImage = styled.img`
    width: 15px;
`

export const StyledChangeAmountText = styled.p`
    font-style: oblique;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: ${({ theme }) => theme.lineHeights.xs};
`
