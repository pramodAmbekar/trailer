import React, { useState } from "react"
import "./login.css"

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="container login">
            <div className="border login-c">
                <h4 className="text-center">Login</h4>
                <div >
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-8">
                                <input type="text"
                                    className="form-control"
                                    onChange={(e) => setUserName(e.target.value)}
                                    placeholder="userName"
                                    value={userName} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-8">
                                <input type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password" />
                            </div>
                        </div>
                        <div className="form-group row ">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-md-8 align-center">
                                <button
                                    className="form-control button btn-primary"
                                >
                                    Login
                        </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    )
}

export default Login