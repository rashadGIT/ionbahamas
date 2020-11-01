import React from 'react';
import {Link} from "react-router-dom";
import '../css/membership.css';

const MembershipBox = (props) => {
    return (
         <div key={props.type} style={{display: 'inline-block', padding: '5px'}}>
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
                    <div>
                        <Link 
                        to={{
                            pathname: `/member/${props.type}`,
                            data: [{kite : ""}] // your data array of objects
                          }}
                        // to={`/member/${props.type}`}
                        >
                            ${props.amount} annual dues
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MembershipBox;
