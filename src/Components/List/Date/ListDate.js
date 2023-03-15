import React from 'react';
import "./ListDate.css"
import Card from "../../Wrapper-Card";

let Date=(props)=> {
    let val = props.date.toLocaleString().split(",");

    return (
        <Card className = "date">
            <p style={{fontSize:"30px"}}>{val[0]}</p>
            <p>{val[1]}</p>
        </Card>

    )
}

export default Date;

