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

  const [itemsList, setItemsList] = useState(['This is a review!', 'This is a second review!', 'Wow, look at all the cool reviews!']);
  const [itemsList2, setItemsList2] = useState(['Zackary Seger', 'Joshua Mandel', 'Vincent Botinni']);
  const [itemsList3, setItemsList3] = useState(['5','4','5']);
  const [listAppend, setListAppend] = useState();
  const [listAppend2, setListAppend2] = useState();
  const [listAppend3, setListAppend3] = useState();

  const DeleteItem = (item) => {

    setItemsList(itemsList.filter((theItem) => theItem !== item));
    console.log('\n');
    console.log('finished..');
    
  }
  
  const RenderCard = (props) => {
  
    let item;
    let itemIndex;
    let itemName;
    let itemStars;
  
    if(props){
      item = props.itemsList || props.item;
      itemIndex = itemsList.indexOf(item);
      itemName = itemsList2[itemIndex];
      itemStars = itemsList3[itemIndex];
    }

  
    return (
  
      <div>
          <li key={props.item} className='d-flex pe-5 ps-2 mb-1'>
            <Card className="d-inline-block w-100">
              <div className='d-flex'>               
                <Card.Body className="d-inline-block ms-2"> 
                  
                  <p className="d-inline">
                    <b >Name:</b>  {itemName} 
                  </p>
    
                  <br/>
                  <p className="d-inline">
                    <b>Star Rating:</b> {itemStars} 
                  </p>
                  
                  <br/>
                  <p className="d-inline">
                    <b>Review:</b> {item} 
                  </p>

                </Card.Body>
              
                <Button onClick={ () => { let newKey = item; item = DeleteItem(newKey, item); } } className="me-2 mt-2 mb-2 px-5 btn-danger btn-outline-dark" id="listAppend">
                  🗑
                </Button>
              </div>
  
            </Card>
        </li>
      </div>  
    ) 
  
  }

  // I like this method here below the most for completing a JSX conditional render 
  // without custom classes. It makes the most sense to me. Plus i think Mr. Smith is a big 
  // lodash guy so it works out haha.. Just checked the docs and lodash is recommended..

  const RenderList = (item) => {

      console.log('RenderList() Function:');
      console.log(item);

      return renderNow = <RenderCard item={item}/>

  }
  
  return (
  
    <div>
        
    <h1 className="ms-4 pb-2">F22 Raptor 6DOF Full Motion Simulator</h1>
    <h4 className="ms-5 pb-3">
        The CRVS system trains pilots in a realistic visual environment, allowing them to experience<br/>
        extreme maneuvers typically only practiced in a simulator, officials say. <br/>
        The display provides high-resolution imagery for pilots with nearly 20/20 acuity in an immersive,<br/>
        360-degree visual environment.
    </h4>
    
    <Form.Group className="mb-3 pe-5">
      <InputGroup className="InputGroup mb-3 ms-2 pe-3">

          <InputGroup.Text id="searchInputTxt">Name</InputGroup.Text>    

          <Form.Control
            id="nameBar"
            value={listAppend2}
            onChange={(e) => {
              setListAppend2(e.target.value);
            }}
            aria-label="name bar"
            aria-describedby="basic-addon1"
          />

          <InputGroup.Text id="searchInputTxt2">Star Rating (0-5)</InputGroup.Text> 

          <Form.Control
            id="starBar"
            value={listAppend3}
            onChange={(e) => {
              setListAppend3(e.target.value);
            }}
            aria-label="name bar"
            aria-describedby="basic-addon1"
          />

      </InputGroup>
      <InputGroup className="InputGroup mb-3 ms-2 pe-3">
      
      <InputGroup.Text id="searchInputTxt2">Review</InputGroup.Text> 

        <Form.Control
          id="reviewBar"
          value={listAppend}
          onChange={(e) => {
            setListAppend(e.target.value);
          }}
          aria-label="name bar"
          aria-describedby="basic-addon1"
        />

        <Button onClick={() => { setItemsList([...itemsList, listAppend]);
                                 setItemsList2([...itemsList2, listAppend2]);
                                 setItemsList3([...itemsList3, listAppend3]);
                                 x++;
                               }} id="listAppend">
          Upload
        </Button>

      </InputGroup>

      <div className="container-fluid">

      </div>

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
