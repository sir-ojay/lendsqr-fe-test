import * as React from "react";
import "./formorg.scss";

const FormOrg = () => {
  return (
    <div className="dropdown-menu">
      <form className="form--container px-4 py-3">
        <div className="form-group">
          <label for="FormEmail">Organization</label>
          <select name="" id="">
            <option value="select">Select</option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div className="form-group">
          <label for="Formusername">Username</label>
          <input
            type="text"
            className="form-control"
            id="formuser"
            placeholder="user"
          />
        </div>
        <div className="form-group">
          <label for="FormEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="Email1"
            placeholder="email"
          />
        </div>
        <div className="form-group">
          <div>
            <label for="formDate">Date</label>
          </div>

          <input
            type="date"
        className="form-control"
            id="formDate"
            placeholder="date"
          />
        </div>
        <div className="form-group">
          <label for="formPhone">Phone number</label>
          <input
            type="tel"
            className="form-control"
            id="formPhone"
            placeholder="phone number"
          />
        </div>
        <div className="form-group">
          <label for="formStatus">Status</label>
          <select name="" id="">
            <option value="select">Select</option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>

        <button type="submit" className="btn reset-btn">
          Reset
        </button>
        <button type="submit" className="btn filter-btn">
          Filter
        </button>
      </form>
    </div>
  );
};

export default FormOrg;
