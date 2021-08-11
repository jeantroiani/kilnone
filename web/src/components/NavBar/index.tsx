import React from 'react';
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components';
import { COLORS } from '../common';

export const Nav = styled.nav`
color: ${COLORS.SILVER};
    display: flex;
    flex-direction: row-reverse;
    grid-area: header;
    border-bottom: 1px solid ${COLORS.SILVER};
    padding: 0 84px;
`;

export const OrganisedList = styled.ol`
list-style-type: none;
padding: 0;
`;

export const ListItem = styled.li`
list-style-type: none;
text-decoration: none;
display: inline-block;
margin-left: 32px;
`;

export const Link = styled(GatsbyLink)`
font-family: 'Open Sans', sans-serif;
color: ${COLORS.WHITE};
text-decoration: none;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 25px;
`;

export const NavBar = () => {
    return (
        <Nav>
            <OrganisedList>
                <ListItem><Link to={"/"}>What we do</Link></ListItem>
                <ListItem><Link to={"/"}>About us</Link></ListItem>
                <ListItem><Link to={"/"}>Contact us</Link></ListItem>
            </OrganisedList>
        </Nav>
    );
}
