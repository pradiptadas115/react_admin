import React, { Component } from "react";

export default class Main extends Component{
    render(){
        return(
            <div>
                <h2>Simple SPA</h2>
                <ul className="header">
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="/booking">Booking</a></li>
                    <li><a href="/order">Order</a></li>
                    <li><a href="/payments">Payments</a></li>
                    <li><a href="/user">User</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
                <div className="content"></div>
            </div>
        );
    }
}