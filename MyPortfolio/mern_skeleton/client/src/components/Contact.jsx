
// Contact.jsx
// This component displays contact information and a contact form for users to send a message.
// Author: Noor Ahmad

import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate(); // Used for navigation after form submission

    // Handles form submission and redirects to home page
    const handleSubmit = (event) => {
        event.preventDefault();
        // You can add form validation or send data to a server here
        alert('Message sent! Redirecting to home page...');
        navigate('/'); // Redirect to home page
    };

    return (
        <div>
            {/* Contact page heading */}
            <h2>Contact Me</h2>

            {/* Contact information section */}
            <div className="contact-info">
                <p><strong>Email:</strong> your.email@example.com</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Location:</strong> Toronto, ON</p>
            </div>

            {/* Contact form for user messages */}
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="First Name" required />
                </div>
                <div>
                    <input type="text" placeholder="Last Name" required />
                </div>
                <div>
                    <input type="tel" placeholder="Contact Number" required />
                </div>
                <div>
                    <input type="email" placeholder="Email Address" required />
                </div>
                <div>
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;