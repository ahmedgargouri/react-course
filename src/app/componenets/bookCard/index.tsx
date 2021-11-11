import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import {
    faCalendarAlt, faUserAltSlash,
  } from "@fortawesome/free-solid-svg-icons";
import { Button } from '../button';
const CardContainer = styled.div`
min-height: 4.3em;
box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
${tw `
flex
justify-center
items-center
rounded-md
bg-white
pt-1
pb-1
pr-2
pl-2
md:pt-2
md:pb-2
md:pl-9
md:pr-9
`};
`;
const ItemContainer = styled.div`
${tw `
flex
relative
`};
`;

const Icon = styled.span`
${tw `
text-red-500
fill-current
text-xs
md:text-base
mr-1
md:mr-3
`};
`;

const Name = styled.span`
${tw `
text-gray-600
text-xs
md:text-sm
cursor-pointer
select-none
`};
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
  `};
`;

const DateCalendar = styled(Calendar)`
position: absolute;
top: 2em;
left: 0;
max-width: none;
user-select: none;
`


export function BookCard (){
const [startDate, setStartDate] = useState<Date>(new Date());
const [isStartCalenderopen,setStartCalenderopen] = useState(false);
const [returnDate, setReturnDate] = useState<Date>(new Date());
const [isReturnCalenderopen,setReturnCalenderopen] = useState(false);
 
const toggleStartDateCalender = () =>{
    setStartCalenderopen(!isStartCalenderopen);
    if(isReturnCalenderopen){setReturnCalenderopen(false)}
}
const toggleReturnDateCalender = () =>{
    setReturnCalenderopen(!isReturnCalenderopen);
    if(isStartCalenderopen){setStartCalenderopen(false)}
}
console.log(" START value:", startDate)
console.log(" RETURN value:", returnDate)

return (
<CardContainer>
    <ItemContainer>
        <Icon>
        <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalender}>Pick up a Date</Name>
         {isStartCalenderopen && <DateCalendar value={startDate} onChange={setStartDate} />}
    </ItemContainer>
    <LineSeperator/>
    <ItemContainer>
        <Icon>
        <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDateCalender}>Retrun Date</Name>
        {isReturnCalenderopen && <DateCalendar value={returnDate} onChange={setReturnDate} />}
     </ItemContainer>
    <Button text="book your ride" theme={'filled '} />
</CardContainer>

)
}