import React from 'react';
import {Link} from "react-router-dom";
import '../css/membership.css';

const MembershipBox = (props) => {
    return (
         <div key={props.type} style={{display: 'inline-block', padding: '15px 20px 0px 20px'}}>
            <div className="card">        
                <img
                    className="imgBox"
                    src={props.img}
                    alt="Avatar"
                />
                <div className="TextContainer">
                    <label>{props.type} Membership</label>
                </div>
                <div className="txtDescription" >
                    <div style={{textAlign: 'left'}}>
                     {props.description}
                    </div>
                    <br />
                    <Link 
                        style={{
                            fontSize : '15px'
                        }}
                        to={{
                            pathname: `/member/${props.type}`
                        }}
                    >
                        ${props.amount} annual dues
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MembershipBox;
