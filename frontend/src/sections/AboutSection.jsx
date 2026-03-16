import profile from "../assets/images/ayush photo.png"

function AboutSection() {

  return (
    <section id="about" className="about">

      <div className="img-about scroll-scale">
        <img src={profile} alt="Ayush" />

        <div className="info-about1">
          <span>3+</span>
          <p>Years of Experience</p>
        </div>

        <div className="info-about2">
          <span>15+</span>
          <p>Project Complete</p>
        </div>

        <div className="info-about3">
          <span>20+</span>
          <p>Clients</p>
        </div>
      </div>

      <div className="about-content scroll-scale">

        <span>Let me introduce myself</span>

        <h2>About Me</h2>

        <h3>A story of good</h3>

        <p>
          I am 3rd year Btech student at CV RAMAN GLOBAL UNIVERSITY.
          I feel very enthusiastic while doing coding. I am very passionate about my work.
          I am currently working as an Intern in one of the recognised companies IBM
          in Artificial Intelligence. The increasing demand of coders and programmers
          fascinates young hustlers to join this large society of coders.
        </p>

        <div className="more-content4">
          <p>
            I am very much enthusiastic about Artificial Intelligence and deep learning
            technologies. Working for more than 2 years in this field, I see the world
            of AI reduces human labour and saves time.
          </p>
        </div>

        <div className="btn-box">
          <a href="#" className="btn" id="readMoreBtn4">
            Read More!
          </a>
        </div>

      </div>

    </section>
  )
}

export default AboutSection