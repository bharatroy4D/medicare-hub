import React from 'react';
// import './About.css';
// import Team from './Team';
// import Testimonials from './Testimonials';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-introduction">
        <h1>About Dr. John Doe</h1>
        <p>
          Dr. John Doe is a renowned physician with over 15 years of experience in
          providing high-quality healthcare. He specializes in cardiology and believes
          in offering personalized care to each patient.
        </p>
        <div className="about-img">
          {/* <img src="/images/doctor.jpg" alt="Dr. John Doe" /> */}
        </div>
      </section>

      <section className="specialties">
        <h2>Specialties</h2>
        <ul>
          <li>Cardiology</li>
          <li>Heart Disease Prevention</li>
          <li>Stroke Rehabilitation</li>
        </ul>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: dr.johndoe@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>

      <Team />
      <Testimonials />
    </div>
  );
};

export default About;
