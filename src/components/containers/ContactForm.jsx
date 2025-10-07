"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { settings } from "../../../settings/settings";

const ContactForm = () => {
  const currentForm = useRef();

  const [serverSuccess, setServerSuccess] = useState("");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        settings.emailjs_serviceid,
        settings.emailjs_templateid,
        currentForm.current,
        settings.emailjs_publickey
      )
      .then(
        (result) => {
          if (result.status === 200 && result.text) {
            setServerError(false);
            setServerSuccess("Email successfully sent!");
          }
        },
        (error) => {
          setServerSuccess(false);
          setServerError("Something is wrong while sending the message!");
        }
      );
  };

  return (
    <form
      ref={currentForm}
      className="card -mt-1.5  space-y-4 p-4 md:p-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="inputbox">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="So I know who I’m connecting with."
          id="name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <>
            {errors.name.type === "required" && (
              <p className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500">
                Name is required!
              </p>
            )}
          </>
        )}
      </div>
      <div className="inputbox">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="I’ll follow up personally and continue the conversation."
          id="email"
          {...register("email", {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
        {errors.email && (
          <>
            {errors.email.type === "required" && (
              <p className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500">
                Email is required!
              </p>
            )}
            {errors.email.type === "pattern" && (
              <p className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500">
                Invalid email address!
              </p>
            )}
          </>
        )}
      </div>
      <div className="inputbox">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          placeholder="What brings you here today?"
          id="subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <>
            {errors.subject.type === "required" && (
              <p className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500">
                Subject is required!
              </p>
            )}
          </>
        )}
      </div>
      <div className="inputbox">
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Write as much or as little as you’d like. I’m listening."
          cols="1"
          rows="5"
          id="message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <>
            {errors.message.type === "required" && (
              <p className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500">
                Message is required!
              </p>
            )}
          </>
        )}
      </div>
      {!serverSuccess && serverError && (
        <p className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500">{serverError}</p>
      )}
      {!serverError && serverSuccess && (
        <p className="bg-green-500 bg-opacity-5 text-center text-sm text-green-500">
          {serverSuccess}
        </p>
      )}
      <button type="submit" className="btn">
        <span>Send Your Message</span>
      </button>
    </form>
  );
};

export default ContactForm;
