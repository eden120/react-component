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
  
  
  
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.toggle === this.state.toggle) {
      return false;
    }
    return true;
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.toggle) {
      byId('MAIN').style.marginLeft = "330px";
      byClassName('SIDE_NAV_CONTENT_CONTAINER')[0].style.width = "270px";
      byClassName('visualize_contant')[0].style.visibility = "visible";
    } else {
      byId('MAIN').style.marginLeft = "60px";
      byClassName('SIDE_NAV_CONTENT_CONTAINER')[0].style.width = "0px";
      byClassName('SIDE_NAV_CONTENT_CONTAINER')[0].style.overflow = "hidden";
      byClassName('visualize_contant')[0].style.visibility = "hidden";
    }
    
    if(nextProps.pathname !== this.state.pathname) {
      this.setState({ pathname: nextProps.pathname });
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
          <div className="visualize_contant">
            <CustomersContainer />
          </div>
        </div>
      );
    } else if(pathname === '/app/notifications') {
      return (
        <div className="SIDE_NAV_CONTENT_CONTAINER">
          <div className="closebtn" onClick={this.closeSideMenu.bind(this)} >&times;</div>
          <div className="visualize_contant">
            <NotificationsContainer />
          </div>
        </div>
      )
    } else if(pathname === '/app/targets') {
      return (
        <div className="SIDE_NAV_CONTENT_CONTAINER">
          <div className="closebtn" onClick={this.closeSideMenu.bind(this)} >&times;</div>
          <div className="visualize_contant">
            <TargetsContainer />
          </div>
        </div>
      )
    } else if(pathname === '/app/ideas') {
      return (
        <div className="SIDE_NAV_CONTENT_CONTAINER">
          <div className="closebtn" onClick={this.closeSideMenu.bind(this)} >&times;</div>
          <div className="visualize_contant">
            <IdeasContainer />
          </div>
        </div>
      )
    } else if(pathname === '/app/assets') {
      return (
        <div className="SIDE_NAV_CONTENT_CONTAINER">
          <div className="closebtn" onClick={this.closeSideMenu.bind(this)} >&times;</div>
          <div className="visualize_contant">
            <AssetsContainer />
          </div>
        </div>
      )
    } else if(pathname === '/app/user') {
      return (
        <div className="SIDE_NAV_CONTENT_CONTAINER">
          <div className="closebtn" onClick={this.closeSideMenu.bind(this)} >&times;</div>
          <div className="visualize_contant" style={{display: 'flex', height: '100%'}}>
            <UserContainer />
          </div>
        </div>
      )
    } else {
      return (
        <div className="SIDE_NAV_CONTENT_CONTAINER">
          <div className="closebtn" onClick={this.closeSideMenu.bind(this)} >&times;</div>
          ELSE
        </div>
      )
    }
    
  }
}

export default SideNavContent