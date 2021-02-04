import React from 'react';
import { 
    Container, 
    NavBar, 
    NavBarItem, 
    Main, 
    ButtonRequest,
    Content,
    ContentImage,
    ContentText
 } from './styles';
import Logo from '../../assets/logo.svg';
import HeroImage from '../../assets/mainImage.svg';

import { AiOutlineArrowRight } from 'react-icons/ai';

function Home(){
    return(
        <Container>
            <Main>
                <NavBar>
                    <div>
                        <img src={Logo} alt='logo'/>
                        <NavBarItem href='/'>About</NavBarItem>
                        <NavBarItem href='/'>Help</NavBarItem>
                        <NavBarItem href='/'>Features</NavBarItem>
                        <NavBarItem href='/'>Singup</NavBarItem>
                    </div>

                    <ButtonRequest>Request Demo <AiOutlineArrowRight size={15}/> </ButtonRequest>
                </NavBar>

                <Content>
                    <ContentText>
                        <h1>
                            Save your data storage here.
                        </h1>
                        <p>
                            Data Warehouse is a data storage area that has been tested for security, 
                            so you can store your data here safely but not be afraid of being stolen 
                            by others.
                        </p>

                        <button>Learn More</button>

                    </ContentText>

                    <ContentImage>
                        <img src={HeroImage} alt="Hero Image People working"/>
                    </ContentImage>

                </Content>
            </Main>

            
        </Container>
    );
};

export default Home;