import React from "react";

const Sidebar = () => {
    return (
      <div>
        <ul className="nav flex-column">
          <li className="nav-item active">
            <a className="nav-link" href="#">Price Conversion</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Volume Check</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Historical Data</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Block Explorers</a>
          </li>
        </ul>
      </div>
    );
};

export default Sidebar;