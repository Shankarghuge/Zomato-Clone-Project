import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white text-center py-4">
            <div className="container">
                <p>Follow us on:</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/shankar-ghuge-95833028a" className="me-3 text-decoration-none">Linkedin</a>
                    <a href="https://x.com/ShankarGhuge05?t=KYF47wBXxLTjxBv-vN6zAQ&s=09" className="me-3 text-decoration-none">Twitter</a>
                    <a href="https://www.instagram.com/im_ghuge_shankar?igsh=MTFyZDN5eTkxcXY5cg==" className="me-3 text-decoration-none">Instagram</a>
                    <a href="#" className="me-3 text-decoration-none text-secondary">Terms of Service</a>
                    <a href="#" className="me-3 text-decoration-none text-secondary">Privacy Policy</a>
                </div><br></br>
                <p className="">
                    <h6> @ Zomato 2025 | All Rights Reserved </h6>
                </p>

            </div>
        </footer>
    );
};

export default Footer;