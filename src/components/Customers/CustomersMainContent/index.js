import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import data from '../../../mocks/data.json';





class CustomersMainContent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: data,
      renderedData: null,
      searchedTempData: null,
      uniqueLocations: null,
      itemsPerPage: 12,
      activePage: 1,
      value: null
    }
  }

  
  componentWillMount() {
    const { data, itemsPerPage } = this.state;
    const copyOfData = Object.assign([], data);
  
    // searching for unique locations
    const uniqueLocations = [...new Set(data.map(obj => obj.location))];
    
    // converting array of strings to array of objects
    const uniqueLocationObjects = uniqueLocations.map(item => {
      return { label: item }
    });
    
    this.setState({ renderedData: copyOfData, uniqueLocations: uniqueLocationObjects });
  }
  
  
  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber })
  }
  
  
  handleSearchChange = (value) => {
    this.setState({ value: value }, () => {
      
      // saving selector to constant to optimize performance
      const multiValueSelector = document.querySelector(".customers_search_container .Select-multi-value-wrapper");
      
      if(value.length) {
        let searchedLocations = [];
        value.map((el, index) => {
          const tempLocations = this.state.data.filter(item => {
            return item.location === value[index].label
          });
          searchedLocations = searchedLocations.concat(tempLocations);
        });
        
        if(multiValueSelector.style.display !== 'block') {
          multiValueSelector.style.cssText = `display: block !important; width: 290px; position: absolute; top: 25px; left: -1px; marginTop: 3px;`;
        }
        this.setState({ searchedTempData: searchedLocations })
      } else {
        multiValueSelector.style.cssText = '';
        this.setState({ renderedData: this.state.data })
      }
    })
  }
  
  
  applySearch(e) {
    this.setState({ renderedData: this.state.searchedTempData })
  }
  


  render() {
    const { data, renderedData, uniqueLocations, itemsPerPage, activePage, value } = this.state;
    const pageRangeDisplayed = Math.ceil(renderedData.length / itemsPerPage);
    
    return (
      <div className="CUSTOMERS_MAIN_CONTAINER">
        
        <div className="customers_top_buttons">
          <button id="add_new_customer">Add New Customer</button>
          <button id="create_segment">
            <span>Create Segment</span>
            <i className="fas fa-sort-down"></i>
          </button>
        </div>
        
        
        <div className="customers_search_container">
          <Select
            value={value}
            valueKey="label" 
            labelKey="label"
            multi={true}
            onChange={this.handleSearchChange.bind(this)}
            options={uniqueLocations}
          />
          <div className="apply_button_container">
            <button onClick={this.applySearch.bind(this)}>Apply</button>
          </div>
        </div>
        
        
        
        <table id="CUSTOMERS_TABLE" className="bordered">
          
          <thead>
            <tr id="CUSTOMERS_TABLE_HEAD">
              <th>Customer ID</th>
              <th>Activeness</th>
              <th>Sales</th>
              <th>Transactions</th>
              <th>Opted In</th>
              <th>Location</th>
              <th>Customer Since</th>
              <th></th>
            </tr>
          </thead>
          
          <tbody>
            {renderedData.slice(itemsPerPage * (activePage - 1), activePage * itemsPerPage).map(data => {
              return (
                <tr className="CUSTOMERS_TABLE_BODY" key={data.customer_ID}>
                  <td> <span><i className="far fa-question-circle"></i></span> {data.customer_ID}</td>
                  <td>{data.activeness}</td>
                  <td>${data.sales}</td>
                  <td>{data.transactions}</td>
                  <td>
                    <span><i className="far fa-question-circle"></i></span>
                    <span><i className="far fa-question-circle"></i></span>
                  </td>
                  <td>{data.location}</td>
                  <td>{data.customer_since}</td>
                  <td><i className="fas fa-ellipsis-h"></i></td>
                </tr>
              )
            })}
          </tbody>
          
        </table>
        
        
        
        <div className="customers_pagination_container">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={renderedData.length}
            pageRangeDisplayed={pageRangeDisplayed}
            prevPageText={'Prev'}
            nextPageText={'Next'}
            itemClass={'customers_pagination_item_class'}
            activeClass={'customers_pagination_active_class'}
            activeLinkClass={'customers_pagination_active_link_class'}
            itemClassFirst={'customers_pagination_item_class_first'}
            itemClassPrev={'customers_pagination_item_class_prev'}
            itemClassNext={'customers_pagination_item_class_next'}
            itemClassLast={'customers_pagination_item_class_last'}
            linkClass={'customers_pagination_link_class'}
            innerClass={'customers_pagination'}
            onChange={this.handlePageChange.bind(this)}
          />
        </div>
        
      </div>
    );
  }
}


export default CustomersMainContent

