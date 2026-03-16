function ContactSection(){

return(

<section id="contact" className="contact">

<div className="main-text">

<span>Ask me a Question</span>

<h2>Contact Me</h2>

</div>

<form>

<input type="text" placeholder="Your Name"/>

<input type="text" placeholder="Your Email"/>

<input type="text" placeholder="Your Address"/>

<input type="text" placeholder="Phone Number"/>

<textarea rows="10" placeholder="Your Message"></textarea>

<div className="btn-box formBtn">

<button className="btn">Send Message</button>

</div>

</form>

</section>

)

}

export default ContactSection