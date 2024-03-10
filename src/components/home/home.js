import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div class="start">
                <div>
                    <div class="hi">
                        Hi 👋, I'm{" "}
                        <span class="name bold">Dhiraj Govindvira.</span>
                    </div>
                    <div class="role"> Programmer ❤️ & Tech Enthusiast 😀</div>
                    <div>
                        <Link to="/about" className="mt-3 btn btn-outline-primary">know more</Link>
                    </div>
                </div>
            </div>
            <div class="hide wrapper">
                <div class="header-wrapper" id="header-wrapper"></div>
                <div class="main-wrapper">
                    <div id="main-wrapper"></div>
                </div>
                <div class="footer-wrapper">
                    <div id="footer-wrapper"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;
