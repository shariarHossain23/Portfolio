import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    reset();
  };
  return (
    <div id="contact" className="mt-5">
      <h2>Contact Me</h2>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 ">
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
          <div className="col-md-6 mx-auto">
           <div className="mx-auto">
           <form  action="mailto:shariarhossain23@gmail.com" method="post" enctype="text/plain">
              <div class="">
                <label class="label">
                  <span class="label-text">Your Name</span>
                </label>{" "}
                <br />
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name required",
                    },
                  })}
                  placeholder="Name Here*"
                  className="block input-field" 
                />{" "}
              </div>
              <div class="">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>{" "}
                <br />
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "provided valid email",
                    },
                  })}
                  placeholder="Email Here*"
                  className="block input-field "
                />{" "}
                <br />
              </div>
              <div class="">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>{" "}
                <br />
                <textarea
                  style={{ width: "70%", height: "100px", outline: "none" }}
                  {...register("message", {
                    required: {
                      value: true,
                      message: "message required",
                    },
                  })}
                  placeholder="Message Here*"
                  className="message"
                />{" "}
                <br />

              </div>
              <div class=" mt-2">
              <input className="" type="submit" value="send message"/>
              </div>
            </form>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
