import React from "react";

function SongList(props) {
    return(
        
            <tr>
                <td> {props.title} </td>
                <td> {props.artist} </td>
                <td> {props.genre} </td>
                <td> {props.rating} </td>
            </tr>
    
       
    )
}
export default SongList;