import React from "react";
import OnComponent from "./OnComponent.jsx";
import OffComponent from "./OffComponent.jsx";


export default function FanComponent(props){
    const {isOn} = props;
    return(
        <>
            {isOn ? < OnComponent /> : <OffComponent/>}
        </>
    )
}
