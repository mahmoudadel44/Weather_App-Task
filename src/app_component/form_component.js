import React from "react";
 import {Link} from 'react-router-dom'
import "./form.style.css";
const Form = (props) => {

  return (
    <div className="container">
      <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
        <div className="row city-weather">
          <div className="col-md-10 city">
            <h3 className="main-color">Just type the city name</h3>
            <p className="spell">you must spelling correctly</p>
            <div className="input-find">
              <input
                type="text"
                className="form-control"
                placeholder="city"
                name="city"
                autoComplete="off"
              />
              <button className="main-color">Find</button>
            </div>
          </div>
          <div className="col-md-2 weather main-color ">
           <Link to="#"> <div className="vertical-text home-text">Home </div></Link>
            <Link to="#"><div className="vertical-text weather-text"> Weather</div></Link>

          </div>
        </div>
      </form>
    </div>
  );
};

const error = (props) => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City...!
    </div>
  );
};

export default Form;
