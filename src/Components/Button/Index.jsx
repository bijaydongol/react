import react from 'react';
import styled from 'styled-components';

const Buttonwrapper=styled.div`
border:none;
outline:none;
color:white;
padding: 7px 1.5em;
font-size:${({size})=>(size? size+"px":"18px")};;
font-weight:500;
border-radius:5px;
background-color:green;

cursor:pointer;
transition:all 200ms ease-in-out;


&:hover{
    border:1px solid white;
    background-color:grey;
}


&:focus{
    outline:none;
}
`;

export function Button(props){
    const {size}=props;
    return<Buttonwrapper size={size}>{props.children}</Buttonwrapper>
}