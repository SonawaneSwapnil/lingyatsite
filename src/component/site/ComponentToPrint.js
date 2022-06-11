import React, { Component,useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import { render } from '@testing-library/react';

export default class ComponentToPrint extends Component {
    render() {
        return (
            <div> hellow</div>
        );
    }}
    const Example=()=>{
        const componentRef=useRef();
      
        const handleprint=useReactToPrint({
            content:()=>componentRef.current
                });


                return(
<div>
    <ComponentToPrint ref={componentRef}/>
                <button onClick={handleprint}>print</button></div>)};
                render(<Example/>,document.querySelector("#root"));

                
 
    
      
   
