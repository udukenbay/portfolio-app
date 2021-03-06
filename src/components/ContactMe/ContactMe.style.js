import styled from 'styled-components';
import laptop from '../../image/laptop.png';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: #f7f7f7;
`;

export const HalfscreenContent = styled.div`
    background-color: #F7F7F7;
    flex: 1;
`;

export const InTouchBox = styled.div`
    background: #fff;
    box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.2);
    margin: 20px;
    padding: 10px;
    z-index: 2;

    h1 {
        margin: 20px;
        font-family: serif;
        color: #5e6868;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px;

    label {
        font-family: serif;
        color: #5e6868;
    }

    input {
        font-family: serif;
        color: #5e6868;
    }
`;

export const InputContainerItem = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    margin-right: 10px;
    
    input {
        margin-top: 10px;
        min-width: 300px;
        min-height: 30px;
    }
`;

export const Comment = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;

    textarea {
        min-height: 100px;
    }
`;

export const Footer = styled.div`
    button {
        color: #00D9DB;
        background: #fff;
        box-shadow: 0px 2px 2px rgb(0 0 0 / 10%);
        border-radius: 4px;
        border: 1px solid #00D9DB;
        min-width: 100px;
        padding: 14px;
        margin: 1em 4em;
        font-weight: 300;
        font-size: 18px;
        font-family: Roboto;
    }
`;

export const HalfscreenMap = styled.div`
    background-color: #f7f7f7;
    flex: 1;
    height: 500px;
    visibility: visible;
    animation-name: fadeIn;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Map = styled.div`
    background-image: url('${laptop}');
    width: 650px;
    height: 400px;
    margin-top: 50px;
`;

export const Social = styled.div`
    margin-top: 20px;
    img {
        margin-right: 20px;
    }
`;

export const TextBackground = styled.div`
    // position: absolute;
    bottom: 0;
    left: 0;
    font-family: 'Amiri';
    font-style: normal;
    font-weight: 400;
    font-size: 200px;
    color: rgba(0, 0, 0, 0.05);
    z-index: 1;
`;
