import { useNavigate } from "react-router-dom";


const ForgotPassword=()=>{
    const navigate=useNavigate();
    const gobackToPage=()=>{
        navigate(-1);
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
           <div className="account forgetPassward">
               <h4>Forgot Password</h4>
               <div className="form_section">
                   <div className="form-group">
                       <label>Enter Email ID <span>*</span></label>
                       <input type="text" placeholder="Enter Email" className="form-control" />
                   </div>
                  <div className="forgot_password">
                       <ul>
                           <li><a href="javascript:void(0)" className="btn forgot_Btn">Set Password</a></li>
                           <li><a href="javascript:void(0)" className="btn reset_Btn" onClick={gobackToPage}>Cancel</a></li>
                       </ul>
                   </div>  
               </div>
           </div>
        </div>
        )
}


export default ForgotPassword;