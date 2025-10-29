
// Home.jsx
// This component displays Noor Ahmad's portfolio introduction and a link to the About page.
// Author: Noor Ahmad

import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <div className="hero">
            {/* Portfolio main heading */}
            <h2>Welcome to My Portfolio</h2>
            {/* Portfolio introduction paragraph */}
            <p>
                Hello my name is Noor Ahmad, and my main focus is on learning and improving my technical abilities. Through my coursework, I am not only strengthening
                my understanding of web development, but also enhancing my skills in tools like Visual Studio Code, 
                project structuring, and software design principles. Each project and assignment pushes me to think 
                critically, apply problem-solving strategies, and develop a mindset for continuous growth. 
                My ultimate goal is to break into the world of technology and contribute to innovations that make a real difference.
                Whether it’s creating intelligent systems, designing efficient software solutions, or working on impactful AI 
                projects, I want to be at the forefront of technological progress. This portfolio represents the beginning of that
                journey—a space where I can showcase my skills, projects, and the progress I’ve made along the way.
                Thank you for taking the time to visit my portfolio, and I look forward to sharing my work as I continue to grow
                in this ever-evolving field.
            </p>
            {/* Link to About page */}
            <Link to="/about">
                <button>Learn More About Me</button>
            </Link>
        </div>
    );
}

export default Home;