import s from "../ContactForm/ContactForm.module.css";
import MosaicBg from "../icons/mosaicBg";
import Telegram from "../icons/telegram";
import Linkedin from "../icons/linkedin";
import Instagram from "../icons/instagram";
import { useState, useEffect } from "react";
import CheckSign from "../icons/checkSign";
import WarningSign from "../icons/warningSign";
import ChevronRight from "../icons/chevronRight";

const ContactForm = () => {
  // Form validity
  const [validForm, setValidForm] = useState(false);
  // Input fields
  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [messageField, setMessageField] = useState("");
  // Input fields validity
  const [nameFieldValid, setNameFieldValid] = useState(false);
  const [emailFieldValid, setEmailFieldValid] = useState(false);
  const [messageFieldValid, setMessageFieldValid] = useState(false);
  // Input fileds focuse
  const [nameFieldFocuse, setNameFieldFocuse] = useState(false);
  const [emailFieldFocuse, setEmailFieldFocuse] = useState(false);
  const [messageFieldFocuse, setMessageFieldFocuse] = useState(false);

  const validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

  // Handle input focuse state
  // Name
  const nameOnFocus = () => setNameFieldFocuse(true);
  const nameOnBlur = () => setNameFieldFocuse(false);
  // Email
  const emailOnFocus = () => setEmailFieldFocuse(true);
  const emailOnBlur = () => setEmailFieldFocuse(false);
  // Message
  const messageOnFocus = () => setMessageFieldFocuse(true);
  const messageOnBlur = () => setMessageFieldFocuse(false);

  // CHECK form validity
  const checkFormValidity = () => {
    // CHECK if the username is valid
    if (nameField !== "" && nameField.length >= 4) {
      setNameFieldValid(true);
    } else {
      setNameFieldValid(false);
    }
    // CHECK if the email is valid
    if (emailField !== "" && emailField.match(validRegex)) {
      setEmailFieldValid(true);
    } else {
      setEmailFieldValid(false);
    }
    // CHECK if the password is valid
    if (messageField !== "" && messageField.length >= 10) {
      setMessageFieldValid(true);
    } else {
      setMessageFieldValid(false);
    }
  };

  // Check input fields validity
  useEffect(() => {
    // Check if input fields are valid
    const timer = setTimeout(() => {
      checkFormValidity();
    }, 750);

    // Clean up function
    return () => clearTimeout(timer);
  }, [nameField, emailField, messageField]);

  // Check entire form validity
  useEffect(() => {
    if (nameFieldValid && emailFieldValid && messageFieldValid) {
      setValidForm(true);
    } else if (!nameFieldValid || !emailFieldValid || !messageFieldValid) {
      setValidForm(false);
    }
  }, [nameFieldValid, emailFieldValid, messageFieldValid]);

  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.formBlock}>
            <h2 className={s.sectionTitle}>Let's talk</h2>
            <form
              name="contact"
              method="post"
              action="/success"
              data-netlify="true"
              className={s.form}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className={s.inputWrapper}>
                <label
                  htmlFor="name"
                  className={`${s.label} ${
                    nameFieldFocuse || nameField ? s.active : ""
                  }`}
                >
                  {nameFieldValid && !nameFieldFocuse && (
                    <CheckSign className={s.formIcon} />
                  )}
                  {!nameFieldValid && nameField && !nameFieldFocuse && (
                    <WarningSign className={s.formIcon} />
                  )}
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={nameField}
                  onChange={(e) => setNameField(e.target.value)}
                  onFocus={nameOnFocus}
                  onBlur={nameOnBlur}
                  required
                  className={`${s.input} ${
                    nameFieldValid && !nameFieldFocuse ? s.valid : ""
                  } ${
                    nameField && !nameFieldValid && !nameFieldFocuse
                      ? s.invalid
                      : ""
                  }`}
                />
              </div>

              <div className={s.inputWrapper}>
                <label
                  htmlFor="email"
                  className={`${s.label} ${
                    emailFieldFocuse || emailField ? s.active : ""
                  }`}
                >
                  {emailFieldValid && !emailFieldFocuse && (
                    <CheckSign className={s.formIcon} />
                  )}
                  {!emailFieldValid && emailField && !emailFieldFocuse && (
                    <WarningSign className={s.formIcon} />
                  )}
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={emailField}
                  onChange={(e) => setEmailField(e.target.value.toLowerCase())}
                  onFocus={emailOnFocus}
                  onBlur={emailOnBlur}
                  required
                  className={`${s.input} ${
                    emailFieldValid && !emailFieldFocuse ? s.valid : ""
                  } ${
                    emailField && !emailFieldValid && !emailFieldFocuse
                      ? s.invalid
                      : ""
                  }`}
                />
              </div>
              <div className={s.inputWrapper}>
                <label
                  htmlFor="message"
                  className={`${s.label} ${
                    messageFieldFocuse || messageField ? s.active : ""
                  }`}
                >
                  {messageFieldValid && !messageFieldFocuse && (
                    <CheckSign className={s.formIcon} />
                  )}
                  {!messageFieldValid &&
                    messageField &&
                    !messageFieldFocuse && (
                      <WarningSign className={s.formIcon} />
                    )}
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={messageField}
                  onChange={(e) => setMessageField(e.target.value)}
                  onFocus={messageOnFocus}
                  onBlur={messageOnBlur}
                  required
                  className={`${s.textarea} ${
                    messageFieldValid && !messageFieldFocuse ? s.valid : ""
                  } ${
                    messageField && !messageFieldValid && !messageFieldFocuse
                      ? s.invalid
                      : ""
                  }`}
                ></textarea>
              </div>
              <div className={s.btnWrapper}>
                <button
                  type="submit"
                  className={`btn ${validForm ? "valid" : "invalid"}`}
                >
                  <span className="btnText">Send</span>
                </button>
              </div>
            </form>
          </div>
          <div className={s.socialBlock}>
            <div className={s.blockBg}>
              <MosaicBg className={s.mosaicBg} />
              <h3 className={s.title}>Other ways you can reach me 😜</h3>
              <ul className={s.list}>
                <li className={s.item}>
                  <div className={s.link}>
                    <Linkedin className={s.icon} />
                    <span className={s.itemName}>Linkedin</span>
                  </div>
                  <ChevronRight className={s.linkIcon} />
                </li>
                <li className={s.item}>
                  <div className={s.link}>
                    <Telegram className={s.icon} />
                    <span className={s.itemName}>Telegram</span>
                  </div>
                  <ChevronRight className={s.linkIcon} />
                </li>
                <li className={s.item}>
                  <div className={s.link}>
                    <Instagram className={s.icon} />
                    <span className={s.itemName}>Instagram</span>
                  </div>
                  <ChevronRight className={s.linkIcon} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
