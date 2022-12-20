import React from "react";
import './styles.css'

const Progress = ({ scroll }) => {
    return (
        <div className="progress" style={{
            background: `linear-gradient(to right, green ${scroll}%, #000 ${scroll}%)`
        }}/>
    )
}
export default Progress;