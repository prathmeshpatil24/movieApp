import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaHome, FaCompass } from 'react-icons/fa';
//import './NavBar.css';

const NavBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const navigateToSearch = useNavigate();

    const handleSearchInput = (e) => {
        e.preventDefault();
        console.log("you are searching:- ", searchInput);
        if(searchInput){
            // Redirect to the search results page with the search term as a query parameter
        navigateToSearch(`/search?query=${encodeURIComponent(searchInput)}`);
        }
        setSearchInput("");
    }



    return (
        <nav className="navbar navbar-expand-lg fixed-top text-dark bg-dark bg-transparent" data-bs-theme="dark"  style={{ backgroundColor: 'rgba(5, 5, 5, 0.98)', backdropFilter: 'blur(1px)' }}>
            <div className="container-fluid">
                <NavLink className="navbar-brand text-dark" to="#">Movie</NavLink>
                <button className="navbar-toggler" 
                type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
                aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/">
                                <FaHome className="me-2" />Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/explore"><FaCompass className="me-2" />Explore</NavLink>
                        </li>

                        {/* <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Genres
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/genre/action">Action</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/genre/comedy">Comedy</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/genre/drama">Drama</NavLink></li>
                            </ul>
                        </li> */}

                    </ul>
                    <form className="d-flex bg-transparent" role="search" onSubmit={handleSearchInput}>
                        <input className="form-control bg-transparent
                         me-2"
                            type="search"
                            placeholder="Search"
                            onChange={(e) => setSearchInput(e.target.value)}
                            value={searchInput}
                            aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default NavBar
