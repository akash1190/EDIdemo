import { useNavigate } from "react-router-dom";

const CreateAccount=()=>{
    const navigate=useNavigate();
    const gobackToPage=()=>{
        navigate(-1);
   }

    return (
        <div className="login_page">
           <div className="banner">
                <img src="dist/img/banner.jpg" />
           </div>
           <div className="account createAccount">
               <h4>Create Account</h4>
               <p><small>Create your account and start your journey</small></p>
               <div className="form_section">
                    <h4>Personal Information:</h4>
                    <div className="row">
                   <div className="form-group col-md-6">
                       <label>First Name <span>*</span></label>
                       <input type="text"  className="form-control" />
                   </div>
                   <div className="form-group col-md-6">
                       <label>Middle Name </label>
                       <input type="text" className="form-control" />
                   </div>
                   <div className="form-group col-md-6">
                       <label>Last Name <span>*</span></label>
                       <input type="text" className="form-control" />
                   </div>
                   <div className="form-group col-md-6">
                       <label>Phone Number <span>*</span></label>
                       <input type="number" className="form-control" />
                   </div>
                   <div className="form-group col-md-12">
                       <label>Email Id <span>*</span></label>
                       <input type="text" className="form-control" />
                   </div>
                   <div className="form-group col-md-6">
                       <label>Supervisor Name <span>*</span></label>
                       <input type="text" className="form-control" />
                   </div>
                   <div className="form-group col-md-6">
                       <label>Supervisor Email <span>*</span></label>
                       <input type="text" className="form-control" />
                   </div>
               </div>
               <div className="officeAddress">
               <h4>Office Address:</h4>
               <div className="row">
               <div className="form-group col-md-6">
                       <label>Street  <span>*</span></label>
                       <input type="text" className="form-control" />
                   </div>
                   <div className="form-group col-md-6">
                       <label>City  <span>*</span></label>
                       <input type="number" className="form-control" />
                   </div>
                   <div className="form-group col-md-6">
                       <label>Zipcode <span>*</span></label>
                       <input type="number" className="form-control" />
                   </div>
                   <div className="form-group col-md-6">
                       <label>State  <span>*</span></label>
                       <input type="text" className="form-control" />
                   </div>
                   <div className="form-group col-md-6">
                       <label>Country <span>*</span></label>
                       <input type="text" className="form-control" />
                   </div>
                   </div>
                   <div class="forgot_password"><ul><li><a href="javascript:void(0)" class="btn forgot_Btn">Register</a></li><li><a href="javascript:void(0)" class="btn reset_Btn" onClick={gobackToPage}>Cancel</a></li></ul></div>
           </div>
               </div>
              
           </div>
           
        </div>
        )
}


export default CreateAccount;