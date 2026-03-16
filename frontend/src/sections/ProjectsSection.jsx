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

      <div className="container">

        <div className="filter-buttons scroll-scale">
          <button className="btn" data-filter="all">All</button>
          <button className="btn" data-filter=".product">Product</button>
          <button className="btn" data-filter=".inter">Interacting</button>
          <button className="btn" data-filter=".web">Web</button>
        </div>

        <div className="portfolio-gallery scroll-bottom">

          {/* Project 1 */}
          <div className="port-box mix product">
            <div className="port-image">
              <img src={img1} alt="Portfolio Project" />
            </div>

            <div className="port-content">
              <h3>Graphics Designer</h3>
              <p>Creative visual design with modern aesthetics</p>

              <a href="https://jolly-conkies-8e1fff.netlify.app/#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>


          {/* Project 2 */}
          <div className="port-box mix product">
            <div className="port-image">
              <img src={img2} alt="Web Project" />
            </div>

            <div className="port-content">
              <h3>Web Project</h3>
              <p>Full-stack web application development</p>

              <a href="https://cool-croquembouche-affade.netlify.app/">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>


          {/* Project 3 */}
          <div className="port-box mix inter">
            <div className="port-image">
              <img src={img3} alt="Interactive App" />
            </div>

            <div className="port-content">
              <h3>Interactive App</h3>
              <p>Dynamic interactive user experience</p>

              <a href="https://664797859e6c500c5fb1692e--astonishing-dieffenbachia-8a3b8b.netlify.app/">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>

  )

}

export default ProjectsSection