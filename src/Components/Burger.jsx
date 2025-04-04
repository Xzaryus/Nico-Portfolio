import { useEffect, useState } from "react"
function Burger() {
    //*creates a variable called menuOpen and sets it to false, then creates a function called setMenuOpen that updates the value of menuOpen
    const [menuOpen, setMenuOpen] = useState(false);   
    const toggleMenu = (e) =>{
        e.stopPropagation();
        setMenuOpen(!menuOpen)
    };
//* The clickAnywhere function is used to close the menu when the user clicks anywhere on the page except the burger icon
    const clickAnywhere = (e) => {
        if (e.target.id !== "burger-icon")
        setMenuOpen(false)
    };

    //* The useEffect hook is used to add and remove event listeners to the document
    //* useEffect(() => {...}, [menuOpen]); means that the function will run whenever the value of menuOpen changes
    useEffect(() => {
        if (menuOpen) {
        document.addEventListener("click", clickAnywhere);
        } else {
        document.removeEventListener("click", clickAnywhere);
        }
        return () => {
        document.removeEventListener("click", clickAnywhere);
        };
    }, [menuOpen]);
    
    return (
        <>
        <img id="burger-icon" src="src/assets/Burger.svg" alt="Menu" onClick={toggleMenu}/>
        <nav id="burger-menu" className={menuOpen ? "open" : ""}>
            <ul id="burger-menu-list">
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#my-projects">Projects</a></li>
            <li><a href="#contact-form">Contact Me</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Burger