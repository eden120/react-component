import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router-dom'
import SideNavBar from '../SideNavBar'
import Customers from '../Customers'
import Notifications from '../Notifications'
import Targets from '../Targets'
import Ideas from '../Ideas'
import Assets from '../Assets'
import User from '../User'


const Home = props => (
  <div className="MAIN_CONTAINER_WRAPPER">
    <SideNavBar {...props}/>
    <main id="MAIN">
      <Switch>
        <Route path={`${props.match.path}/customers`} exact component={Customers} />
        <Route path={`${props.match.path}/notifications`} exact component={Notifications} />
        <Route path={`${props.match.path}/targets`} exact component={Targets} />
        <Route path={`${props.match.path}/ideas`} exact component={Ideas} />
        <Route path={`${props.match.path}/assets`} exact component={Assets} />
        <Route path={`${props.match.path}/user`} exact component={User} />
        <Redirect to={`${props.match.url}/customers`} />
      </Switch>
    </main>
  </div>
)

export default Home