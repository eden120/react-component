import React, { Component } from 'react';
import SearchInput, { createFilter } from 'react-search-input';
import Pagination from "react-js-pagination";
import data from '../../../mocks/data.json';



const KEYS_TO_FILTERS = ['customer_ID', 'sales'];

class CustomersMainContent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: data,
      paginatedData: [],
      itemsPerPage: 12,
      searchTerm: '',
      activePage: 1
    }
  }

  componentDidMount() {
    const { data, itemsPerPage, activePage } = this.state;
    const copyOfData = Object.assign([], data);
    //console.log(copyOfData);
  
    const tempData = copyOfData.slice(itemsPerPage * (activePage - 1), activePage * itemsPerPage);
  
    this.setState({ paginatedData: tempData })
  }

  searchUpdated (term) {
    this.setState({ searchTerm: term })
  }
  
  handlePageChange(pageNumber) {
    const { data, itemsPerPage, activePage } = this.state;
    const copyOfData = Object.assign([], data);
    
    this.setState({activePage: pageNumber}, () => {
      
      const tempData = copyOfData.slice(itemsPerPage * (activePage - 1), activePage * itemsPerPage);
    
      this.setState({ data: tempData })
    });
  }

  render() {
    // console.log(this.state.activePage)
    // console.log(this.state.data)
    const filteredData = this.state.paginatedData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    
    const { data, itemsPerPage } = this.state;
    
    return (
      <div className="CUSTOMERS_MAIN_CONTAINER">
        
        <div className="customers_top_buttons">
          <button id="add_new_customer">Add New Customer</button>
          <button id="create_segment">Create Segment</button>
        </div>
        
        <div className="customers_search_container">
          <SearchInput className="customers_search_input" onChange={this.searchUpdated.bind(this)} />
          <span><i className="fas fa-search"></i></span>
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
            {filteredData.map(data => {
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
            activePage={this.state.activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={data.length}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange.bind(this)}
          />
        </div>
        
        
      </div>
    );
  }
}

export default CustomersMainContent