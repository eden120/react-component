import React, { Component } from 'react';

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import Select from 'react-select';
import 'react-select/dist/react-select.css';




class CustomersFilters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      database_cource: "Other Database",
      search_locations: "",
      gender: "All",
      
      age_range_value: {
        min: 18,
        max: 100
      },
      income_range_value: {
        min: 0,
        max: 250
      },
      start_date: "",
      end_date: "",
      sales_range_value: {
        min: 0,
        max: 5000
      },
      transactions_range_value: {
        min: 0,
        max: 100
      }
    };
    
  }
  
  
  handleChangeSource = (database_cource) => {
    this.setState({ database_cource });
  }
  
  handleChangeGender = (gender) => {
    this.setState({ gender });
  }
  
  
  handleLocationsSearch(e) {
    this.setState({ search_locations: e.target.value });
  }
  
  
  handleStartDate(e) {
    this.setState({ start_date: e.target.value });
  }
  
  handleEndDate(e) {
    this.setState({ end_date: e.target.value });
  }
  


  render() {
    const { 
      database_cource, 
      search_locations, 
      gender, 
      sales_range_value, 
      transactions_range_value, 
      age_range_value, 
      income_range_value,
      start_date, 
      end_date 
    } = this.state;
    
    
    return (
      <div className="CUSTOMERS_FILTERS_CONTAINER">
        
        <div className="CUSTOMERS_FILTERS_WRAPPER">
          
          <span className="customers_header">Customers</span>
          
          
          
          
          <div className="filter_header_container">
            <span>Profile Source</span>
            <span><i className="far fa-question-circle"></i></span>
          </div>
          
          <div className="filter_icon_and_text_and_gray_text">
            <span><i className="far fa-question-circle"></i></span>
            <span>All</span>
            <span>(23M+)</span>
          </div>
          
          <div className="filter_icon_and_text_and_gray_text">
            <span><i className="far fa-question-circle"></i></span>
            <span>All Opted in</span>
            <span>(2.7M)</span>
          </div>
          
          <div className="filter_select">
            <span><i className="far fa-question-circle"></i></span>
            
            <Select
              value={database_cource}
              onChange={this.handleChangeSource}
              options={[
                { value: 'Other Databases', label: 'Other Databases' },
                { value: 'Other Databases 2', label: 'Other Databases 2' },
                { value: 'Other Databases 3', label: 'Other Databases 3' },
                { value: 'Other Databases 4', label: 'Other Databases 4' }
              ]}
            />
          </div>
          
          <div className="filter_horizontal_stripe"></div>
          
          
          
          
          
          <div className="filter_header_container">
            <span>Locations</span>
            <span><i className="far fa-question-circle"></i></span>
          </div>
          
          <div className="search_input_container">
            <input type="text" value={search_locations} placeholder="Search" onChange={this.handleLocationsSearch.bind(this)} />
            <span><i className="fas fa-search"></i></span>
          </div>
          
          <div className="filter_icon_and_text">
            <span><i className="far fa-question-circle"></i></span>
            <span>Chicago DMA</span>
          </div>
          
          <div className="filter_icon_and_text">
            <span><i className="far fa-question-circle"></i></span>
            <span>Los Angeles DMA</span>
          </div>
          
          <div className="filter_horizontal_stripe"></div>
          
          
          
          
          
          <div className="filter_header_container">
            <span>Attributes</span>
            <span><i className="far fa-question-circle"></i></span>
          </div>
          
          <div className="filter_sub_header_container">
            Dayparts
          </div>
          
          <div className="filter_icon_and_text_and_gray_text">
            <span><i className="far fa-question-circle"></i></span>
            <span>Breakfest</span>
            <span>(open to 11am)</span>
          </div>
          
          <div className="filter_icon_and_text_and_gray_text">
            <span><i className="far fa-question-circle"></i></span>
            <span>Lunch</span>
            <span>(11am to 2pm)</span>
          </div>
          
          <div className="filter_icon_and_text_and_gray_text">
            <span><i className="far fa-question-circle"></i></span>
            <span>Dinner</span>
            <span>(5pm to close)</span>
          </div>
          
          <div className="filter_icon_and_text_and_gray_text">
            <span><i className="far fa-question-circle"></i></span>
            <span>Afternoon</span>
            <span>(2pm to 5am)</span>
          </div>
          
          <div className="filter_sub_header_container">
            Channel
          </div>
          
          <div className="filter_icon_and_text">
            <span><i className="far fa-question-circle"></i></span>
            <span>Online Ordering</span>
          </div>
          
          <div className="filter_icon_and_text">
            <span><i className="far fa-question-circle"></i></span>
            <span>Order Ahead</span>
          </div>
          
          <div className="filter_icon_and_text">
            <span><i className="far fa-question-circle"></i></span>
            <span>Delivery</span>
          </div>
          
          <div className="filter_horizontal_stripe"></div>
          
          
          
          
          
          <div className="filter_header_container">
            <span>Demographic</span>
            <span><i className="far fa-question-circle"></i></span>
          </div>
          
          <div className="filter_sub_header_container">
            Age
          </div>
          
          <div className="input_range_container">
            <InputRange
              minValue={18}
              maxValue={100}
              value={age_range_value}
              onChange={age_range_value => this.setState({ age_range_value })}
            />
          </div>
          
          <div className="filter_sub_header_container">
            Income
          </div>
          
          <div className="input_range_container input_range_container_income">
            <InputRange
              minValue={0}
              maxValue={250}
              value={income_range_value}
              onChange={income_range_value => this.setState({ income_range_value })}
            />
          </div>
          
          <div className="filter_sub_header_container">
            Gender
          </div>
          
          <div className="filter_select">
            <Select
              value={gender}
              onChange={this.handleChangeGender}
              options={[
                { value: 'All', label: 'All' },
                { value: 'Female', label: 'Female' },
                { value: 'Male', label: 'Male' }
              ]}
            />
          </div>
          
          
          <div className="filter_horizontal_stripe"></div>
          
          
          
          
          
          <div className="filter_header_container">
            <span>Purchases</span>
            <span><i class="far fa-question-circle"></i></span>
          </div>
          
          <div className="start_end_container">
            
            <div className="single_date_container">
              <div>Start</div>
              <div>
                <input type="date" value={start_date} onChange={this.handleStartDate.bind(this)} />
              </div>
            </div>
            
            <div className="single_date_container">
              <div>End</div>
              <div>
                <input type="date" value={end_date} onChange={this.handleEndDate.bind(this)} />
              </div>
            </div>
            
          </div>
          
          <div className="filter_sub_header_container">
            Activeness Level
          </div>
          
          <div className="filter_icon_and_text">
            <span><i className="far fa-question-circle"></i></span>
            <span>Heavy</span>
          </div>
          
          <div className="filter_icon_and_text">
            <span><i className="far fa-question-circle"></i></span>
            <span>Medium</span>
          </div>
          
          <div className="filter_icon_and_text">
            <span><i className="far fa-question-circle"></i></span>
            <span>Light</span>
          </div>
          
          <div className="filter_icon_and_text">
            <span><i className="far fa-question-circle"></i></span>
            <span>New</span>
          </div>
          
          <div className="filter_sub_header_container">
            Loyalty Tiers
          </div>
          
          <div className="filter_icon_and_text">
            <span><i className="far fa-question-circle"></i></span>
            <span>Platinum</span>
          </div>
          
          <div className="filter_icon_and_text">
            <span><i className="far fa-question-circle"></i></span>
            <span>Gold</span>
          </div>
          
          <div className="filter_icon_and_text">
            <span><i className="far fa-question-circle"></i></span>
            <span>Silver</span>
          </div>
          
          <div className="filter_sub_header_container">
            Sales
          </div>
          
          <div className="input_range_container input_range_container_sales">
            <InputRange
              minValue={0}
              maxValue={5000}
              value={sales_range_value}
              onChange={sales_range_value => this.setState({ sales_range_value })}
            />
          </div>
          
          <div className="filter_sub_header_container">
            Transactions
          </div>
          
          <div className="input_range_container">
            <InputRange
              minValue={0}
              maxValue={100}
              value={transactions_range_value}
              onChange={transactions_range_value => this.setState({ transactions_range_value })}
            />
          </div>
          
          
          
          <div className="filter_icon_and_text">
            <span><i className="far fa-question-circle"></i></span>
            <span>Used coupon</span>
          </div>
          
          
          
        </div>
        
      </div>
    );
  }
}

export default CustomersFilters