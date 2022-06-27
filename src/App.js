import logo from './logo.svg';
import './App.css';
// import Details from './Details';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import CreateAccount from './CreateAccount';
import { Route,BrowserRouter as Router,Routes, useLocation } from 'react-router-dom';
import Form from './form/Form';
import Main from './Main';
import Accordian from './accordian/Accordian';
// import Table from './accordian/Table';
import ResetPassword from './ResetPassword';
import NestedTable from './nestedTable/NestedTable';
import ReactNestTable from './nestedTable/ReactNestTable';
import Trackpo from './accordian/Trackpo';
import Generalsearch from './accordian/Generalsearch';
import Header from './Header';
import Admin from './Admin';
import All_employees from './All_employees';
import Offboard from './Offboard';
import Onboard from './Onboard';
import Success from './Success';
import Acknowledgement_997 from './accordian/Acknowledgement_997';
import Invoice_810 from './accordian/Invoice_810';
import Order_Status_Report_870 from './accordian/Order_Status_Report_870';
import Po_805 from './accordian/Po_805';
import Po_change_860 from './accordian/Po_change_860';
import Purchase_Order_Change_Acknowledgement_865 from './accordian/Purchase_Order_Change_Acknowledgement_865';
import Shipment from './accordian/Shipment';
import Purchase_Order_Acknowledgement_855 from './accordian/Purchase_Order_Acknowledgement_855';
import Supervisor from './Supervisor';



const App=()=> {
  const location = useLocation();
  
  //console.log(location);
  return (
    <div className="wrapper">
       {
        (location.pathname==='/login' || location.pathname==='/forgotPassword'
        || location.pathname==='/resetpassword' || location.pathname==='/createAccount') ? null:<Header/>
        
       }
       
        <Routes>
        {/* <Route exact path='/' element={<NestedTable/>}/> */}
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/form" element={<Form/>} />
        {/* <Route exact path="/details" element={<Details/>} /> */}
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/forgotPassword" element={<ForgotPassword/>} />
        <Route exact path="/createAccount" element={<CreateAccount/>} />
        <Route exact path="/resetpassword" element={<ResetPassword/>} />
        <Route exact path="/trackpo" element={<Trackpo/>} />
        <Route exact path="/generalsearch" element={<Generalsearch/>} />
        <Route exact path="/admin" element={<Admin/>} />
        <Route exact path="/All_employees" element={<All_employees/>} />
        <Route exact path="/Offboard" element={<Offboard/>} />
        <Route exact path="/Onboard" element={<Onboard/>} />
        <Route exact path="/success" element={<Success/>} />
        <Route exact path="/Acknowledgement_997" element={<Acknowledgement_997/>} />
        <Route exact path="/Invoice_810" element={<Invoice_810/>} />
        <Route exact path="/Order_Status_Report_870" element={<Order_Status_Report_870/>} />
        <Route exact path="/Po_805" element={<Po_805/>} />
        <Route exact path="/Po_change_860" element={<Po_change_860/>} />
        <Route exact path="/Purchase_Order_Acknowledgement_855" element={<Purchase_Order_Acknowledgement_855/>} />
        <Route exact path="/Po_change_860" element={<Po_change_860/>} />
        <Route exact path="/Purchase_Order_Change_Acknowledgement_865" element={<Purchase_Order_Change_Acknowledgement_865/>} />
        <Route exact path="/Shipment" element={<Shipment/>} />
        <Route exact path="/Supervisor" element={<Supervisor/>} />b
        <Route element={Error} />
        </Routes> 
      {/* </Router>  */}
      
    </div> 
  );
}

export default App;
