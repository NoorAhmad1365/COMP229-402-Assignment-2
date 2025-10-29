
// Services.jsx
// This component displays a list of services offered, with icons and descriptions.
// Author: Noor Ahmad

import './Services.css';
import img1 from '../assets/web-dev-img.jpg';
import img2 from '../assets/program-img.jpg';
import img3 from '../assets/SRS-img.jpg';  

const Services = () => {
    return (
        <div className='AllServices'>
            {/* Main heading for services section */}
            <h2>Services I Offer</h2>

            {/* Web Development service */}
            <div className="service">
                <h3>Web Development (Learning)</h3>
                <p>Custom websites and web applications</p>
                <img src={img1} alt="Web Development" style={{ width: '800px', height: 'auto', borderRadius: '12px' }} />
            </div>

            {/* Programming service */}
            <div className="service">
                <h3>Programming</h3>
                <p>Software development and coding solutions (C#, Python, Java (Learning))</p>
                <img src={img2} alt="Programming" style={{ width: '800px', height: 'auto', borderRadius: '12px' }} />
            </div>

            {/* SRS Document Preparation service */}
            <div className="service">
                <h3>SRS Document Preparation</h3>
                <p>Software Requirements Specification (SRS) documents</p>
                <img src={img3} alt="SRS Documents" style={{ width: '800px', height: 'auto', borderRadius: '12px' }} />
            </div>
        </div>
    );
}

export default Services;