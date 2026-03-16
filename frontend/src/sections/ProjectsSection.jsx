import img1 from "../assets/images/graphics.jpg"
import img2 from "../assets/images/download.jpeg"
import img3 from "../assets/images/download1.jpeg"

function ProjectsSection(){

return(

<section id="portfolio" className="portfolio">

<div className="main-text scroll-scale">

<span>What I will do for you</span>

<h2>Latest Projects</h2>

</div>

<div className="portfolio-gallery">

<div className="port-box">

<div className="port-image">
<img src={img1}/>
</div>

<div className="port-content">
<h3>Graphics Designer</h3>
<p>Creative visual design</p>
</div>

</div>

</div>

</section>

)

}

export default ProjectsSection