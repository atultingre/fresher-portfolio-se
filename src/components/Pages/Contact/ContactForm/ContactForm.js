import React, { useRef } from "react";
import "./ContactForm.css";
import { FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  
  const sendEmail = (e) => {
    e.preventDefault();
    const isValid = trigger();
  if (!isValid) {
    errors.preventDefault();
  }

    emailjs
      .sendForm(
        "service_743fhuc",
        "template_3nnm3ng",
        form.current,
        "WoZ2pv9k3_TOhO9u8"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Send Successfully...😍", {
            position: toast.POSITION.TOP_RIGHT,
            draggable: true,
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Network Error...😞", {
            position: toast.POSITION.TOP_RIGHT,
            draggable: true,
          });
        }
      );
  };

  return (
    <>
      <section className="contact-form" data-form>
        <h3 className="h3 form-title">Contact Form</h3>

        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="user_name"
              className="form-input"
              placeholder="Full name"
              required
              {...register("user_name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
            <input
              type="email"
              name="user_email"
              className="form-input"
              placeholder="Email Address"
              required
              {...register("user_email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.message && (
            <p className="text-red mt-1">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 char."}
            </p>
          )}
          <button className="form-btn" type="submit" value="Send">
            <div className="ion-icon">
              <FaPaperPlane />
            </div>
            <span>Send Message</span>
          </button>
        </form>
      </section>
          <ToastContainer />
    </>
  );
};

export default React.memo(ContactForm);
