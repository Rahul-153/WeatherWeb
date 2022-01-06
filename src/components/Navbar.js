import React from 'react'
import { Link } from "react-router-dom";

function Navbar(props) {
  const handleChange = (event) => {
    props.setSearchVal(event.target.value);
  }
  const valChange = () => {
    props.updateCard(props.searchVal);
  }
  const keyPress = (event) => {
    if (event.key == 'Enter')
      props.updateCard(props.searchVal);
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/daily">Daily</Link>
              </li>
            </ul>
            <div className="d-flex">
              <input className="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search" value={props.searchVal} onChange={handleChange} />
              <button className="btn btn-outline-success" type="submit" onClick={valChange} onKeyPress={keyPress}>Search</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
