import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { byId, byClassName } from '../../services/helpers.js';
import SideNavContent from '../SideNavContent';


export default class SidenavBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      toggle: false
    }
  
    this.closeSideMenu = this.closeSideMenu.bind(this);
  }
  
  componentDidMount() {
    
  }
  
  openSideMenu(e) {
    e.stopPropagation();
    this.setState({ toggle: true });
  }
  
  
  closeSideMenu() {
    this.setState({ toggle: false });
  }
  


  render() {
    const { toggle } = this.state;
    return (
      <aside className="SIDENAV_CONTAINER">
        <div id="mySidenav" className="SIDENAV" onClick={this.openSideMenu.bind(this)} >
          
          <div className="vertical_stripe"></div>
          
          <div className="SIDENAV_TOP_CONTAINER">
            <div className="LOGO_CONTAINER">
              <span>Br</span>
            </div>
            
            <NavLink to={`${this.props.match.url}/customers`} activeStyle={{ color: '#fff', opacity: '1' }}><i className="fas fa-user-friends"></i></NavLink>
            <NavLink to={`${this.props.match.url}/notifications`} activeStyle={{ color: '#fff', opacity: '1' }}><i className="fas fa-bullhorn"></i></NavLink>
            <NavLink to={`${this.props.match.url}/targets`} activeStyle={{ color: '#fff', opacity: '1' }}><i className="far fa-circle"></i></NavLink>
            <NavLink to={`${this.props.match.url}/ideas`} activeStyle={{ color: '#fff', opacity: '1' }}><i className="far fa-bell"></i></NavLink>
            <NavLink to={`${this.props.match.url}/assets`} activeStyle={{ color: '#fff', opacity: '1' }}><i className="far fa-images"></i></NavLink>
          </div>
          
          <div className="SIDENAV_BOTTOM_CONTAINER">
            <NavLink to={`${this.props.match.url}/user`} activeStyle={{ color: '#fff', opacity: '1' }}>
              <div>
                <img src='https://lh5.googleusercontent.com/-4XV1dwVV90A/AAAAAAAAAAI/AAAAAAAAAAc/zFO074MIsSM/s128-c0x00000000-cc-rp-mo/photo.jpg' alt="user" />
              </div>
            </NavLink>
          </div>
          
        </div>
        
        <SideNavContent
          toggle={toggle}
          pathname={this.props.location.pathname}
          closeSideMenu={this.closeSideMenu}
        />
        
      </aside>
    );
  }
}



