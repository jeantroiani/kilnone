import React from 'react';
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components';
import { COLORS } from '../common';

export const Nav = styled.nav`
    display: flex;
    grid-area: footer;
    padding-left: 84px;
`;

export const OrganisedList = styled.ol`
color: ${COLORS.SILVER};
list-style-type: none;
padding: 0;
`;

export const ListItem = styled.li`
text-decoration: none;
display: inline-block;
margin-right: 32px;
`;

export const Link = styled(GatsbyLink)`
font-family: 'Open Sans', sans-serif;
color: ${COLORS.WHITE};
text-decoration: none;
font-style: normal;
font-size: 14px;
font-weight: normal;
`;

export const Footer = () => {
    return (
        <Nav>
            <OrganisedList>
                <ListItem><Link to={"/"}>Terms &#38; Conditions</Link></ListItem>
                <ListItem><Link to={"/"}>Privacy Policy</Link></ListItem>
                <ListItem><Link to={"/"}>Kill.one</Link></ListItem>
            </OrganisedList>
        </Nav>
    );
}
