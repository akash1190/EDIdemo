import { useNavigate } from "react-router-dom";

const ResetPassword=()=>{
    const navigate=useNavigate();
    const gobackToPage=()=>{
        navigate(-1);
   }

    return (
        <div className="login_page">
           <div className="banner">
                <img src="dist/img/banner.jpg" />
           </div>
           <div className="account resetPassword">
               <h4>Change Password</h4>
               <div className="form_section">
               <div className="form-group">
                       <label>Old Password <span>*</span></label>
                       <input type="text"  className="form-control" />
                   </div>
                   <div className="form-group">
                       <label>New Password  <span>*</span></label>
                       <input type="text" className="form-control" />
                   </div>
                   <div className="form-group">
                       <label>Confirm Password <span>*</span></label>
                       <input type="text" className="form-control" />
                   </div>
                   <div class="forgot_password"><ul><li><a href="javascript:void(0)" class="btn forgot_Btn">
                       Ok</a></li><li><a href="javascript:void(0)" 
                       class="btn reset_Btn" onClick={gobackToPage}>Cancel</a></li></ul></div>
           </div>
               </div>
              
           </div>
           
     
        )
}


export default ResetPassword;