import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';



     const FooterContainer = styled.div`
     background-color: #1d2124;
     ${tw`
     flex
     flex-col
     min-w-full
     pt-10
     md:pt-16
     items-center
     justify-center
     `};
     `;

     const InnerContainer = styled.div`
     ${tw`
     flex
     w-full
     h-full
     max-w-screen-2xl
     flex-wrap
     `};
     `;

     const BottomContainer = styled.div`
     ${tw`
     w-full
     flex
     max-w-screen-2xl
     justify-center
     md:justify-start
     mt-7
     md:mt-1
     `};
     `;


     const CopyRightText  = styled.small`
     font-size: 12px;
     ${tw`
     text-gray-300
     `};
     `;


     const AboutContainer = styled.div`
     ${tw`
     flex
     flex-col
     mr-2
     md:mr-16
     pl-10
     pr-10
     md:pl-3
     md:pr-3
     `};
     `;


     const AboutText = styled.p`
     ${tw`
     text-white
     text-sm
     font-normal
     max-w-xs
     leading-5
     mt-2
     `};
     `;


     const SectionContainer = styled.div`
     ${tw`
     w-full
     md:w-auto
     flex
     flex-col
     mr-2
     md:mr-16
     pl-10
     pr-10
     md:pl-3
     md:pr-3
     mt-7
     md:mt-0
     `};
     `;


     const LinksList = styled.ul`
     ${tw`
     outline-none
     list-none
     flex
     flex-col
     `};
     `;

     const ListItem = styled.li`
     ${tw`
     mb-3
     `};
     `;
     const HeaderTitel = styled.h3`
     ${tw`
     text-2xl
     font-bold
     text-white
     mb-3
     `};
     `;
     const HorizontalContainer = styled.div`
     ${tw`
     flex
     items-center
     `};
     `;

     const RedIcon = styled.span`
     ${tw`
     w-9
     h-9
     rounded-full
     bg-red-500
     flex
     items-center
     justify-center
     text-white
     text-base
     mr-2
     `};
     `;
     const SmallText = styled.h6`
     ${tw`
     text-sm
     text-white
     `};
     `;


export function Footer (){

return 

}