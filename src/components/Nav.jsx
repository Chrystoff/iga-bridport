import React from "react";

export default function Nav() {
    const [isActive, setisActive] = React.useState(false);

    return (
    <>    
        <nav class="navbar is-info" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a
                    class="navbar-item" href="#">
                    <img src="../../public/iga_logo.svg" alt="Failed to load image"/>
                </a>
                <a
                    onClick={() => {
                        setisActive(!isActive);
                    }}
                    role="button"
                    class={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navMenu"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navMenu" class={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <div class="navbar-start">
                    <a class="navbar-item">
                        Home
                    </a>
                    <a class="navbar-item">
                        The Team
                    </a>
                    <a class="navbar-item">
                        Where we are
                    </a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            More
                        </a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                About
                            </a>
                            <a class="navbar-item">
                                Jobs
                            </a>
                            <a class="navbar-item">
                                Contact
                            </a>
                            <hr class="navbar-divider"/>
                            <a class="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>
                <div class="navbar-end"></div>
            </div>
        </nav>
    </>
    )
}
