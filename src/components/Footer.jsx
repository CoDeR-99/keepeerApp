import React from "react";

const d = new Date();
let year = d.getFullYear();

function Footer(){
    return (
        <footer>
        <p>Copyright&#169; {year}</p>
        </footer>
    );
}

export default Footer;