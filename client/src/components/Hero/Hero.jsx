import "./Hero.css";
import React, { useRef, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import {FaEnvelope} from 'react-icons/fa';
const Hero = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const validateEmail = (email) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(email);
    };

    const emailInput = form.current.elements.user_email;
    const emailValue = emailInput.value.trim();

    // Validate email
    if (!validateEmail(emailValue)) {
      // alert('Invalid Email');
      toast.error("Invalid Email"); // Show error toast
      setLoading(false);
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_4bskpvd",
        "template_kme8vrw",
        form.current,
        "nd1INnpiEt_DHccch"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Email sent"); // eslint-disable-line no-alert
        },
        (error) => {
          setLoading(false);
          console.log(error); // eslint-disable-line no-console
          toast.error("Error sending Email"); // eslint-disable-line no-alert
        }
      );
  };
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Discover UAE <br />
              Business offers:
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Catering to your specific business needs</span>
            <span>Hassle-free solutions for unparalleled performance</span>
          </div>

          <form className="flexCenter search-bar" ref={form} onSubmit={sendEmail}>
          <FaEnvelope color="var(--blue)" size={25}/>
            <input input type="email" name="user_email" placeholder="Your Email Address" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" required />
            <button className="button" onClick={sendEmail}>{loading ? 'Sending...' : 'Send'}</button>
          </form>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1750} end={1800} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Served Businesses</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">IT Services</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.jpg" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
