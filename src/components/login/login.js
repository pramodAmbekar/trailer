import React, { useState } from "react"
import "./login.css"

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="container login">
            <div className="border login-c">
            <h4 className="text-center">Login</h4>
                <form>
                        <label className="col-sm-1 col-form-label">Email</label>
                        <div >
                            <input type="text"
                                className="form-control"
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="userName"
                                value={userName} />
                        </div>
                        <label className="col-sm-1 col-form-label">Password</label>
                        <div >
                            <input type="password"
                                className="form-control"
                                id="inputPassword"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password" />
                        </div>
                        <label className="col-sm-1 col-form-label"></label>
                        <div >
                            <button
                                className="form-control button btn-primary"
                            >
                                Login
                        </button>
                        </div>
                </form>
            </div>

        </div>
        
    )
}

export default Login