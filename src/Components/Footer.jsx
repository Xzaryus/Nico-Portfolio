
function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear() } My Website. All rights reserved.</p>
            <br></br>
            <p>Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a>
            </p>
        </footer>
    );
}

export default Footer