import React, { useState } from 'react'
import './form.css'
import { BsFillBackspaceReverseFill } from "react-icons/bs"
import { Link } from 'react-router-dom'

// const styles = { control: base => ({ ...base, "&:hover": { backgroundColor: "red" } }) };



function Form() {
    const [enteredfName, setenterdfName] = useState("")
    const [enteredlName, setenterdlName] = useState("")
    const firstChangeHandler = (event) => {
        setenterdfName(event.target.value)
        console.log(setenterdfName);
    }
    const lastChangeHandler = (event) => {
        setenterdlName(event.target.value)
        console.log(setenterdlName);
    }
    const SubmitHandler = (event) => {
        event.preventDefault();
        const data = {
            fname: enteredfName,
            lname: enteredlName
        }
        console.log(data);
    }


    return (
        <>
            <div className="box">

                <div className="row">
                    <h2 >Add Employe</h2>
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        <div className="back">
                            <BsFillBackspaceReverseFill />
                        </div>
                    </Link>
                </div>

                <form onSubmit={SubmitHandler}>
                    <div className="row">
                        <div className="part1" style={{ width: "50%" }}>
                            <label>First Name</label>
                            <input type="text" style={{ width: "90%", marginTop: "10px", padding: "5px" }} name="" id="" value={enteredfName} onChange={firstChangeHandler} />
                            <br />
                            <br />
                            <label>UserName</label>
                            <input type="text" style={{ width: "90%", marginTop: "10px", padding: "5px" }} name="" id="" />
                            <br />
                            <br />
                            <label>Employe Id</label>
                            <input type="number" style={{ width: "90%", marginTop: "10px", padding: "5px" }} name="" id="" />
                            <br />
                            <br />
                            <label>Phon</label>
                            <input type="tel" style={{ width: "90%", marginTop: "10px", padding: "5px" }} name="" id="" />
                            <br />
                            <br />
                            <label>Deparment</label>
                            <input type="text" style={{ width: "90%", marginTop: "10px", padding: "5px" }} name="" id="" />
                            {/* <select type="text" style={{ width: "94%", marginTop: "10px", padding: "5px" }} name="" id="" >
                                <option value="0"></option>
                                <option className='op' value="Web-Devlopment">Web Devlopment</option>
                                <option className='op' value="IT-Management">IT Management</option>
                                <option className='op' value="Markating">Markating</option>
                            </select> */}


                            <br />
                            <br />
                        </div>

                        <div className="part2" style={{ width: "50%" }}>
                            <label>Last Name</label>
                            <input type="text" style={{ width: "90%", marginTop: "10px", padding: "5px" }} name="" id="" value={enteredlName} onChange={lastChangeHandler} />
                            <br />
                            <br />
                            <label>Email</label>
                            <input type="email" style={{ width: "90%", marginTop: "10px", padding: "5px" }} name="" id="" />
                            <br />
                            <br />
                            <label>Joining Date</label>
                            <input type="Date" style={{ width: "90%", marginTop: "10px", padding: "5px" }} name="" id="" />
                            <br />
                            <br />
                            <label>Company</label>
                            <input type="text" style={{ width: "90%", marginTop: "10px", padding: "5px" }} name="" id="" />
                            {/* <select type="text" style={{ width: "94%", marginTop: "10px", padding: "5px" }} name="" id="" >
                                <option value="0"></option>
                                <option className='op' value="Web-Devlopment">Globel Technologies</option>
                                <option className='op' value="IT-Management">Delta Infotech</option>
                                <option className='op' value="Markating">International Software Inc</option>
                            </select> */}
                            <br />
                            <br />
                            <label>Desination</label>
                            <input type="text" style={{ width: "90%", marginTop: "10px", padding: "5px" }} name="" id="" />
                            {/* <select type="text" style={{ width: "94%", marginTop: "10px", padding: "5px" }} name="" id="" >
                                <option value="0"></option>
                                <option className='op' value="Web-Devlopment">Web Designer</option>
                                <option className='op' value="IT-Management">Web Devloper</option>
                                <option className='op' value="Markating">Android Devloper</option>
                            </select> */}
                            <br />
                            <br />
                        </div>
                    </div>

                    <div className="row">
                        <button className='submit' type='submit' >Submit</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Form