import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { approveAPI, SupervisorAPI } from "./ApiServices";

const Supervisor=()=>{
    const [details, setDetails] = useState({});
        // const [state, setState] = useState({
        //     FirstName: "",
        //     lastName: "",
        //     middleName:"",
        //     phoneNo:"",
        //     emailId:"",
        //     supervisorname:"",
        //     supervisoremail:"",
        //     street:"",
        //     city:"",
        //     zipcode:"",
        //     state:"",
        //     country:""
        //   })
        const navigate=useNavigate();
        const gobackToPage=()=>{
            navigate(-1);
       }
       useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        const data={
            "Supervisor_Email_Id":"surendhar.rangineni@rsystems.com",
            "Email_Id":"surendhar582@gmail.com"
            }
        const res = await approveAPI(data);
        console.log(res.data);
        setDetails(res.data);
       

    }
       const handleChange=(evt)=> {
        const value = evt.target.value;
       
      }
      const callSupervisor=async()=>{
          //console.log(state);
        //   navigate('/success');
        //   return;
        const res = approveAPI(details);
        console.log(res.status);
        
      if(res.status==200){
       const response = res.data;
       console.log(res);
       if(response.status==='success'){
            navigate('/success');
       }else{
           alert(response.Status)
       }
      }else{
          alert("fail")
      }
      
      //console.log(response.Status);
    
    }
    
return (
        <div className="login_page">
        
           <div className="table-wrapper1">
            <div className="row new_registration_Details">
               <h4>New User Registration Form!</h4>
               <div className="detailsUser"></div>
               <div className="form_section">
                    <div className="row ">
                   <div className="form-group col-md-6">
                       <label>First Name <span>*</span></label>
                       <input type="text"  value={details.FirstName && details.FirstName} className="form-control" disabled />
                   </div>
                   
                   <div className="form-group col-md-6">
                       <label>Last Name <span>*</span></label>
                       <input type="text" value={details.LastName && details.LastName} className="form-control" disabled />
                   </div>
                   <div className="form-group col-md-6">
                       <label>Phone Number <span>*</span></label>
                       <input type="text" value={details.PhoneNumber && details.PhoneNumber} className="form-control"  disabled/>
                   </div>
                   <div className="form-group col-md-6">
                       <label>Email Id <span>*</span></label>
                       <input type="text" value={details.Email_Id && details.Email_Id} className="form-control" disabled/>
                   </div>
               
                   <div className="form-group col-md-6">
                   <label>Assign Role  <span>*</span></label>
                   <select className="form-control" name="admins" id="admins">
                    <option value="Admin">Admin</option>
                    <option value="Supervisor">Supervisor</option>
                    <option value="Employee">Employee</option>
                    </select>
                    </div>
                    <div className="form-group col-md-6">
                       <label>Street  <span>*</span></label>
                       <input type="text" value={details.Street && details.Street} className="form-control" disabled/>
                   </div>
                   <div className="form-group col-md-6">
                       <label>City  <span>*</span></label>
                       <input type="text"value={details.City && details.City} className="form-control" disabled/>
                   </div>
                   <div className="form-group col-md-6">
                       <label>Zipcode <span>*</span></label>
                       <input type="number" value={details.Pin && details.Pin} className="form-control" disabled/>
                   </div>
                   <div className="form-group col-md-6">
                       <label>State  <span>*</span></label>
                       <input type="text" value={details.State && details.State} className="form-control" disabled/>
                   </div>
                   <div className="form-group col-md-6">
                       <label>Country <span>*</span></label>
                       <input type="text" value={details.Country && details.Country} className="form-control" disabled/>
                   </div>
               </div>
               <div className="officeAddress">
               <div className="row">
                   
                  

                   </div>
               
                       <div class="d-grid gap-2 d-md-block">
  <button class="btnfor" type="button" onClick={callSupervisor}>Approve</button>
  <button class="btnfor" type="button"  onClick={gobackToPage}>Reject</button>
</div>
           </div>
               </div>
              </div>
           </div>
           
        </div>
        )
}


export default Supervisor;