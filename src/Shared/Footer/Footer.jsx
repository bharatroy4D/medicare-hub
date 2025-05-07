import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Clinic Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">HealthCare+</h2>
          <p className="text-sm">
            Providing expert medical care with compassion and professionalism. Your health is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Doctors</a></li>
            <li><a href="#" className="hover:underline">Appointments</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>General Checkup</li>
            <li>Dental Care</li>
            <li>Cardiology</li>
            <li>Emergency Care</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">123 Medic Street, Health City</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
          <p className="text-sm">Email: info@healthcareplus.com</p>
          <div className="flex gap-4 mt-4">
            <a href="#"><FaFacebookF className="hover:text-gray-300" /></a>
            <a href="#"><FaTwitter className="hover:text-gray-300" /></a>
            <a href="#"><FaInstagram className="hover:text-gray-300" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-gray-300" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700 mt-10 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} HealthCare+. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
