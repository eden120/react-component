import React, { Component } from 'react';
import CustomersFilters from './CustomersFilters';
import CustomersMainContent from './CustomersMainContent';




class Customers extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div className="MAIN_CONTAINER_WRAPPER">
        <div className="CUSTOMERS_CONTENT_WRAPPER">
          <CustomersFilters />
          <CustomersMainContent />
        </div>
      </div>
    );
  }
}

export default Customers