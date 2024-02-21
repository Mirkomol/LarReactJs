import React from "react";
import FanComponent from "./FanComponent.jsx";
import FanCountComponent from "./FanCountComponent.jsx";

export default function ApplieanceComponent () {
    return(
        <>

        <FanComponent isOn = {True} />
        <FanCountComponent totalFan={51} />

        </>
    )
}
