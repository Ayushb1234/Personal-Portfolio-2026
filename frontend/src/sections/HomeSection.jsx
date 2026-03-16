import profile from "../assets/images/ayush photo.png"

import useTextAnimation from "../hooks/useTextAnimation"
import useScrollReveal from "../hooks/useScrollReveal"
import useHeaderScroll from "../hooks/useHeaderScroll"
import useReadMore from "../hooks/useReadMore"
import useSkillCircles from "../hooks/useSkillCircles"

function HomeSection() {

  useTextAnimation()
  useScrollReveal()
  useHeaderScroll()
  useReadMore()
  useSkillCircles()

  return (

<section id="home" className="home">

<div className="home-content">

<h1 className="hero-title">
Hi! I'm <span>Ayush Choudhary</span>
</h1>

<div className="change-text">

<h3>And I'm&nbsp;</h3>

<h3>

<span className="word">Web  Developer</span>
<span className="word">App  Developer</span>
<span className="word">AI-ML  Programmer</span>
<span className="word">Software  Designer</span>
<span className="word">Coder </span>

</h3>

</div>

<p>
System Engineer and programmer currently studying at CV Raman Global University.
</p>

<div className="info-box">

<div className="email-info">
<h5>Email :</h5>
<span>ka843004@gmail.com</span>
</div>

<div className="behance-info">
<h5>Phone No :</h5>
<span>+91-8102414832</span>
</div>

</div>

<div className="btn-box">

<a
href="/assets/resume/ats resume.docx"
className="btn"
>
Download CV
</a>

<a href="#" className="btn">
Hire Me Now!
</a>

</div>

<div className="social-icons">

<a href="https://github.com/Ayushb1234">
<i className="bx bxl-github"></i>
</a>

<a href="https://www.instagram.com/ayush_.22">
<i className="bx bxl-instagram"></i>
</a>

<a href="https://www.linkedin.com/in/ayush-choudhary">
<i className="bx bxl-linkedin"></i>
</a>

<a href="#">
<i className="bx bxl-whatsapp"></i>
</a>

</div>

</div>

<div className="home-image">

<div className="img-box">

<div
className="snap-wrapper"
id="snap-img-wrapper"
>

<img
src={profile}
alt="Ayush Choudhary"
id="hero-photo"
/>

<div className="glow-ring"></div>

</div>

</div>

</div>

</section>

  )

}

export default HomeSection