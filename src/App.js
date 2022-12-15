import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import * as React from "react";
import {
  Route, Routes,
} from "react-router-dom";

import Switch from 'react-bootstrap/Switch';
import { Helmet } from 'react-helmet';

import RenderNavbar from './components/navbar';
import Render0 from './components/page1';
import Render1 from './components/page2';
import Render2 from './components/page3';

const TITLE = 'AWD-1111 Exam 4';

function App() {
  
  return (
    <div>

      <Helmet>
      <title>{ TITLE }</title>
      </Helmet>

      <RenderNavbar />

      <div>
        <Switch className='mb-2'> 

        <form className='container2'>

        </form >
          <div id='saveBody'>
          <Routes>

            <Route exact path="/page1" element={<Render0 />}></Route>
            <Route exact path="/page2" element={<Render1 />}></Route>
            <Route exact path="/page3" element={<Render2 />}></Route>

          </Routes>
          </div>

        </Switch>

      </div>

    </div>
  );
}

export default App;
