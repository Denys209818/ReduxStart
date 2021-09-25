import React, { Component } from 'react'
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export class App extends Component {

  onSubmitMainForm = (e) => 
  {
    e.preventDefault();

    var val = document.getElementById("txtBrand").value;
    var checked = document.getElementById("checkForm").checked;
    if(checked) 
    {
      this.props.AddTruckToUl(val);
    }
    else 
    {
      this.props.AddCarToUl(val);
    }
  }

  render() {
    return (
      <div>
        <div className="container mt-3">

          <form className="mb-4" onSubmit={this.onSubmitMainForm}>
            <div className="form-group">
              <label htmlFor="txtBrand" className="form-label">Ведіть назву моделі</label>
              <input className="form-control" id="txtBrand" placeholder="Назва моделі"/>
            </div>

            <div className="mb-3 form-check mt-1">
              <input type="checkbox" className="form-check-input" id="checkForm" />
              <label className="form-check-label" htmlFor="checkForm">Грузовий автомобіль</label>
            </div>

            <input type="submit" value="Додати у колекцію" className="btn btn-success mt-3"/>
          </form>

          <ul className="list-group">
          <li className="list-group-item active">Легкові автомобілі</li>
            {
              this.props.AppState.map((el, index) => {
                return <li className="list-group-item list-group-item-success" 
                key={index}>{el}</li>
              })
            }
            <li className="list-group-item active">Грузові автомобілі</li>
            {
              this.props.AppStateTrucks.map((el, index) => {
                return <li className="list-group-item list-group-item-danger" 
                key={index}>{el}</li>
              })
            }
          </ul>

          
        </div>
      </div>
    )
  }
}

export default connect(state => 
  ({
    AppState: state.cars,
    AppStateTrucks: state.trucks
  }), 
  dispatch => 
  ({
      AddCarToUl: (data) => 
      {
        dispatch({type: 'ADD_CAR', payload: data});
      },
      AddTruckToUl: (data) => {
        dispatch({type: 'ADD_TRUCK', payload: data});
      }
  }))(App);
