import "./services.css";
export const metadata = {
  title: "Services",
  description: "Discover our range of top-quality services, including delivery, installation, repair, and warranty for your furniture.",
  keywords: "furniture services, delivery, installation, repair, warranty, Sweet Home",
  author: "Sweet Home",
  robots: "index, follow"
};
function Services() {
  return (
    <div id="services">
      <div className="services-container services">
        <h1 className="services-title">Our Services</h1>

        <div className="services-item services">
          <h2 className="services-subtitle">Delivery</h2>
          <p className="services-description">
            At Sweet Home, we understand the excitement of receiving your new
            furniture. That&apos;s why we offer prompt and reliable delivery
            services. Our experienced team ensures that your items arrive safely
            and on time. We handle everything from packing to transport, so you
            can enjoy your new pieces without any hassle.
          </p>
        </div>

        <div className="services-item services">
          <h2 className="services-subtitle">Installation</h2>
          <p className="services-description">
            Setting up furniture can sometimes be a daunting task. Our
            installation service takes the burden off your shoulders. Our
            skilled technicians will assemble and place your furniture exactly
            where you want it, ensuring everything is set up correctly. We take
            pride in our attention to detail to make your home look stunning.
          </p>
        </div>

        <div className="services-item services">
          <h2 className="services-subtitle">Repair</h2>
          <p className="services-description">
            Over time, furniture can wear out or get damaged. Our repair service
            provides professional fixes for any issues that may arise. Whether
            it&apos;s a scratch, a loose joint, or upholstery that needs
            reconditioning, our skilled craftsmen can restore your beloved
            pieces to their original glory, extending their life and beauty.
          </p>
        </div>

        <div className="services-item services">
          <h2 className="services-subtitle">Warranty</h2>
          <p className="services-description">
            We believe in the quality of our products. That&apos;s why Sweet
            Home offers a comprehensive warranty on all our furniture items.
            Should you encounter any issues due to manufacturing defects, we’ve
            got you covered. Our customer service team is here to assist you
            with any concerns, ensuring your investment is protected.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
