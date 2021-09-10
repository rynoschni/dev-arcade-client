import React, {useState} from 'react';
import { connect } from 'react-redux';
import signupActions from '../actions/signupActions';


const SignupForm = ({signupActions}) => {
    const [userName, setUserName] = useState('');
    
    const _handleChange = (name) => {
        setUserName(name)
    }

    const _handleSubmit = (event) => {
        event.preventDefault();
        signupActions({name: userName});
        
    }

        return (
            <form onSubmit={event=>_handleSubmit(event)}>
                <h1 style={{color: "#FAEB2C", fontFamily: "primary-font", fontSize: "50px"}}>Player Name</h1>

                <div className="form-group">
                    <label className="control-label"></label>
                    <input 
                        onChange={event=>_handleChange(event.target.value)}
                        value={userName}
                        type="text"
                        name="username"
                        style={{backgroundColor:"#1685F8", color:"#FAEB2C", textAlign:"center", fontSize:"30px", marginBottom:"15px",fontFamily: "primary-font"}}
                        />
                </div>
                <div className="form-group">
                    <button type="submit"  className="btn btn-primary btn-lg" style={{backgroundColor: "#E900FF", color: "yellow", fontFamily: "primary-font", fontSize: '40px', marginTop: "10px"}}>
                      Submit
                    </button>
                </div>
            </form>
        );
    }


export default connect(null,{signupActions})(SignupForm);