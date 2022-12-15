import { useState } from "react";
import { useEffect } from 'react';
import Card from "react-bootstrap/Card";

import '../zaks.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import _ from 'lodash';

// eslint-disable-next-line no-unused-vars
let item;
// eslint-disable-next-line no-unused-vars
let x = 0;

let renderNow;

const RenderSuccess = (props) => {
  if (props.items) {
    if (props.items >= 21) {
      return (
        <div>
          <p id='success' className="ms-3">Congratulations! You are of age and may enter the venue.</p>
        </div>  
      ) 
    } 
    if (props.items <= 21) {
      return ( 
      <div>
        <p id='failure' className="ms-3">You do not meet the age requirement. Leave now or prepare for execution.</p>
      </div> 
      ) 
    }
  }
}



const Render = () => {

  // These useState variables are functionally no different than setting 
  //
  //      this._anything = { names: { immediateFamilyFirstNames: {['Zak','Rob','Mark'],['Peyton','Natalie']}}};
  //      this._itemsList = ["Movie 01", "Movie 02", "Movie 03"];
  //
  // inside the constructor of a JSX class. You can set your own defaults in the 
  // = useState() section of the statement, inside the parentheses, as seen below. 

  const [itemsList, setItemsList] = useState([]);
  const [listAppend, setListAppend] = useState();

  return (
  
    <div>
        
    <h1 className="ms-4 pb-3">Age Verification</h1>
    
    <Form.Group className="mb-3 pe-5">
      <InputGroup className="InputGroup mb-3 ms-2 pe-3">
        <InputGroup.Text id="searchInputTxt">What is Your Age?</InputGroup.Text>
          
          <Form.Control
            id="ageBar"
            value={listAppend}
            onChange={(e) => {
              setListAppend(e.target.value);
            }}
            aria-label="age bar"
            aria-describedby="basic-addon1"
          />

        <Button onClick={() => { setItemsList(listAppend); x++; }} className="" id="listAppend">
          Verify
        </Button>

      </InputGroup>
    </Form.Group>

    {
      // Below we have quite possibly, the most important, and confusing line of code on this page. 
      // First, I haven't looked into why, but the _ refers to lodash, and basically everything
      // you could want from it (for now at least..).
      //
      // Now, this is a special .map() function created specifically by lodash. It first takes an array, 
      // or collection, and second a function written without parentheses. The function, is allowed to do
      // anything, however this is one of the allowed options for conditional rerendering with JSX functions.
    }

    <div className="pe-2">
      {    

        itemsList[0] !== undefined && itemsList ? <RenderSuccess items={itemsList}/> : null 
  
      }
    </div>


  </div>)

}

export default Render;
