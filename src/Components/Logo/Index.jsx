
import styled from 'styled-components'

import Logoimg from "../../Images/Logos/logo_transparent.png"

const Brandlogo=styled.div`
display:flex;
align-items:center;
margin:0;
`;


const Logoimage=styled.div`
width:${({size})=>(size? size+"px":"4em")};
height:${({size})=>(size? size+'px':"4em")};

img{
    width:100%;
    height:100%;
}
`;


const Logotitle=styled.h1`
font-size:${({size})=>(size? size +"px":"35px")};
margin=0;
color:sky-blue;
font-weight:900;

`;

export function Logo(props)
{
    const {logosize,textsize}=props;
return<Brandlogo>
<Logoimage size={logosize}>
    <img src={Logoimg} alt="afanta logo " />
</Logoimage>
<Logotitle size={textsize} >Afanta</Logotitle>
</Brandlogo>
}


