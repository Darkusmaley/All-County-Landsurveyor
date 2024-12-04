import ModalWithForm from "../Modals/ModalWithForm";
import React, { useState } from "react";

const LoginModal = ({
  handleCloseModal,
  isOpen,
  isLoading,
  loginUser,
  openRegisterModal,
  buttontext = isLoading ? "Logging" : "Login",
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = (e) => {
    e.preventDefault();
    loginUser({ email, password });
  };

  return (
    <ModalWithForm
      title="Login to All County Landsurveyer"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={onLogin}
    >
      <div className="form__info">
        <label className="form__label">
          <input
            type="text"
            name="email"
            minLength="1"
            maxLength="30"
            className="form__input"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label className="form__label">
          {/* look into hiding password */}
          <input
            type="text"
            name="password"
            minLength="1"
            className="form__input"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
      </div>
      <div className="form__buttons">
        <button type="submit" className="form__submit-button">
          {buttontext}
        </button>
        <button className="form__register-button" onClick={openRegisterModal}>
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
