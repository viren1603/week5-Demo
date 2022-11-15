import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

import { AiOutlineAppstore } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsPlusLg } from 'react-icons/bs'
function Navbar() {
    return (
        <>
            <div className="navBar">
                <div className="container">
                    <div className="row">
                        <h2>Employe</h2>
                        <div className="icon1" style={{ display: "flex" }}>
                            <Link to="/gridView" style={{ textDecoration: "none", color: "white" }}>
                                <AiOutlineAppstore />
                            </Link>

                            <Link to="/EmployeListView" style={{ textDecoration: "none", color: "white" }}>
                                <AiOutlineMenu />
                            </Link>

                            <Link to="/form" style={{ textDecoration: "none", color: "white" }}>
                                <div className="addEmploye">

                                    <BsPlusLg />
                                    add Employe
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
