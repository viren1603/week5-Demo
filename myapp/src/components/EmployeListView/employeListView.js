import React from 'react'
import "./employeListView.css";
import i1 from "../img/9.jpeg";
import i2 from "../img/3.jpeg";
import i3 from "../img/7.jpeg";
import i4 from "../img/8.jpeg";
import i5 from "../img/5.jpeg";
import i6 from "../img/11.jpeg";
import i7 from "../img/2.jpeg";
import styled from "styled-components";
const Listheder = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px 0px 12px 0px;
  justify-content: flex-start;
  align-items: center;

  &:nth-child(even) {
    background-color: white;
  }
  
  &:nth-child(odd) {
    background-color: black;
    color:white
  }
  & div {
    width: 290px;
    margin-left: 20px;
  }
`;
function EmployeListView() {
    return (
        <>
            <div className='container'>
                <Listheder>
                    <div>Name</div>
                    <div>Employee ID</div>
                    <div>Email</div>
                    <div>Mobile</div>
                    <div>Join Date</div>
                    <div>Role</div>
                </Listheder>
                <Listheder>
                    <div className="img">
                        <img src={i1} alt="" />
                        <p className="name"> Barnardo Galaviz</p>
                    </div>
                    <div>FT-0007</div>
                    <div>bernardogalaviz@example.com</div>
                    <div>9876543210</div>
                    <div>1 Jun 2013</div>
                    <div>Web Developer</div>
                </Listheder>
                <Listheder>
                    <div className="img">
                        <img src={i2} alt="" />
                        <p className="name">Jeffery Warden</p>
                    </div>
                    <div>FT-0006</div>
                    <div>jefferywarden@example.com</div>
                    <div>9876543210</div>
                    <div>16 Jun 2013</div>
                    <div>Web Developer</div>
                </Listheder>
                <Listheder>
                    <div className="img">
                        <img src={i3} alt="" />
                        <p className="name">John doe</p>
                    </div>
                    <div>FT-0001</div>
                    <div>johndoe@example.com</div>
                    <div>9876543210</div>
                    <div>1 Jun 2013</div>
                    <div>Web Developer</div>
                </Listheder>
                <Listheder>
                    <div className="img">
                        <img src={i4} alt="" />
                        <p className="name">John Smith</p>
                    </div>
                    <div>FT-0003</div>
                    <div>johnsmith@example.com</div>
                    <div>9876543210</div>
                    <div>1 Apr 2013</div>
                    <div>Web Developer</div>
                </Listheder>
                <Listheder>
                    <div className="img">
                        <img src={i5} alt="" />
                        <p className="name">Mike Litorus</p>
                    </div>
                    <div>FT-0004</div>
                    <div>mikelitorus@example.com</div>
                    <div>9876543210</div>
                    <div>1 Apr 2013</div>
                    <div>Web Developer</div>
                </Listheder>
                <Listheder>
                    <div className="img">
                        <img src={i6} alt="" />
                        <p className="name">Richard Miles</p>
                    </div>
                    <div>FT-0002</div>
                    <div>richardmiles@example.com</div>
                    <div>9876543210</div>
                    <div>18 Mar 2013</div>
                    <div>Web Developer</div>
                </Listheder>
                <Listheder>
                    <div className="img">
                        <img src={i7} alt="" />
                        <p className="name">Wilmar Delunm</p>
                    </div>
                    <div>FT-0005</div>
                    <div>wilmardelunm@example.com</div>
                    <div>9876543210</div>
                    <div>22 May 2013</div>
                    <div>Web Developer</div>
                </Listheder>
            </div>
        </>
    )
}

export default EmployeListView
