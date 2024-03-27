import { useState } from "react";
import GridComponent from "./grid";

 const App = () =>{
  const [products] = useState([{Name:"TV", Price:45000.99, Stock:"Available",Qty:3}])
  return(
    <div className="container-fluid">
      <GridComponent  title="Employee Details" fields={["First Name", "Last Name", "Designation", "Salary"]} data={[{"First Name":"Kumar", "Last Name": "Jadhav","Designation":"Manager", "Salary":45000}]} />
     
      <GridComponent title="Product Grid" fields={["Name", "Price", "Stock","Qty"]} data={products} />
     
    </div>
  )
 }
 export default App;