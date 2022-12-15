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

const Render = () => {

  // These useState variables are functionally no different than setting 
  //
  //      this._anything = { names: { immediateFamilyFirstNames: {['Zak','Rob','Mark'],['Peyton','Natalie']}}};
  //      this._itemsList = ["Movie 01", "Movie 02", "Movie 03"];
  //
  // inside the constructor of a JSX class. You can set your own defaults in the 
  // = useState() section of the statement, inside the parentheses, as seen below. 

  const [itemsList, setItemsList] = useState(["Interstellar", "Space Jam", "Avatar"]);
  const [listAppend, setListAppend] = useState();

  const DeleteItem = (item) => {

    setItemsList(itemsList.filter((theItem) => theItem !== item));
    console.log('\n');
    console.log('finished..');

  }
  
  const RenderCard = (props) => {
  
    let item;
    let key;
  
    if(props){
      item = props.itemsList || props.item;
      key = props.key;
    }
  
    return (
  
      <div>
        <li key={key} className='d-flex pe-5 ps-2 mb-1'>
            <Card className="d-inline-block w-100">
              <div className='d-flex'>               
                <Card.Body className="d-inline-block"> 
                    {item} 
                </Card.Body>
              
                <Button onClick={ () => { let newKey = item; item = DeleteItem(newKey, item); } } className="me-2 mt-2 mb-2 btn-danger btn-outline-dark" id="listAppend">
                  🗑
                </Button>
              </div>
  
            </Card>
        </li>
      </div>  
    ) 
  
  }

  useEffect( () => {

    console.log('useEffect begin..');

    // Right here we have a proper rerender without the need for useEffect. The dependency array are actually unnecessary 
    // because the useEffect function is essentially always watching for a change in any of the state variables
    // used within it. 
    //
    // Notice that this JSX function doesn't actually have any dependencies so it simply runs each time the page is rerendered.
    // functionally equal.
    //
    // Finally, at the end we reset the value in the search field to null, so our users are free to add more movies.

    document.getElementById('searchBar').value = null;

  })

  // I like this method here below the most for completing a JSX conditional render 
  // without custom classes. It makes the most sense to me. Plus i think Mr. Smith is a big 
  // lodash guy so it works out haha.. Just checked the docs and lodash is recommended..

  const RenderList = (item) => {

      console.log('RenderList() Function:');
      console.log(itemsList);

      return renderNow = <RenderCard x={x} itemsList={item}/>

  }
  
  return (
  
    <div>
        
    <h1 className="ms-4 pb-3">My Favorite Movies</h1>
    
    <Form.Group className="mb-3 pe-5">
      <InputGroup className="InputGroup mb-3 ms-2 pe-3">
        <InputGroup.Text id="searchInputTxt">Add movie</InputGroup.Text>
          
          <Form.Control
            id="searchBar"
            value={listAppend}
            onChange={(e) => {
              setListAppend(e.target.value);
            }}
            aria-label="search bar"
            aria-describedby="basic-addon1"
          />

        <Button onClick={() => { setItemsList([...itemsList, listAppend]); x++; }} className="" id="listAppend">
          Add
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
          { itemsList && _.map(itemsList, RenderList) } 
    </div>


  </div>)

}

export default Render;
