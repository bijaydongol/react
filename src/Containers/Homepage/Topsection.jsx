
import styled from 'styled-components';
import { Button } from '../../Components/Button/Index';
import {Logo} from '../../Components/Logo/Index';
import Topsectionbackgroundimg from "../../Images/skype.jpg";
import Topsectioninnerimg from "../../Images/Untitled.png";


const Topsectioncotainer=styled.div`
width:100%;
height:750px;
background-image: url(${Topsectionbackgroundimg});
background-position:0px -10px;
background-size:cover;

`;
const Backgroundfilter=styled.div`
width:100%;
height:100%;
background-color:rgba(38, 70, 83, 0.9);

display:flex;
flex-direction:column;

`;
const Topsectioninnercontainer=styled.div`
width:100%;
height:100%;

align-items:center;
display:flex;
justify-content:space-evenly;
`;


const Standoutimg=styled.div`
width:32em;
height:25em;
margin:0;
img{
    width:100%;
    height:100%
}
`;
const TitleSlogan=styled.h2`
margin:0;
line-height:1;
font-size:35px;
color:red;
font-weight:600;

`;
const Logocontainer=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
`;

export function Topsection(props){
    const {children}=props;


    return(<Topsectioncotainer>
        <Backgroundfilter>
            {children}
        <Topsectioninnercontainer>
        
            <Logocontainer>
               <Logo textsize={90} logosize={120}></Logo>
               <TitleSlogan >Feel Your Own. </TitleSlogan>
               <TitleSlogan>For You, </TitleSlogan>
               <TitleSlogan>For Us. </TitleSlogan>
               <Button>Join Now</Button>
            </Logocontainer>
            <Standoutimg>
                <img src={Topsectioninnerimg} alt="Feel Your Own"/>
            </Standoutimg>
            </Topsectioninnercontainer>
            </Backgroundfilter>
        </Topsectioncotainer>);
}
