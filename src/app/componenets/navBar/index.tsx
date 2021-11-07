import React from 'react';
import styled from"styled-components";
import tw from "twin.macro"
 const NavbarContainer = styled.div`
 min-height : 68px;
 ${tw `
 w-full
 max-w-2x1
 flex
 flex-row
 items-center
 lg:gb-red-12
 lg:pr-12
 justify-between
 `}
 `;
 export function NavBar (){

    return <NavbarContainer>

        
    </NavbarContainer>
 }