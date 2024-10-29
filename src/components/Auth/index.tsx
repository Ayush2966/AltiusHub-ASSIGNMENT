import React, { useState } from "react";
import { AuthFormProps } from './type';
import "./autho.css";

const AuthForm : React.FC<AuthFormProps>= ({
    setIsLoggedIn,
    setCurrentuser,
    isRegister,
    setActiveView
}) =>{
    const[formData, setFormData]= useState({
        username:' ',
        email:' ',
        password: ' ',
    });
    const handleSubmit =(e: React.FormEvent)=>{
        e.preventDefault();
        setCurrentuser({
            id:1,
            username: formData.username,
            email: formData.email,
            avatarurl:' ',
        });
        setIsLoggedIn(true);
    };
    return(
        <div className="formdata" >
            <div className="container">
                <h2 className="form-heading">
                    {isRegister? 'Register': 'Login'}
                </h2>
                <form onSubmit={handleSubmit} className="formdetails" style={{ border:'10px',
                    borderColor:"white",
                    height:'100px', alignItems:"center", width:"500px" }}>
                    
                    <div>
                    <label className="inputheading">Username</label>
                    <input type="text" value={formData.username} 
                    onChange={(e)=>setFormData({...formData, username: e.target.value})}
                    className="form-input" required />
                    </div> 
                   
                    <div>
                        <label className="inputheading">Email</label>
                        <input type="email" value ={formData.email}
                        onChange={(e)=>setFormData({...formData, email: e.target.value})}
                        className="form-input" required/>
                    </div>
                    
                    <div>
                        <label className="inputheading"> Password</label>
                        <input type="password" value= {formData.password}
                        onChange={(e)=>setFormData({...formData, password: e.target.value})}
                        className="form-input" required
                        />
                    </div>

                    <button 
                    type="submit"
                    className="submitbutton">
                        {isRegister? 'Register': 'Login'}
                    </button>
                </form>

                <p className="footer-text">
                    {isRegister? 'Already have an account?': "Dont have account?"}
                    <button onClick={()=> setActiveView (isRegister?'login':'register')}
                        className="footerbutton">
                            {isRegister?'Login':'Register'}
                        
                    </button>
                </p>
            </div> 
        </div> // 
    )
}
export default AuthForm;