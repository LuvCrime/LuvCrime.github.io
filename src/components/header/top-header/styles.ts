import styled from 'styled-components'

interface Theme {
    title?: string;
    bg?: string;
}

export const Span = styled.span`
    padding-right: 5px;
`

export const TopHeaderBlock = styled.div<{ theme?: Theme }>`
    height: 48px;
    background-color:  ${props => props.theme?.bg};
    display: flex;
    align-items: center;
    justify-content: end;
`

export const ContactInfo = styled.div<{ $width?: string, theme?: Theme }>`
    display: flex;
    padding-right: 25px;
    width: ${props => props.$width || "auto"};
    color: ${props => props.theme?.title};
`

export const Theme = styled.div<{ $width?: string, theme?: Theme }>`
caret-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 25px;
    position: relative;
    height: 100%;
    color: ${props => props.theme?.title};
`

export const ToggleSwitch = styled.div`
    position: relative;
    width: 50px;
    height: 25px;
`;

export const Label = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25px;
    background-color: #28292c;
    border-radius: 50px;
    cursor: pointer;

`;

export const Slider = styled.span`
    position: absolute;
    width: 100%;
    height: 25px;
    background-color: #28292c;
    border-radius: 50px;
    cursor: pointer;


    &::before {
        content: "";
        position: absolute;
        top: 3.25px;
        left: 4px;
        width: 18.75px;
        height: 18.75px;
        border-radius: 50%;
        box-shadow: inset 7px 0px 0px 0px #d8dbe0;
        background-color: #28292c;
        transition: 0.3s;
    }
`;

export const Input = styled.input`
    position: absolute;
    width: 100%;
    height: 25px;
    background-color: #28292c;
    border-radius: 50px;
    cursor: pointer;
    opacity: 0;
    caret-color: transparent;
    
    &:checked ~ ${Slider} {
        background-color: #d8dbe0;
    }

    &:checked ~ ${Slider}::before {
        transform: translateX(23.75px);
        background-color: #28292c;
        box-shadow: none;
    }
`;