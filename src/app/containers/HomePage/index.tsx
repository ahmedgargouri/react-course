 import React from "react"
 import styled from "styled-components";
 import tw from "twin.macro"
import { BookCard } from "../../componenets/bookCard";
import { NavBar } from "../../componenets/navBar";
import { BookingSteps } from "./bookingSteps";
import { TopSection } from "./topSection";
const PageContainer = styled.div`
 ${tw`
 flex
 flex-col
 w-full
 h-full
 items-center
 overflow-x-hidden
 `}
 `;
 export function HomePage(){
    return <PageContainer>
      <NavBar/>
      <TopSection/>
      <BookCard/>
      <BookingSteps/>
    </PageContainer>
 }