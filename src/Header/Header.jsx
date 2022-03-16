import React from "react";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Pop Movies</h2>
          <div className="dropdown header-right">           
           <button type="button" className="btn-dots" data-bs-toggle="dropdown">
                <i className="fal fa-ellipsis-v"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
