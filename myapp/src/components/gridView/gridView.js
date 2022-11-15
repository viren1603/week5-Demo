import React from 'react'
import i1 from '../img/1.jpeg'
import i2 from '../img/2.jpeg'
import i3 from '../img/3.jpeg'
import i4 from '../img/4.jpeg'
import i5 from '../img/5.jpeg'
import i6 from '../img/6.jpeg'
import i7 from '../img/7.jpeg'
import i8 from '../img/8.jpeg'
import i9 from '../img/9.jpeg'
import i10 from '../img/10.jpeg'
import i11 from '../img/11.jpeg'
import i12 from '../img/12.jpeg'
import './gridView.css'

let nameBunch = [
    { name: "John Doe", status: "Web Desiner" },
    { name: "Richer Miles", status: "Web Devloper" },
    { name: "John", status: "Android Devloper" },
    { name: "Mike Litorus", status: "IOS Devloper" },
    { name: "Wilmer Delna", status: "Team Leader" },
    { name: "Jeffer Warden", status: "Web Devloper" },
    { name: "Bernardo Galaviz", status: "Web Devloper" },
    { name: "Lesley Grauer", status: "Team Leader" },
    { name: "Jeffery lalor", status: "Team Leader" },
    { name: "Loren Gatlin", status: "Android Devloper" },
    { name: "Tarah Ahrosphire", status: "Android Devloper" },
    { name: "Catherine Manseau", status: "Android Devloper" },
    { name: "Catherine Manseau", status: "Android Devloper" },
]

function GridView() {
    return (
        <div className="myClssContainer">
            <div className="container">
                <div className="row" style={{ width: "100%" }}>
        
                    <div className="box" style={{ width: "20%", height: "auto", boder: "1px solid black" }}>
                        <div className="images">
                            <img src={i1} className="img" alt="" />
                        </div>
                        <div className="contain">
                            <h3>{nameBunch[0].name}</h3>
                            <h4>{nameBunch[0].status}</h4>
                        </div>
                    </div>

                    <div className="box" style={{ width: "20%", height: "auto", boder: "1px solid black" }}>
                        <div className="images">
                            <img src={i2} className="img" alt="" />
                        </div>
                        <div className="contain">
                            <h3>{nameBunch[1].name}</h3>
                            <h4>{nameBunch[1].status}</h4>
                        </div>
                    </div>

                    <div className="box" style={{ width: "20%", height: "auto", boder: "1px solid black" }}>
                        <div className="images">
                            <img src={i3} className="img" alt="" />
                        </div>
                        <div className="contain">
                            <h3>{nameBunch[2].name}</h3>
                            <h4>{nameBunch[2].status}</h4>
                        </div>
                    </div>

                    <div className="box" style={{ width: "20%", height: "auto", boder: "1px solid black" }}>
                        <div className="images">
                            <img src={i4} className="img" alt="" />
                        </div>
                        <div className="contain">
                            <h3>{nameBunch[3].name}</h3>
                            <h4>{nameBunch[3].status}</h4>
                        </div>
                    </div>

                    <div className="box" style={{ width: "20%", height: "auto", boder: "1px solid black" }}>
                        <div className="images">
                            <img src={i5} className="img" alt="" />
                        </div>
                        <div className="contain">
                            <h3>{nameBunch[4].name}</h3>
                            <h4>{nameBunch[4].status}</h4>
                        </div>
                    </div>

                    <div className="box" style={{ width: "20%", height: "auto", boder: "1px solid black" }}>
                        <div className="images">
                            <img src={i6} className="img" alt="" />
                        </div>
                        <div className="contain">
                            <h3>{nameBunch[5].name}</h3>
                            <h4>{nameBunch[5].status}</h4>
                        </div>
                    </div>

                    <div className="box" style={{ width: "20%", height: "auto", boder: "1px solid black" }}>
                        <div className="images">
                            <img src={i7} className="img" alt="" />
                        </div>
                        <div className="contain">
                            <h3>{nameBunch[6].name}</h3>
                            <h4>{nameBunch[6].status}</h4>
                        </div>
                    </div>

                    <div className="box" style={{ width: "20%", height: "auto", boder: "1px solid black" }}>
                        <div className="images">
                            <img src={i8} className="img" alt="" />
                        </div>
                        <div className="contain">
                            <h3>{nameBunch[7].name}</h3>
                            <h4>{nameBunch[7].status}</h4>
                        </div>
                    </div>

                    <div className="box" style={{ width: "20%", height: "auto", boder: "1px solid black" }}>
                        <div className="images">
                            <img src={i9} className="img" alt="" />
                        </div>
                        <div className="contain">
                            <h3>{nameBunch[8].name}</h3>
                            <h4>{nameBunch[8].status}</h4>
                        </div>
                    </div>

                    <div className="box" style={{ width: "20%", height: "auto", boder: "1px solid black" }}>
                        <div className="images">
                            <img src={i10} className="img" alt="" />
                        </div>
                        <div className="contain">
                            <h3>{nameBunch[9].name}</h3>
                            <h4>{nameBunch[9].status}</h4>
                        </div>
                    </div>

                    <div className="box" style={{ width: "20%", height: "auto", boder: "1px solid black" }}>
                        <div className="images">
                            <img src={i11} className="img" alt="" />
                        </div>
                        <div className="contain">
                            <h3>{nameBunch[10].name}</h3>
                            <h4>{nameBunch[10].status}</h4>
                        </div>
                    </div>

                    <div className="box" style={{ width: "20%", height: "auto", boder: "1px solid black" }}>
                        <div className="images">
                            <img src={i12} className="img" alt="" />
                        </div>
                        <div className="contain">
                            <h3>{nameBunch[12].name}</h3>
                            <h4>{nameBunch[12].status}</h4>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default GridView