import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput, { createFilter } from 'react-search-input';
import Pagination from "react-js-pagination";
import data from '../../../mocks/data.json';



const KEYS_TO_FILTERS = ['customer_ID', 'sales', 'transactions', 'location', 'customer_since'];

class CustomersMainContent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: data,
      renderedData: null,
      itemsPerPage: 12,
      searchTerm: '',
      activePage: 1
    }
  }


  componentWillMount() {
    const { data, itemsPerPage, activePage } = this.state;
    const copyOfData = Object.assign([], data);
    this.setState({ renderedData: copyOfData });
  }
  
  componentWillReceiveProps(nextProps) {
    
    if(nextProps.locations_filter.length) {
      let searchedLocations = [];
      nextProps.locations_filter.map((el, index) => {
        const tempLocations = this.state.data.filter(item => {
          return item.location === nextProps.locations_filter[index].city
        });
        searchedLocations = searchedLocations.concat(tempLocations);
      });
      this.setState({ renderedData: searchedLocations })
    } else {
      this.setState({ renderedData: this.state.data })
    }
    
  }
  

  searchUpdated (term) {
    this.setState({ searchTerm: term })
  }
  
  
  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber })
  }


  render() {
    const renderedData = this.state.renderedData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    
    const { data, itemsPerPage, activePage } = this.state;
    
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

const mapStateToProps = state => {
  return {
    locations_filter: state.locations_filter
  };
}

export default connect(mapStateToProps)(CustomersMainContent);

