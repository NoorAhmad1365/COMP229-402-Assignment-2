// Project.jsx
// This component displays a list of projects with images, roles, and outcomes.
// Author: Noor Ahmad

import './Project.css';
import project1Img from '../assets/Project-1.jpg';
import project2Img from '../assets/Project-2.jpg';
import project3Img from '../assets/Project-3.jpg';


const Projects = () => {
    return (
        <div className='AllProjects'>
            {/* Main heading for projects section */}
            <h2>My Projects</h2>

            {/* Project 1 details */}
            <div className="project">
                <h3>SRS Document (Group Project)</h3>
                <img src={project1Img} alt="Project 1" style={{ width: '800px', height: 'auto', borderRadius: '12px' }} />
                <p><strong>My Role:</strong> As a team member, I contributed to writing and organizing the SRS document, defined use cases, and helped clarify requirements with the group.</p>
                <p><strong>SRS Document of a mock-up app:</strong> In this project, our team created a comprehensive Software Requirements
                    Specification (SRS) document for a hypothetical application. The SRS outlined the functional and non-functional requirements, 
                    use cases, and system architecture. This document served as a blueprint for the development team, ensuring that all 
                    stakeholders had a clear understanding of the project's scope and objectives.
                </p>
            </div>

            {/* Project 2 details */}
            <div className="project">
                <h3>Mercedes Showcase Website</h3>
                <img src={project2Img} alt="Project 2" style={{ width: '800px', height: 'auto', borderRadius: '12px' }} />
                <p><strong>My Role:</strong> I designed and developed the website layout, implemented navigation, and integrated images and links for a user-friendly experience.</p>
                <p><strong>Displayed a Mercedes Showcase Website:</strong> The website showcased various Mercedes models with detailed
                    information and images. It also had links that could guide the user to the Mercedes home page. Lastly, it also had 
                    links to various dealerships built into the map itself.
                </p>
            </div>

            {/* Project 3 details */}
            <div className="project">
                <h3>GUI Calculator (Windows Forms Application)</h3>
                <img src={project3Img} alt="Project 3" style={{ width: '800px', height: 'auto', borderRadius: '12px' }} />
                <p><strong>My Role:</strong> I developed the calculator's user interface and implemented the logic for arithmetic operations using C# in Windows Forms.</p>
                <p><strong>Displayed GUI Calculator:</strong> The C# code for the project displayed a fully functioning calculator that
                    can perform various operations.
                </p>
            </div>
        </div>
    );
}

export default Projects;