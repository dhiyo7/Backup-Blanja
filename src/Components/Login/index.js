import React, { Component } from "react";
import './style.css'

export default class Login extends Component {
    render() {
        return (
            <div className="container main mt-1">
                <div className="header-form">
                    <img src="https://res.cloudinary.com/devloops7/image/upload/v1606499947/newBlanja/VectorlogoKecil_ijoj9p.png" alt="" srcSet="" />
                    <span>Blanja</span>
                </div>
                <p className="font-login">Please login with your account</p>
                <div className="btn-group">
                    <button className="btn-white">Custommer</button>
                    <button className="btn-red">Seller</button>
                </div>
                <form action="" className="form-login">
                    <input type="text" className="form-control w-100 rounded" placeholder="Email" />
                    <input type="text" className="form-control w-100 rounded" placeholder="Password" />
                    <p className="font-forgot">
                        <a href="/reset" className="font-register">Forgot password?</a>
                    </p>
                    <a href class="btn-login">
                        <span > PRIMARY </span>
                    </a>
                </form>
                <p className="font-account">
                    Don't have a Tokopedia account?
                <a href="/registration" className="font-register">Register</a>
                </p>
            </div >
        );
    }
}
