import logo from './logo.svg';
import './App.css';
import Details from './Details';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import CreateAccount from './CreateAccount';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import Form from './form/Form';
import Main from './Main';
import Accordian from './accordian/Accordian';
import Table from './accordian/Table';
import ResetPassword from './ResetPassword';
import NestedTable from './nestedTable/NestedTable';
import ReactNestTable from './nestedTable/ReactNestTable';
import Trackpo from './accordian/Trackpo';
import Generalsearch from './accordian/Generalsearch';
import Header from './Header';

function App() {
  return (
    <div className="wrapper">
       <Router>
       <Header/>
        <Routes>
        {/* <Route exact path='/' element={<NestedTable/>}/> */}
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/form" element={<Form/>} />
        <Route exact path="/details" element={<Details/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/forgotPassword" element={<ForgotPassword/>} />
        <Route exact path="/createAccount" element={<CreateAccount/>} />
        <Route exact path="/resetpassword" element={<ResetPassword/>} />
        <Route exact path="/trackpo" element={<Trackpo/>} />
        <Route exact path="/generalsearch" element={<Generalsearch/>} />
        <Route element={Error} />
        </Routes> 
      </Router> 
      
    </div> 
  );
}

export default App;
