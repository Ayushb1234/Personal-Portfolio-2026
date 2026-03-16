import profile from "../assets/images/profile.png"

function AboutSection() {

return (

<section id="about" className="about">

<div className="img-about scroll-scale">

<img src={profile} alt="" />

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
I feel very enthusiastic while doing coding.
</p>

<div className="btn-box">
<button className="btn">Read More</button>
</div>

</div>

</section>

)
}

export default AboutSection