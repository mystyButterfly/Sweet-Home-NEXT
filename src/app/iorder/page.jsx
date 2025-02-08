import './iorder.css'

export const metadata ={
    title: "Personalized Furniture Repair Services",
    description: "Explore Sweet Home Furniture's individual order services for personalized furniture repair. Contact us for expert restoration of your cherished pieces.",
    keywords: "furniture repair, personalized service, chair repair, sofa upholstery, table refinishing, Sweet Home Furniture",
    author: "Sweet Home",
}

function Iorder() {

  return (
    <div className="io-individual-order">
            <h1 className="io-title">Individual Order</h1>
            <p className="io-introduction">
                At Sweet Home Furniture, we offer personalized furniture repair services crafted to meet your specific needs. Whether you have a favorite chair that needs a new lease on life or a sentimental piece that requires careful restoration, we are dedicated to delivering top-notch service and quality craftsmanship.
            </p>
            <h2 className="io-how-it-works">How It Works</h2>
            <ol className="io-steps">
                <li className="io-step">Contact us via the form below or give us a call to discuss your project.</li>
                <li className="io-step">Our expert team will provide you with a detailed consultation and an estimated price based on the repair requirements.</li>
                <li className="io-step">Once you approve the quote, we will schedule a convenient time for the repair service.</li>
                <li className="io-step">Enjoy your restored furniture!</li>
            </ol>
            <h2 className="io-pricing">Pricing</h2>
            <p className="io-pricing-info">
                Our pricing system is straightforward and transparent. Prices may vary based on the type of repair, materials required, and the time involved. Here are some starting points:
            </p>
            <ul className="io-pricing-list">
                <li className="io-price-item">Chair Repair: Starting at $75</li>
                <li className="io-price-item">Sofa Upholstery: Starting at $200</li>
                <li className="io-price-item">Table Refinishing: Starting at $150</li>
            </ul>
            <br/>
            <p>If you have any questions, inquiries, or comments, please feel free to reach out to us using the contact details below:<br/>Phone: (123) 456-7890</p>
            </div>
  )
}

export default Iorder
