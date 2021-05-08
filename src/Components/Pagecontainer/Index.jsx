
import styled from 'styled-components';





const Pagewrapper = styled.div`
width:100%;
min-height:100%;
padding:0;
margin:0;
display:flex;
flex-direction:column;
align-items:center;
`;

export function Pagecontainer(props){
    
    return <Pagewrapper>{props.children}</Pagewrapper>
}
