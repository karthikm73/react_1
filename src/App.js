import React from "react"
import { SharedLayout } from "./pages/SharedLayout"
import { ContactUs } from "./pages/ContactUs"
import Main from "./components/Main"
import { Categories } from "./pages/Categories"
import "./index.css"

import { SingleReciepe } from "./pages/SingleReciepe"
import Newsletter from "./components/Newsletter"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {


  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />} >

          <Route index element={<Main /> } />
          <Route index element={<Newsletter /> } />
          
          <Route path="categories" element ={<Categories />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="reciepes/:reciepeId" element={<SingleReciepe />}></Route>

          </Route>

        </Routes>

      </BrowserRouter>





    </div>
  )
}

export default App;
