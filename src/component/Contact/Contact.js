import emailjs from "@emailjs/browser";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { toast } from 'react-toastify';
import "./Contact.css";

const Contact = () => {
  const sendEmail = (e) => {
    console.log(e.target.value);
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_hzkp4pv", e.target, "Q5mY-dFHamwP6NJ1S")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
      toast.success("Thank for contact me.I will reply soon. ")
  };
  return (
    <div id="contact" className="mt-5">
      <h2 className="text-white text-center mb-5">Contact Me</h2>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 contact-text">
            <p>Email: shariarHossain23@gmail.com</p>
            <p>Phone:01641-681072</p>
            <p>Khulna sadar,Khulna,Bangladesh</p>
            <div className="">
              <a
                className="icon-social"
                target="_blank"
                href="https://www.facebook.com/sh.shariar17/"
                rel="noreferrer"
              >
                <FaFacebook className="icon"></FaFacebook>
              </a>
              <a
                className="icon-social"
                target="_blank"
                href="https://www.instagram.com/shariar1723/"
                rel="noreferrer"
              >
                <FaInstagram className="icon"></FaInstagram>
              </a>
              <a
                className="icon-social"
                target="_blank"
                href="https://www.linkedin.com/in/shariarhossain23/"
                rel="noreferrer"
              >
                <FaLinkedin className="icon"></FaLinkedin>
              </a>
              <a
                className="icon-social"
                target="_blank"
                href="https://github.com/shariarHossain23"
                rel="noreferrer"
              >
                <FaGithub className="icon"></FaGithub>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <form className="mt-5" onSubmit={sendEmail}>
             <div>
              <input type="text" name="name" placeholder="Enter Name Here" required />
             </div>
             <div>
              <input type="email" name="email" placeholder="Enter Email Here" required />
             </div>
             <div>
              <textarea className="message mt-4" name="message" placeholder="Message Here" />
             </div>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

