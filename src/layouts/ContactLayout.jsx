import { NavLink, Outlet } from "react-router-dom";

function ContactLayout() {
  return (
    <div>
      <img src="https://t.ly/qfHI4" alt="contact page image" height={250} />
      <h1>Contact</h1>
      <p>
        We’d love to hear from you! Whether you have questions, feedback, or
        suggestions, please fill out the form below, and our team will get back
        to you as soon as possible. Your input is invaluable to us and helps us
        improve continuously. Thank you for reaching out to Articles!
      </p>

      <nav>
        <NavLink to="faq">Faq</NavLink>
        <NavLink to="form">Form</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default ContactLayout;
