import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Auth } from "two-step-auth";
var finalOTP = "";
const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
}
async function OTPVerification(emailId) {

    const result = await Auth(emailId, "BookMyDesk");
    //console.log(res);
    //console.log(res.mail);

    finalOTP = result.OTP;
    //console.log(res.success);
}
const ForgotPassword = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [buttonMessage, setbuttonMessage] = useState("Send");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [otp, setOtp] = useState("");
    const [danger, setdanger] = useState("")
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangeOTP = (e) => {
        const newOTP = e.target.value;
        setOtp(newOTP);
        
        if (newOTP === finalOTP.toString()) {
            props.history.push("/setNewPassword");
            window.location.reload();
        }
    };
    const handleForgotPassword = (e) => {
        e.preventDefault();
        OTPVerification(username);
        setbuttonMessage("")
        setMessage("hey")
        setLoading(true);
        
        setTimeout(function () {
            console.log("verifying")
        }, 5000);   

    };
    
    
    return (
        <div className="col-md-12">
            <div className="card card-container">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />

                <Form onSubmit={handleForgotPassword} ref={form}>
                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="username"
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required]}
                        />
                    </div>
                    {message && (
                        <div className="form-group">
                            <label htmlFor="username">Enter OTP</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="username"
                                value={otp}
                                onChange={onChangeOTP}
                                validations={[required]}
                            />
                        </div>
                        )
                    }
                    {buttonMessage &&
                        (<div className="form-group">
                            <button className="btn btn-primary btn-block" >

                                <span>Send</span>
                            </button>
                        </div>)}

                    {danger && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </div>
        </div>
    );
};

export default ForgotPassword;