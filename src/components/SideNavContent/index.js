import React, { Component } from 'react';
import { byId, byClassName } from '../../services/helpers.js';
import { CustomersContainer } from '../../UI/CustomersContainer';
import { NotificationsContainer } from '../../UI/NotificationsContainer';
import { TargetsContainer } from '../../UI/TargetsContainer';
import { IdeasContainer } from '../../UI/IdeasContainer';
import { UserContainer } from '../../UI/UserContainer';
import { AssetsContainer } from '../../UI/AssetsContainer';



class SideNavContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: this.props.toggle,
      pathname: this.props.pathname
    }
  }
  
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.toggle) {
      byId('MAIN').style.marginLeft = "330px";
      byClassName('SIDE_NAV_CONTENT_CONTAINER')[0].style.width = "270px";
    } else {
      byId('MAIN').style.marginLeft = "60px";
      byClassName('SIDE_NAV_CONTENT_CONTAINER')[0].style.width = "0px";
      byClassName('SIDE_NAV_CONTENT_CONTAINER')[0].style.overflow = "hidden";
    }
    
    if(nextProps.pathname !== this.state.pathname) {
      this.setState({ pathname: nextProps.pathname });
    }
  }
  
  
  componentWillUpdate(nextProps) {
    if (nextProps.toggle) {
      setTimeout(() => {
        byClassName('visualize_content')[0].style.visibility = "visible";
      }, 200)
    } else {
      byClassName('visualize_content')[0].style.visibility = "hidden";
    }
  }
  
  
  closeSideMenu() {
    this.props.closeSideMenu();
  }
  
  
  render() {
    
    const { toggle, pathname } = this.state;
    
    
    
    if (pathname === '/app/customers') {
      return (
        <div className="SIDE_NAV_CONTENT_CONTAINER">
          <div className="closebtn" onClick={this.closeSideMenu.bind(this)} >&times;</div>
          <div className="visualize_content">
            <CustomersContainer />
          </div>
        </div>
      );
    } else if(pathname === '/app/notifications') {
      return (
        <div className="SIDE_NAV_CONTENT_CONTAINER">
          <div className="closebtn" onClick={this.closeSideMenu.bind(this)} >&times;</div>
          <div className="visualize_content">
            <NotificationsContainer />
          </div>
        </div>
      )
    } else if(pathname === '/app/targets') {
      return (
        <div className="SIDE_NAV_CONTENT_CONTAINER">
          <div className="closebtn" onClick={this.closeSideMenu.bind(this)} >&times;</div>
          <div className="visualize_content">
            <TargetsContainer />
          </div>
        </div>
      )
    } else if(pathname === '/app/ideas') {
      return (
        <div className="SIDE_NAV_CONTENT_CONTAINER">
          <div className="closebtn" onClick={this.closeSideMenu.bind(this)} >&times;</div>
          <div className="visualize_content">
            <IdeasContainer />
          </div>
        </div>
      )
    } else if(pathname === '/app/assets') {
      return (
        <div className="SIDE_NAV_CONTENT_CONTAINER">
          <div className="closebtn" onClick={this.closeSideMenu.bind(this)} >&times;</div>
          <div className="visualize_content">
            <AssetsContainer />
          </div>
        </div>
      )
    } else if(pathname === '/app/user') {
      return (
        <div className="SIDE_NAV_CONTENT_CONTAINER">
          <div className="closebtn" onClick={this.closeSideMenu.bind(this)} >&times;</div>
          <div className="visualize_content" style={{display: 'flex', height: '100%'}}>
            <UserContainer />
          </div>
        </div>
      )
    } else {
      return (
        <div className="SIDE_NAV_CONTENT_CONTAINER">
          <div className="closebtn" onClick={this.closeSideMenu.bind(this)} >&times;</div>
          <div className="visualize_content" style={{display: 'flex', height: '100%'}}>
            
          </div>
        </div>
      )
    }
    
  }
}

export default SideNavContent