import React from 'react';
import { Navbar } from '../../Components/Navbar/Index';
import { Pagecontainer } from '../../Components/Pagecontainer/Index';
import { Topsection } from './Topsection';



export function Homepage(props){
    return (<Pagecontainer>
      <Topsection>
        <Navbar></Navbar>
      </Topsection>
      </Pagecontainer>);
}