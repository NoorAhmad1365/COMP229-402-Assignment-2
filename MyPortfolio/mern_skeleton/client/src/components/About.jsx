
// About.jsx
// This component displays Noor Ahmad's profile, image, and a short biography with a resume download button.
// Author: Noor Ahmad

import './About.css'; // Import styles for About page
import profileImg from '../assets/Noor-Ahmad-Profile.jpeg'; // Profile image

const About = () => {
    return (
        <div className="hero">
            {/* Main heading: Name */}
            
            <h2>Noor Ahmad</h2>
            {/* Profile image */}
            <img src={profileImg} alt="Noor Ahmad" style={{ width: '500px', height: 'auto', borderRadius: '12px' }} />

            {/* Subheading */}
            <h3>About me</h3>

            {/* Short biography paragraph */}
            <p>
                Hello, my name is Noor Ahmad, and I am a recent high school graduate with a deep
                passion for computers, technology, and the growing world of artificial intelligence. At just 20 years old, I
                am eager to challenge myself, continue learning, and develop the skills necessary to make an impact in this exciting field.
                I am currently pursuing a diploma in Artificial Intelligence and Software Engineering at Centennial College, where
                I am gaining both theoretical knowledge and hands-on experience. This program is helping me build a strong foundation
                in computer science while also allowing me to explore emerging areas in AI, software engineering, and modern development practices.
            </p>
            {/* Resume download button */}
            <a href="/Noor-Ahmad-Resume.pdf" download className="resume-btn">Download My Resume (PDF)</a>
        </div>
    );
}

export default About;