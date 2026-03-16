function ContactSection() {

  return (
    <section id="contact" className="contact">

      <div className="main-text scroll-scale">
        <span>Ask me a Question</span>
        <h2>Contact Me</h2>
      </div>

      <form action="#" className="scroll-bottom">

        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Your Email" />

        <input type="text" placeholder="Your Address" />

        <input type="text" placeholder="Phone Number" />

        <textarea cols="30" rows="10" placeholder="Your Message"></textarea>

        <div className="btn-box formBtn">
          <button type="submit" className="btn">
            Send Message
          </button>
        </div>

      </form>

    </section>
  )

}

export default ContactSection