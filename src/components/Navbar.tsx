import "../styles/components/Navbar.css"

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-black sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand header-logo" href="#">NJ Portfolio</a>
                <button className="navbar-toggler custom-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                        >
                          <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <div className="navbar-nav ms-auto">
                    <a className="nav-link text-white nav-button" href="#projects">Projects</a>
                    <a className="nav-link text-white nav-button" href="#skills">Skills</a>
                    <a className="nav-link text-white nav-button" href="#contact">Contact</a>
                  </div>

                </div>
            </div>
        </nav>
    )
    
}

export default Navbar;