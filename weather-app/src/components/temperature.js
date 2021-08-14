import { useEffect } from "react";

function Temperature ({current}) {
    useEffect()
    return (
        <>
        {current != {}&& 
            <div class = "temperature-container">
            <h3> {current.temp_c +"°"}</h3>
            <h4>{current.condition.text}</h4>
        </div>}
        </>
    );
}
export default Temperature;