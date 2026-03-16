function ExperienceSection() {

  return (

    <section id="skills" className="skills">

      <div className="main-text scroll-scale">
        <span>my abilities</span>
        <h2>My Skills</h2>
      </div>

      <div className="skill-main">

        {/* LEFT SIDE - TECHNICAL SKILLS */}
        <div className="skill-left scroll-scale">

          <h3>Technical Skills</h3>

          <div className="skill-bar">
            <div className="info">
              <p>Frontend Skills</p>
              <p>82%</p>
            </div>
            <div className="bar">
              <span className="html"></span>
            </div>
          </div>

          <div className="skill-bar">
            <div className="info">
              <p>Backend Skills</p>
              <p>70%</p>
            </div>
            <div className="bar">
              <span className="figma"></span>
            </div>
          </div>

          <div className="skill-bar">
            <div className="info">
              <p>Machine Learning</p>
              <p>90%</p>
            </div>
            <div className="bar">
              <span className="figma"></span>
            </div>
          </div>

          <div className="skill-bar">
            <div className="info">
              <p>Software Development</p>
              <p>62%</p>
            </div>
            <div className="bar">
              <span className="css"></span>
            </div>
          </div>

        </div>


        {/* RIGHT SIDE - PROFESSIONAL SKILLS */}
        <div className="skill-right scroll-scale">

          <h3>Professional Skills</h3>

          <div className="professional">

            <div className="box">
              <div className="circle" data-dots="80" data-percent="90"></div>
              <div className="text">
                <big>90%</big>
                <small>Team Work</small>
              </div>
            </div>

            <div className="box">
              <div className="circle" data-dots="80" data-percent="80"></div>
              <div className="text">
                <big>80%</big>
                <small>Creativity</small>
              </div>
            </div>

            <div className="box">
              <div className="circle" data-dots="80" data-percent="75"></div>
              <div className="text">
                <big>75%</big>
                <small>Project Mgmt</small>
              </div>
            </div>

            <div className="box">
              <div className="circle" data-dots="80" data-percent="80"></div>
              <div className="text">
                <big>80%</big>
                <small>Communication</small>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>

  )

}

export default ExperienceSection