
// Education.jsx
// This component displays Noor Ahmad's education history and qualifications.
// Author: Noor Ahmad

import './Education.css';

const Education = () => {
    return (
        <div>
            {/* Main heading for education section */}
            <h2>Education & Qualifications</h2>

            {/* Software Engineering and Artificial Intelligence (Currently studying) */}
            <div className="education-item">
                <h3>Software Engineering and Artificial Intelligence</h3>
                <p><strong>Centennial College</strong> | Ongoing</p>
                <p>Currently pursuing...</p>
            </div>

            {/* High School Diploma details */}
            <div className="education-item">
                <h3>High School Diploma</h3>
                <p><strong>East York Collegiate Institute</strong> | 2019-2023</p>
            </div>

        </div>
    );
}

export default Education;