import React from 'react';
import { 
    Container, 
    NavBar, 
    NavBarItem, 
    Main, 
    ButtonRequest,
    Content,
    ContentImage,
    ContentText,
    Box,
    TextContainer,
    Features,
    Feature,
    FeatureDetail,
    FeatureImage,
    FeaturesDescription
 } from './styles';
import Logo from '../../assets/logo.svg';
import HeroImage from '../../assets/mainImage.svg';
import BannerImage from '../../assets/image2.svg';
import Feature1 from '../../assets/feature1.svg';
import Rectangle from '../../assets/Rectangle 39.svg';

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

                <Box>
                    <img src={BannerImage} alt="TEste"/>

                    <TextContainer>
                        <h1>We are a high-level data storage bank</h1>
                        <p>
                            The place to store various data that you can access at any time through 
                            the internet and where you can carry it. This very flexible storage area has 
                            a high level of security. To enter into your own data you must enter the 
                            password that you created when you registered in this Data Warehouse.
                        </p>
                    </TextContainer>
                </Box>

                <Features>
                    <FeaturesDescription>
                        <h1>Features</h1>
                        <p>
                            Some of the features and advantages that we provide for those of you who 
                            store data in this Data Warehouse.
                        </p>
                    </FeaturesDescription>
                    
                    <div>
                    <Feature>
                        <FeatureImage>
                            <img src={Feature1} alt="teste"/>
                        </FeatureImage>

                        <FeatureDetail>
                            <img src={Rectangle} alt="teste"/>
                            <h2>Search Data</h2>
                            <p>
                                Don’t worry if your data is very large, 
                                the Data Warehoue provides a search engine, 
                                which is useful for making it easier to find 
                                data effectively saving time.
                            </p>
                            <a href="/">Learn More</a>
                        </FeatureDetail>
                    </Feature>

                    <Feature>
                        <FeatureImage>
                            <img src={Feature1} alt=""/>
                        </FeatureImage>

                        <FeatureDetail>
                            <img src={Rectangle} alt=""/>
                            <h2>Search Data</h2>
                            <p>
                                Don’t worry if your data is very large, 
                                the Data Warehoue provides a search engine, 
                                which is useful for making it easier to find 
                                data effectively saving time.
                            </p>
                            <a href="/">Learn More</a>
                        </FeatureDetail>
                    </Feature>

                    <Feature>
                        <FeatureImage>
                            <img src={Feature1} alt=""/>
                        </FeatureImage>

                        <FeatureDetail>
                            <img src={Rectangle} alt=""/>
                            <h2>Search Data</h2>
                            <p>
                                Don’t worry if your data is very large, 
                                the Data Warehoue provides a search engine, 
                                which is useful for making it easier to find 
                                data effectively saving time.
                            </p>
                            <a href="/">Learn More</a>
                        </FeatureDetail>
                    </Feature>

                    <Feature>
                        <FeatureImage>
                            <img src={Feature1} alt=""/>
                        </FeatureImage>

                        <FeatureDetail>
                            <img src={Rectangle} alt=""/>
                            <h2>Search Data</h2>
                            <p>
                                Don’t worry if your data is very large, 
                                the Data Warehoue provides a search engine, 
                                which is useful for making it easier to find 
                                data effectively saving time.
                            </p>
                            <a href="/">Learn More</a>
                        </FeatureDetail>
                    </Feature>

                    <Feature>
                        <FeatureImage>
                            <img src={Feature1} alt=""/>
                        </FeatureImage>

                        <FeatureDetail>
                            <img src={Rectangle} alt=""/>
                            <h2>Search Data</h2>
                            <p>
                                Don’t worry if your data is very large, 
                                the Data Warehoue provides a search engine, 
                                which is useful for making it easier to find 
                                data effectively saving time.
                            </p>
                            <a href="/">Learn More</a>
                        </FeatureDetail>
                    </Feature>

                    <Feature>
                        <FeatureImage>
                            <img src={Feature1} alt=""/>
                        </FeatureImage>

                        <FeatureDetail>
                            <img src={Rectangle} alt=""/>
                            <h2>Search Data</h2>
                            <p>
                                Don’t worry if your data is very large, 
                                the Data Warehoue provides a search engine, 
                                which is useful for making it easier to find 
                                data effectively saving time.
                            </p>
                            <a href="/">Learn More</a>
                        </FeatureDetail>
                    </Feature>
                    
                    </div>
                   
                </Features>
                
            </Main>
        </Container>
    );
};

export default Home;