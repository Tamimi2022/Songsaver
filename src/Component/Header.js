import React from "react";

function Header(props) {
    return(
        <div>
            <table className="theList">
            <thead>
                <tr className="subjects">
                    <td>Song</td>
                    <td>Artist</td>
                    <td>Genre</td>
                    <td>Rating</td>
                </tr>
            </thead>
            <tbody>
                {props.allSongs}
            </tbody>
        </table>
    </div>
    )
}
export default Header;