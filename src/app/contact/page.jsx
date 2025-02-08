import './contact.css'

export const metadata = {
    title: "Contact",
    description: "Get in touch with Sweet Home, your destination for quality furniture and home decor. Contact us for inquiries, questions, or comments.",
    keywords: "Contact, Sweet Home, Furniture, Home Decor, Customer Service",
    author: "Sweet Home",
    robots: "index, follow"
}

function Contact() {
  
    
  return (
    <div className="contact-contact">
            <h1 className="contact-title">Contact Sweet Home</h1>
            <p className="contact-description">
                Thank you for your interest in Sweet Home, your go-to destination for quality furniture and home decor. We take pride in providing our customers with a wide selection of stylish and comfortable furniture that enhances the beauty of any space.
            </p>
            <h2 className="contact-subtitle">Get in Touch</h2>
            <p className="contact-info">
                If you have any questions, inquiries, or comments, please feel free to reach out to us using the contact details below:
            </p>
            <ul className="contact-contact-info">
                <li className="contact-item">Phone: (123) 456-7890</li>
                <li className="contact-item">Email: info@sweethome.com</li>
                <li className="contact-item">Address: 123 Comfort Lane, Cozy City, State, 12345</li>
            </ul>
            <h2 className="contact-subtitle">Business Hours</h2>
            <p className="contact-hours">
                We are open during the following hours:
            </p>
            <ul className="contact-hours-list">
                <li className="contact-item">Monday - Friday: 9 AM - 7 PM</li>
                <li className="contact-item">Saturday: 10 AM - 6 PM</li>
                <li className="contact-item">Sunday: Closed</li>
            </ul>
            <h2 className="contact-subtitle">Follow Us</h2>
            <p className="contact-follow">
                Stay connected with us on social media for the latest updates, promotions, and inspiration for your home.
            </p>
            <ul className="contact-social">
                <li className="contact-item"><a href="https://facebook.com/sweethome" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li className="contact-item"><a href="https://instagram.com/sweethome" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li className="contact-item"><a href="https://twitter.com/sweethome" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
        </div>
  )
}

export default Contact
