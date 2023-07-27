import React from 'react'
import { Link } from "react-router-dom"

function Navbar (){
  const addActiveClass = (event)=>{
    let element = document.querySelectorAll('.nav-item');
    for(let i of element){
      if(i.classList.contains('active')){
      i.className = "nav-item";
    }
    }
    event.target.parentElement.className += ' active';
  
  }

    return (
      <div>
        <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">NewsMonkey </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                
                <li className="nav-item active">
                  <Link className="nav-link" onClick={addActiveClass} to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={addActiveClass} to="business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={addActiveClass} to="entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={addActiveClass} to="healths">Healths</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={addActiveClass} to="science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={addActiveClass} to="sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={addActiveClass} to="technology">Technology</Link>
                </li>    

              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }

export default Navbar;