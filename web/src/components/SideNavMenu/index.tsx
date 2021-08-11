import React from 'react';
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components';
import { COLORS } from '../common';

export const Nav = styled.nav`
color: ${COLORS.SILVER};
    display: flex;
    flex-direction: row-reverse;
    grid-area: sidebar;
    margin-top: 84px;
    padding-right: 84px;
`;

export const OrganisedList = styled.ol`
color: ${COLORS.SILVER};
list-style-type: none;
padding: 0;
`;

export const ListItem = styled.li`
color: ${COLORS.SILVER};
list-style-type: none;
padding: 0;
text-decoration: none;
display: block;
margin-bottom: 12px;
`;

export const Link = styled(GatsbyLink)`
font-family: 'Open Sans', sans-serif;
color: ${COLORS.WHITE};
text-decoration: none;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 27px;
`;

export const LinkButton = styled(GatsbyLink)`
font-family: 'Open Sans', sans-serif;
color: ${COLORS.CERISE};
text-decoration: none;
font-style: normal;
font-weight: bold;
font-size: 17px;
line-height: 22px;
letter-spacing: -0.231818px;
border: 1px solid ${COLORS.CERISE};
padding: 12px;
border-radius: 8px;
display: inline-block;
`;



export const SideNavMenu = () => {
    return (
        <Nav>
            <OrganisedList>
                <ListItem><Link to={"/applications"}>Applications</Link></ListItem>
                <ListItem><Link to={"/webdevelopment"}>Web Development</Link></ListItem>
                <ListItem><Link to={"/branding"}>Branding</Link></ListItem>
                <ListItem><LinkButton to={"/booksession"}>Book a FREE session</LinkButton></ListItem>
            </OrganisedList>
        </Nav>
    );
}
