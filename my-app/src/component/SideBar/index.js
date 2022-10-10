import "./index.css";
import { useEffect, useState } from "react";
import bootstrap from 'bootstrap'
const SideBar = (props) => {

  return (
    <div className="sidebar-container">
      <h1>Menu</h1>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Level</label>
        <select class="form-select" aria-label="Default select example">
            <option selected>Open this select Level</option>
            <option value="1">EASY</option>
            <option value="2">NORMAL</option>
            <option value="3">HARD</option>
        </select>
      </div>

    </div>
  );
};
export default SideBar;
