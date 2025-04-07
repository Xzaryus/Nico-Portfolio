
function Contact() {

    return (
        <div className="hidden" id="contact-form">
    <h2>Contact Me</h2>
    <form id="contact" action="https://formsubmit.co/nicocodes@hotmail.com" method="POST">
        <label for="name">Name:</label> <br/>
        <input type="text" name="name" id="name"/>
        <br/>
        <br/>
        <label for="email">Email:</label> <br/>
        <input type="email" name="email" id="email"/>
        <br/>
        <br/>
        <label for="number">Phone Number:</label> <br/>
        <input type="number" name="number" id="number"/>
        <br/>
        <br/>
        <label for="country">Country:</label> <br/>
        <select name="country" id="country">
            <option value="UK">UK</option>
            <option value="USA">USA</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Spain">Spain</option>
            <option value="Italy">Italy</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
        </select>
        <br/>
        <br/>
        <label for="message">Message:</label> <br/>
        <textarea name="message" id="message"></textarea>
        <br/>
        <br/>
        <input id="submit" type="submit" value="Submit"/>
        <input type="hidden" name="_next" value="https://xzaryus.github.io/Nico-Portfolio/"></input>
    </form>
    </div>
    );
}

export default Contact