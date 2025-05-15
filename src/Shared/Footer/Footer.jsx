import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a1d37] text-white pt-16 pb-10 ">
      <div className="container px-5 lg:px-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nn7ruXqffDFQBkn6Hg44oCp-n6Jl5rMd9ItLHQeuOxPdY4DzKKWBkAZizX5sR-lXTI0&usqp=CAU" alt="Doctor Logo" className="w-14 h-14 rounded-full mb-4 p-0.5" />
          <p className="text-sm text-gray-300">
            We care about your health. Our experienced doctors and modern facilities are here to serve you 24/7.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><strong>Phone:</strong> +1 (234) 567-8901</li>
            <li><strong>Email:</strong> support@healthcare.com</li>
            <li><strong>Address:</strong> 123 Health St, MedCity, USA</li>
            <li><strong>Hours:</strong> Mon-Sat: 8AM - 9PM</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Doctors</a></li>
            <li><a href="#" className="hover:text-white">Appointments</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">Subscribe to get health tips and updates.</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded text-black"
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social & Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">&copy; 2025 HealthCare. All rights reserved.</p>
        <div className="flex gap-4 text-white text-lg">
          <a href="#" className="hover:text-teal-400"><FaFacebookF /></a>
          <a href="#" className="hover:text-teal-400"><FaTwitter /></a>
          <a href="#" className="hover:text-teal-400"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-teal-400"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
