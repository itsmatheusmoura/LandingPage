import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(105,199,163, 0.2), #FFFFFF);
    overflow-y: scroll;
    overflow-x: hidden;
`;

export const Main = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1100px;
    margin: 0 auto;
`;

export const NavBar = styled.nav`
    padding: 15px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Lato;
    color: #4B5D68;

    div{
        display: flex;
        align-items: center;
        img{
            margin-right: 80px;
        }
    }

`;

export const NavBarItem = styled.a`
    text-decoration: none;
    margin-right: 25px;
    font-size: 16px;
    padding: 15px;

    &:hover{
        background-color: rgba(105,199,163, 0.2);
        border-radius: 35px;
        transition: 800ms;
    }

`;

export const ButtonRequest = styled.button`
    margin-right: 35px;
    max-width: 210px;
    width: 100%;
    height: 40px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    background-color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    font-family: Lato;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    box-shadow: 2px 3px #eee;

    svg{
        fill: #9C69E2;
    }

    &:hover{
        background-color: rgba(105,199,163, 0.2);
        transition: 800ms;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    margin-top: 100px;
    font-family: Helvetica, sans-serif;
`;

export const ContentText = styled.div`
    grid-column: 1/3;
    grid-row: 1/3;

    h1{
        font-size: 70px;
        max-width: 650px;
        margin-top: 25px;
        font-weight: bold;
        color: #212353;
        letter-spacing: -5px;
    }

    p{
        max-width: 380px;
        margin-top: 45px;
        font-size: 14px;
        font-family: Lato;
        letter-spacing: 0.2px;
        font-weight: lighter;
        color: #4B5D68;
    }

    button{
        background-color: #9C69E2;
        border: none;
        padding: 10px 25px;
        margin-top: 35px;
        border-radius: 25px;
        color: #FFFFFF;
        font-size: 11px;
        letter-spacing: 1px;
        cursor: pointer;

        &:hover{
            background-color: #F063B8;
            transition: 800ms;
        }
    }
`;

export const ContentImage = styled.div`
    grid-column: 2/4;
    grid-row: 1/3;

    img{
        max-width: 685px;
        margin-top: 55px;
    }
`;

export const Box = styled.div`
    background-color: rgba(240, 99, 184, 0.2);
    border-radius: 25px;
    margin-bottom: 150px;
    margin-top: -100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 900px;
    margin: -100px auto 150px;
    height: 400px;

    img{
        width: 30%;
        margin-right: 15px;
    }

    p{
        font-family: Lato, sans-serif;
        margin-top: 10px;
        font-size: 15px;
        font-weight: 300;
    }
`;

export const TextContainer = styled.div`
    width: 50%;

    h1{
        font-family: Helvetica, sans-serif;
        color: #212353;
    }

    p{
        font-family: Lato, sans-serif;
    }
`;  

export const Features = styled.div``;