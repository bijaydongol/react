import react from 'react';
import styled from 'styled-components';

const Cardcustomer=styled.div`
width:300px;
min-height:250px;
background-color:white;
box-shadow:0 0 1px rgba(0,0,0,0.17);
margin:0.5em;
margin-bottom:1.5em;
display:flex;
flex-direction:column;
overflow:hidden;
`;

const Topcontainer=styled.div`
width:100%
`;


const Customerthumbnail=styled.div`
width:100%
height:11em;
img{
    widht:100%;
    heignt:100%;
}
`;

const Contentcontainer=styled.div`
width:100%
display:flex;
flex-direction:column;
flex:1;
padding:15px 10px;

`;


const Bottomcontainer=styled.div`
width:100%
height:32px;
dispaly:flex;
align-items:center;
justify-content:space-between;
border-top:1px solid rgba(15,15,15,0.19);
padding 0 10px;
`;


export function Customerfeedback(props){

return<Cardcustomer>
    <Topcontainer>
        <Customerthumbnail>
            <img src{} alt=''/>
        </Customerthumbnail>
    </Topcontainer>
</Cardcustomer>
}