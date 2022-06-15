import React from "react"

function Button(props) {
    return(
        <div className="buttonswrapper">
            
        <button className='songbutton' id="deletebutton" type="submit" onClick={() => props.songsDelete()}>Delete All Songs</button>
        
    </div>
    )
}
export default Button;