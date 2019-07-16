import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from './Home';
import Booking from './Booking';
import Order from './Order';
import Payments from './Payments';
import User from './User'; 
import Settings from './Settings';

export default class Main extends Component{
    render(){
        return(
            <HashRouter>
                <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                        <NavLink className="navbar-brand brand-logo" exact to="/">
                            <img src="images/logo.svg" alt="logo"/>
                        </NavLink>
                        <NavLink className="navbar-brand brand-logo-mini" exact to="/">
                            <img src="images/logo-mini.svg" alt="logo"/>
                        </NavLink>
                    </div>
                    <div className="navbar-menu-wrapper d-flex align-items-stretch">
                        <div className="search-field d-none d-md-block">
                        <form className="d-flex align-items-center h-100" action="#">
                            <div className="input-group">
                                <div className="input-group-prepend bg-transparent">
                                    <i className="input-group-text border-0 mdi mdi-magnify"></i>                
                                </div>
                                <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects"/>
                            </div>
                        </form>
                    </div>

                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item nav-profile dropdown">
                            <NavLink className="nav-link dropdown-toggle" id="profileDropdown" to="" data-toggle="dropdown" aria-expanded="false">
                                <div className="nav-profile-img">
                                    <img src="images/faces/face1.jpg" alt="image"/>
                                    <span className="availability-status online"></span>             
                                </div>
                                <div className="nav-profile-text">
                                    <p className="mb-1 text-black">David Greymaax</p>
                                </div>
                            </NavLink>
                            <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                            <NavLink className="dropdown-item" to="">
                                <i className="mdi mdi-cached mr-2 text-success"></i>
                                Activity Log
                            </NavLink>
                            <div className="dropdown-divider"></div>
                            <NavLink className="dropdown-item" to="">
                                <i className="mdi mdi-logout mr-2 text-primary"></i>
                                Signout
                            </NavLink>
                            </div>
                        </li>
                        <li className="nav-item d-none d-lg-block full-screen-link">
                            <NavLink className="nav-link" to="">
                                <i className="mdi mdi-fullscreen" id="fullscreen-button"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link count-indicator dropdown-toggle" id="messageDropdown" to="" data-toggle="dropdown" aria-expanded="false">
                                <i className="mdi mdi-email-outline"></i>
                                <span className="count-symbol bg-warning"></span>
                            </NavLink>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                        <h6 className="p-3 mb-0">Messages</h6>
                        <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item preview-item" to="">
                            <div className="preview-thumbnail">
                                <img src="images/faces/face4.jpg" alt="image" className="profile-pic"/>
                            </div>
                            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                            <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                            <p className="text-gray mb-0">
                                1 Minutes ago
                            </p>
                            </div>
                        </NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item preview-item" to="">
                            <div className="preview-thumbnail">
                                <img src="images/faces/face2.jpg" alt="image" className="profile-pic"/>
                            </div>
                            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                            <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
                            <p className="text-gray mb-0">
                                15 Minutes ago
                            </p>
                            </div>
                        </NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item preview-item" to="">
                            <div className="preview-thumbnail">
                                <img src="images/faces/face3.jpg" alt="image" className="profile-pic"/>
                            </div>
                            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                            <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
                            <p className="text-gray mb-0">
                                18 Minutes ago
                            </p>
                            </div>
                        </NavLink>
                        <div className="dropdown-divider"></div>
                        <h6 className="p-3 mb-0 text-center">4 new messages</h6>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" to="" data-toggle="dropdown">
                            <i className="mdi mdi-bell-outline"></i>
                            <span className="count-symbol bg-danger"></span>
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                        <h6 className="p-3 mb-0">Notifications</h6>
                        <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item preview-item" to="">
                            <div className="preview-thumbnail">
                            <div className="preview-icon bg-success">
                                <i className="mdi mdi-calendar"></i>
                            </div>
                            </div>
                            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                            <h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
                            <p className="text-gray ellipsis mb-0">
                                Just a reminder that you have an event today
                            </p>
                            </div>
                        </NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item preview-item" to="">
                            <div className="preview-thumbnail">
                            <div className="preview-icon bg-warning">
                                <i className="mdi mdi-settings"></i>
                            </div>
                            </div>
                            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                            <h6 className="preview-subject font-weight-normal mb-1">Settings</h6>
                            <p className="text-gray ellipsis mb-0">
                                Update dashboard
                            </p>
                            </div>
                        </NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item preview-item" to="">
                            <div className="preview-thumbnail">
                            <div className="preview-icon bg-info">
                                <i className="mdi mdi-link-variant"></i>
                            </div>
                            </div>
                            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                            <h6 className="preview-subject font-weight-normal mb-1">Launch Admin</h6>
                            <p className="text-gray ellipsis mb-0">
                                New admin wow!
                            </p>
                            </div>
                        </NavLink>
                        <div className="dropdown-divider"></div>
                        <h6 className="p-3 mb-0 text-center">See all notifications</h6>
                        </div>
                    </li>
                    <li className="nav-item nav-logout d-none d-lg-block">
                        <a className="nav-link" href="#">
                        <i className="mdi mdi-power"></i>
                        </a>
                    </li>
                    <li className="nav-item nav-settings d-none d-lg-block">
                        <a className="nav-link" href="#">
                        <i className="mdi mdi-format-line-spacing"></i>
                        </a>
                    </li>
                    </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
             
                    
        <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/booking" component={Booking}/>
            <Route path="/order" component={Order}/>
            <Route path="/payments" component={Payments}/>
            <Route path="/user" component={User}/>
            <Route path="/settings" component={Settings}/>
        </div>
               
            </HashRouter>
        );
    }
}