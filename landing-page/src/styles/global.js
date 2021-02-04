import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        outline: none;
        color: black;
    }

    #root{
        width: 100%;
        height: 100%;
    }
`;

export default globalStyle;