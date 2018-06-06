import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import * as ActionCreators from '../../../actions/filters'

import { cities } from '../../../mocks/cities.js';
import { reduced_cities } from '../../../mocks/reduced_cities.js';





class CustomersFilters extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      profile_source: {
        all: false,
        allOptedIn: false,
        otherDatabases: false
      },
      database_cource: "Other Database",
      location: null,
      dayparts: {
        breakfest: false,
        lunch: false,
        dinner: false,
        afternoon: false
      },
      channel: {
        onlineOrdering: false,
        orderAhead: false,
        delivery: false
      },
      age_range_value: {
        min: 18,
        max: 100
      },
      income_range_value: {
        min: 0,
        max: 250
      },
      gender: "All",
      activenessLevel: {
        heavy: false,
        medium: false,
        light: false,
        new: false
      },
      loyaltyTiers: {
        platinum: false,
        gold: false,
        silver: false
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
  
  
  handleLocationsSearch = (location) => {
    this.props.dispatch(ActionCreators.addLocationFilter(location));
  }
  
  removeLocation(index, e) {
    this.props.dispatch(ActionCreators.removeLocationFilter(index));
  }
  
  
  handleStartDate(e) {
    this.setState({ start_date: e.target.value });
  }
  
  handleEndDate(e) {
    this.setState({ end_date: e.target.value });
  }
  
  
  handleCheckBoxProfileSource(e) {
    const { profile_source } = this.state;
    const updated = { ...profile_source, [e.target.name]: e.target.checked };
    this.setState({ profile_source: updated });
  }
  
  handleCheckBoxDayparts(e) {
    const { dayparts } = this.state;
    const updated = { ...dayparts, [e.target.name]: e.target.checked };
    this.setState({ dayparts: updated });
  }
  
  handleCheckBoxChanel(e) {
    const { channel } = this.state;
    const updated = { ...channel, [e.target.name]: e.target.checked };
    this.setState({ channel: updated });
  }
  
  handleCheckBoxaAtivenessLevel(e) {
    const { activenessLevel } = this.state;
    const updated = { ...activenessLevel, [e.target.name]: e.target.checked };
    this.setState({ activenessLevel: updated });
  }
  
  handleCheckBoxLoyaltyTiers(e) {
    const { loyaltyTiers } = this.state;
    const updated = { ...loyaltyTiers, [e.target.name]: e.target.checked };
    this.setState({ loyaltyTiers: updated });
  }
  
  
  render() {
    const { 
      profile_source,
      database_cource,
      location,
      locations_array,
      dayparts,
      channel,
      age_range_value,
      income_range_value,
      gender,
      activenessLevel,
      loyaltyTiers,
      start_date,
      end_date,
      sales_range_value,
      transactions_range_value
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
            <input type="checkbox" name="all" className="filter_checkbox" checked={profile_source.all} onChange={this.handleCheckBoxProfileSource.bind(this)} />
            <span>All</span>
            <span>(23M+)</span>
          </div>
          
          <div className="filter_icon_and_text_and_gray_text">
            <input type="checkbox" name="allOptedIn" className="filter_checkbox" checked={profile_source.allOptedIn} onChange={this.handleCheckBoxProfileSource.bind(this)} />
            <span>All Opted in</span>
            <span>(2.7M)</span>
          </div>
          
          <div className="filter_select">
            <input type="checkbox" name="otherDatabases" className="filter_checkbox" value={profile_source.otherDatabases} onChange={this.handleCheckBoxProfileSource.bind(this)} />
            
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
          
          <div className="locations_search_input_container">
            <Select
              value={location}
              valueKey="city" 
              labelKey="city"
              placeholder="Search"
              onChange={this.handleLocationsSearch.bind(this)}
              options={reduced_cities}
            />
            <span><i className="fas fa-search"></i></span>
          </div>
          
          
          
          {
            this.props.locations_filter.map((item, index) => (
              <div key={item.city} className="filter_locations_icon_and_text">
                <div>
                  <input type="checkbox" className="filter_checkbox" checked={true} readOnly />
                  <span>{item.city}</span>
                </div>
                <div onClick={this.removeLocation.bind(this, index)}>&times;</div>
              </div>
            ))
          }
          
          <div className="filter_horizontal_stripe"></div>
          
          
          
          
          
          <div className="filter_header_container">
            <span>Attributes</span>
            <span><i className="far fa-question-circle"></i></span>
          </div>
          
          <div className="filter_sub_header_container">
            Dayparts
          </div>
          
          <div className="filter_icon_and_text_and_gray_text">
            <input type="checkbox" name="breakfest" className="filter_checkbox" checked={dayparts.breakfest} onChange={this.handleCheckBoxDayparts.bind(this)} />
            <span>Breakfest</span>
            <span>(open to 11am)</span>
          </div>
          
          <div className="filter_icon_and_text_and_gray_text">
            <input type="checkbox" name="lunch" className="filter_checkbox" checked={dayparts.lunch} onChange={this.handleCheckBoxDayparts.bind(this)} />
            <span>Lunch</span>
            <span>(11am to 2pm)</span>
          </div>
          
          <div className="filter_icon_and_text_and_gray_text">
            <input type="checkbox" name="dinner" className="filter_checkbox" checked={dayparts.dinner} onChange={this.handleCheckBoxDayparts.bind(this)} />
            <span>Dinner</span>
            <span>(5pm to close)</span>
          </div>
          
          <div className="filter_icon_and_text_and_gray_text">
            <input type="checkbox" name="afternoon" className="filter_checkbox" checked={dayparts.afternoon} onChange={this.handleCheckBoxDayparts.bind(this)} />
            <span>Afternoon</span>
            <span>(2pm to 5am)</span>
          </div>
          
          <div className="filter_sub_header_container">
            Channel
          </div>
          
          <div className="filter_icon_and_text">
            <input type="checkbox" name="onlineOrdering" className="filter_checkbox" checked={channel.onlineOrdering} onChange={this.handleCheckBoxChanel.bind(this)} />
            <span>Online Ordering</span>
          </div>
          
          <div className="filter_icon_and_text">
            <input type="checkbox" name="orderAhead" className="filter_checkbox" checked={channel.orderAhead} onChange={this.handleCheckBoxChanel.bind(this)} />
            <span>Order Ahead</span>
          </div>
          
          <div className="filter_icon_and_text">
            <input type="checkbox" name="delivery" className="filter_checkbox" checked={channel.delivery} onChange={this.handleCheckBoxChanel.bind(this)} />
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
            <span><i className="far fa-question-circle"></i></span>
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
            <input type="checkbox" name="heavy" className="filter_checkbox" checked={activenessLevel.heavy} onChange={this.handleCheckBoxaAtivenessLevel.bind(this)} />
            <span>Heavy</span>
          </div>
          
          <div className="filter_icon_and_text">
            <input type="checkbox" name="medium" className="filter_checkbox" checked={activenessLevel.medium} onChange={this.handleCheckBoxaAtivenessLevel.bind(this)} />
            <span>Medium</span>
          </div>
          
          <div className="filter_icon_and_text">
            <input type="checkbox" name="light" className="filter_checkbox" checked={activenessLevel.light} onChange={this.handleCheckBoxaAtivenessLevel.bind(this)} />
            <span>Light</span>
          </div>
          
          <div className="filter_icon_and_text">
            <input type="checkbox" name="new" className="filter_checkbox" checked={activenessLevel.new} onChange={this.handleCheckBoxaAtivenessLevel.bind(this)} />
            <span>New</span>
          </div>
          
          <div className="filter_sub_header_container">
            Loyalty Tiers
          </div>
          
          <div className="filter_icon_and_text">
            <input type="checkbox" name="platinum" className="filter_checkbox" checked={loyaltyTiers.platinum} onChange={this.handleCheckBoxLoyaltyTiers.bind(this)} />
            <span>Platinum</span>
          </div>
          
          <div className="filter_icon_and_text">
            <input type="checkbox" name="gold" className="filter_checkbox" checked={loyaltyTiers.gold} onChange={this.handleCheckBoxLoyaltyTiers.bind(this)} />
            <span>Gold</span>
          </div>
          
          <div className="filter_icon_and_text">
            <input type="checkbox" name="silver" className="filter_checkbox" checked={loyaltyTiers.silver} onChange={this.handleCheckBoxLoyaltyTiers.bind(this)} />
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

const mapStateToProps = state => {
  return {
    locations_filter: state.locations_filter
  };
}

export default connect(mapStateToProps)(CustomersFilters);
