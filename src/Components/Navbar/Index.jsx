import react from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Index';
import {Logo} from '../Logo/Index';


const Navbarcontainer=styled.div`
width:100%;
height:60px;
display:flex;
align-items:center;
background-color:white;
padding:0 15px;
justify-content:space-between;
`;

const Accessibilitycontainer=styled.div`
display:flex;
align-items:center;
`;

const Anchorlink=styled.a`
font-size:17px;
color:blue;
cursor:pointer;
text-decoration:none;
outline:none;
transition:all 200ms ease-in-out;
margin:10px;

&:hover{
    color:grey;
    
    }
`;



export function Navbar(props){
   return (<Navbarcontainer>
       <Logo/>
        <Accessibilitycontainer>
            <Anchorlink>Join A Meeting</Anchorlink>
            <Anchorlink>Host A Meeting</Anchorlink>
            <Anchorlink>Sign In</Anchorlink>
            <Button size={13}>Sign Up,It's Free</Button>
            </Accessibilitycontainer>   
   </Navbarcontainer>); 
}