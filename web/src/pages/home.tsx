import * as React from "react";
import { Link } from 'gatsby'
import { COLORS, Paragraph, MainTitle, MainTitleCerise } from '../components/common/';
import styled from 'styled-components';
import { SideNavMenu, Footer, NavBar } from '../components';

import "normalize.css"

const HomeLayout = styled.div`
background-color: ${COLORS.BLACK};
height: 100vh;
`;

const SplitLayout = styled.div`
height: 100vh;
box-sizing: border-box;
display:  grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 60px auto 60px;
grid-template-areas: 
"header header header"
"main-area . sidebar"
"footer footer footer";
`;

const MainArea = styled.div`
grid-area: main-area;
margin-top: 84px;
padding-left: 84px;
`;

const Home = () => {
    return (
        <HomeLayout>
            <SplitLayout>
                <NavBar />
                <MainArea>
                    <MainTitle>Kiln<MainTitleCerise>.one</MainTitleCerise></MainTitle>
                    <Paragraph>We are a multidisciplinary group of designers and programmers specialized in modern website design and brand development for your company, service or product</Paragraph>
                </MainArea>
                <SideNavMenu />
                <Footer />
            </SplitLayout>
        </HomeLayout>
    );
}

export default Home;



