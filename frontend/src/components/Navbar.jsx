import { useState } from "react"
import useHeaderScroll from "../hooks/useHeaderScroll"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  useHeaderScroll()

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  return (

<header>

<div className="logo">
<span>A</span>yush.
</div>

<ul className={`navlist ${menuOpen ? "open" : ""}`}>

<li>
<a href="#home" onClick={()=>setMenuOpen(false)}>Home</a>
</li>

<li>
<a href="#about" onClick={()=>setMenuOpen(false)}>About</a>
</li>

<li>
<a href="#services" onClick={()=>setMenuOpen(false)}>Services</a>
</li>

<li>
<a href="#skills" onClick={()=>setMenuOpen(false)}>Skills</a>
</li>

<li>
<a href="#portfolio" onClick={()=>setMenuOpen(false)}>Portfolio</a>
</li>

<li>
<a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
</li>

</ul>

<div
id="menu-icon"
className="bx bx-menu"
onClick={toggleMenu}
></div>

</header>

  )
}

export default Navbar