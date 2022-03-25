import React, { useState, useEffect } from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Nav from "./Nav";
import {ProductsDetails} from "./ProductsDetails";


function App() {

  const [domestic,setDomestic] = useState(false)
  const [imported,setImported] = useState(false)

  useEffect (() => {
    fetch('https://interview-task-api.mca.dev/qr-scanner-codes/alpha-qr-gFpwhsQ8fkY1')
     .then(response => response.json())
     .then(json => setDomestic(json))
     .catch(err => alert(err))
  },[])
  function Domestic (){
setDomestic(!imported);
  }

return (
<div id="products">
<h2>Products</h2>
<Nav />
<Router>
 <Route path="./qr-scanner-codes/alpha-qr-gFpwhsQ8fkY1" element={<ProductsDetails />} />
</Router>
</div>
);
 
}



export default App;
