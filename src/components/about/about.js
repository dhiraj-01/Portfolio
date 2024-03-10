import "./about.css";

function About() {
    return (
        <div class="about-comp">
            <div class="bold mobile">
                <div class="about-header">
                    <i class="fas fa-home about-icon"></i> About
                </div>
                <hr />
            </div>
            <div class="about-title mb-3">
                <div class="hi">
                    HI 👋, I'm <span class="bold name">Dhiraj Govindvira.</span>
                </div>
                <div class="role">Software Engineer | Java</div>
            </div>
            <ul class="about-details">
                <li>
                    I come with 1+ year of experience in the software industry.
                    I am a <span class="bold">Software Engineer</span> with both
                    full-time and internship experience at{" "}
                    <a
                        href="https://www.linkedin.com/company/amazon/"
                        target="__blank"
                    >
                        Amazon
                    </a>
                    .
                </li>
                <li>
                    My technical skills include expertise in{" "}
                    <span class="bold">Java</span>, C++, C, Data Structures &
                    Algorithms, Object-Oriented Programming (OOP), Database
                    Management (DynamoDB, SQL) , Bootstrap, JavaScript / Node.js
                    (Basic), AWS and Git. I am a person who believes in
                    continuous learning.
                </li>
                <li>
                    I completed a B.Tech in{" "}
                    <span class="bold">Computer Engineering</span> from{" "}
                    <a href="https://ddu.ac.in/" target="_blank">
                        Dharmsinh Desai University
                    </a>{" "}
                    (2018 - 2022). I have a basic knowledge of web development,
                    created{" "}
                    <a href="#" onclick="show('project')">
                        projects
                    </a>{" "}
                    based on the MEAN Stack and Javascript during my college
                    career.
                </li>
                <li>
                    In my free time, I enjoy ❤️ problem-solving (DSA), listening
                    to music 🎵 and sometimes read a book 📕.
                </li>
                <li>
                    I keep things simple and 💻 technology attracts me a lot.
                </li>
                <div class="mt-2">
                    <a
                        class="resume btn btn-primary"
                        href="https://drive.google.com/file/d/1EaoNZHFEbp8HLEWVv5uZ0K2sRnMR-HNe/view?usp=sharing"
                        target="_blank"
                    >
                        Resume
                    </a>
                    <button
                        class="d-inline m-2 btn btn-outline-primary"
                        onclick="show('work')"
                    >
                        Experience
                    </button>
                </div>
            </ul>
        </div>
    );
}

export default About;