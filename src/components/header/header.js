import "./header.css"

function Header() {
  return (
    <div class="header-comp">
    {/* <!-- header dropdown (mobile screen) --> */}
    <div class="mobile header-menu-comp">
        <header class="header-menu">
            <div class="dropdown">
                <div class="dropdown-title border btn dropdown-toggle" role="button" id="header-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Menu
                </div>
                <ul class="dropdown-menu" aria-labelledby="header-dropdown">
                    <li aria-selected="true">
                        {/* <!-- About --> */}
                        <button class="dropdown-item" onClick="show('about')">
                            <i class="fas fa-home"></i>
                            <span>About</span>
                        </button>
                    </li>
                    <li>
                        {/* <!-- Work Experience --> */}
                        <button class="dropdown-item" onClick="show('work')">
                            <i class="fas fa-briefcase"></i>
                            <span>Work Experience</span>
                        </button>
                    </li>
                    <li>
                        {/* <!-- Skills --> */}
                        <button class="dropdown-item" onClick="show('skill')">
                            <i class="fas fa-code"></i>
                            <span>Skills</span>
                        </button>
                    </li>
                    <li>
                        {/* <!-- Projects --> */}
                        <button class="dropdown-item" onClick="show('project')">
                            <i class="fas fa-tasks"></i>
                            <span>Projects</span>
                        </button> 
                    </li>
                    <li>
                        {/* <!-- Education --> */}
                        <button class="dropdown-item" onClick="show('education')">
                            <i class="fas fa-user-graduate"></i>
                            <span>Education</span>
                        </button>
                    </li>
                    <li>
                        {/* <!-- Achivements --> */}
                        <button class="dropdown-item" onClick="show('achivement')">
                            <i class="fas fa-trophy"></i>
                            <span>Achivements</span>
                        </button>
                    </li>
                    <li>
                        {/* <!-- Contact --> */}
                        <button class="dropdown-item" onClick="show('contact')">
                            <i class="far fa-address-card"></i>
                            <span>Contact</span>
                        </button>
                    </li>
                </ul>
            </div>
            <button class="dark-mode-btn btn" onClick="darkModeToogle()">
                <i class="fas fa-adjust"></i>
            </button>
        </header>
    </div>

    {/* <!-- header tab --> */}
    <div class="web header-tab-comp">
        <header class="header-tab nav justify-content-center">
            <div class="nav nav-tabs" role="tablist">
                {/* <!-- About --> */}
                <button class="header-tab-item nav-link active" id="header-tab-about" data-bs-toggle="tab" type="button" role="tab" aria-selected="true"
                    onClick="load('about')">
                    <i class="fas fa-home"></i>
                    About
                </button>
                {/* <!-- Work Experience --> */}
                <button class="header-tab-item nav-link" id="header-tab-work" data-bs-toggle="tab" type="button" role="tab" aria-selected="false"
                    onClick="show('work')">
                    <i class="fas fa-briefcase"></i>
                    <span>Work Experience</span>
                </button>
                {/* <!-- Skills --> */}
                <button class="header-tab-item nav-link" id="header-tab-skills" data-bs-toggle="tab" type="button" role="tab" aria-selected="false"
                    onClick="load('skill')">
                    <i class="fas fa-code"></i>
                    Skills
                </button>
                {/* <!-- Projects --> */}
                <button class="header-tab-item nav-link" id="header-tab-projects" data-bs-toggle="tab" type="button" role="tab" aria-selected="false"
                    onClick="load('project')">
                    <i class="fas fa-tasks"></i>
                    Projects
                </button>
                {/* <!-- Education --> */}
                <button class="header-tab-item nav-link" id="header-tab-education" data-bs-toggle="tab" type="button" role="tab" aria-selected="false"
                    onClick="load('education')">
                    <i class="fas fa-user-graduate"></i>
                    Education
                </button>
                {/* <!-- Achivements --> */}
                <button class="header-tab-item nav-link" id="header-tab-achivements" data-bs-toggle="tab" type="button" role="tab" aria-selected="false"
                    onClick="load('achivement')">
                    <i class="fas fa-trophy"></i>
                    Achivements
                </button>
                {/* <!-- Contact --> */}
                <button class="header-tab-item nav-link" id="header-tab-contact" data-bs-toggle="tab" type="button" role="tab" aria-selected="false"
                    onClick="load('contact')">
                    <i class="far fa-address-card"></i>
                    Contact
                </button>
                {/* <!-- Dark Mode --> */}
                <button class="header-tab-item nav-link" onClick="darkModeToogle()">
                    <i class="fas fa-adjust"></i>
                </button>
            </div>
        </header>
    </div>
</div>
  );
}

export default Header;
