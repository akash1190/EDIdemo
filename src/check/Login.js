import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import {decode as base64_decode, encode as base64_encode} from 'base-64';
const Login=()=>{
    const navigate=useNavigate();
    const goToForgotPassword=()=>{
        //navigate('/forgotPassword',{state:{userData:{name:firstName}}});
        navigate('/forgotPassword')
   }
   const goToCreateAccount=()=>{
    //navigate('/forgotPassword',{state:{userData:{name:firstName}}});
    navigate('/createAccount')
}

const goToResetPassword=()=>{
    //navigate('/forgotPassword',{state:{userData:{name:firstName}}});
    navigate('/resetpassword')
}
const callAPi=async()=>{
    try{
     const response = await axios.get('http://18.117.255.68:9090/ws/simple/getAbc');//'https://heroku-boot-demo.herokuapp.com/');
     console.log(response.status);
     console.log(response.data);
    }catch(exception){
        console.log(exception);
    }
}
const callBasicAuthAPi=async()=>{
    
//  let axiosConfig = {
//     headers: {
//         'Content-Type': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//         'Access-Control-Allow-Origin': '*',
//        // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//        'Access-Control-Allow-Headers':'X-Requested-With'
     
//     }
//   };
 
//    const res = await axios.get('http://prodboomi.india.rsystems.com:9090/ws/simple/getAbc',axiosConfig, {
//    // Axios looks for the `auth` option, and, if it is set, formats a
//    // basic auth header for you automatically.
//    auth: {
//      username: 'rsystems-N4VE35',
//      password: 'ad6caf4b-941a-4a2d-81b1-55cbb4ec1364'
//    }
//  });

//  axios.get('http://18.117.255.68:9090/ws/simple/getAbc', {
//     withCredentials: true,
//     headers: {
//       "Accept": "application/json",
//       "Content-Type": "application/xml; charset=UTF-8"
//     }
//   },{
//     auth: {
//         username: 'rsystems-N4VE35',
//         password: 'ad6caf4b-941a-4a2d-81b1-55cbb4ec1364'
//   }}).then(function(response) {
//     console.log('Authenticated');
//   }).catch(function(error) {
//       console.log(error);
//     console.log('Error on Authentication');
//   });
const username = 'rsystems-N4VE35';//'rsystems-N4VE35';
const password = '8e453f3e-6584-4a80-b04f-f0cb3be5eac4';//'ad6caf4b-941a-4a2d-81b1-55cbb4ec1364';

//const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
var basicAuth = 'Basic ' + btoa(username + ':' + password);
const url ='http://prodboomi.india.rsystems.com:9090/ws/simple/getAbc'; //'http://18.117.255.68:9090/ws/simple/getAbc';
   // console.log(res.status);
   const res = await  axios.get(url, {
    headers: {
      'Authorization': basicAuth
    }
  });

  console.log(res.status);
  console.log(res.data);

}
    // const {state} = useLocation();
    // const {userData } = state; 
    // console.log(userData);
    // const userDetails = Object.entries(userData).map(([key,value])=>{
    //     return (
    //         <div>{key} : {value.toString()}</div>
    //     );
    //   })
    

    return (
        
        <div className="login_page">
           <div className="banner">
                <img src="dist/img/banner.jpg" />
           </div>
           <div className="account">
               <h4>Welcome to EDI Dashboard</h4>
               <p><small>Please sign-in to your account and start the adventure</small></p>
               <div className="form_section">
                   <div className="form-group">
                       <label>Email <span>*</span></label>
                       <input type="text" placeholder="Enter Email" className="form-control" />
                   </div>
                   <div className="form-group">
                       <label>Password <span>*</span></label>
                       <input type="password" placeholder="Enter Password" className="form-control" />
                   </div>
                   <div className="form-group">
                       <input type="submit" className="btn" value="Login"  onClick={callBasicAuthAPi}/>
                   </div>
                   <div className="password_Details">
                       <ul>
                           <li><a href="javascript:void(0)" className="btn forgot_Btn" onClick={goToForgotPassword}>Forgot Password</a></li>
                           <li><a href="javascript:void(0)" className="btn reset_Btn" onClick={goToResetPassword}>Reset Password</a></li>
                       </ul>
                   </div>
                   <div className="newPlatform">
                       <p>New on our platform?<a href="javascript:void(0);" className="btn create_account" onClick={goToCreateAccount}>Create account</a></p>
                   </div>
               </div>
           </div>
        </div>
        )
}


export default Login;