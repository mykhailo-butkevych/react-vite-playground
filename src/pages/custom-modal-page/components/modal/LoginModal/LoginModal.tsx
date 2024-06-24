import React from "react";
import { BaseModal } from "../BaseModal";
import "./login.css";

export interface ILoginModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

export default function LoginModal(props: ILoginModalProps) {
  console.count("LoginModal rendered");
  const handleClose = () => {
    if (props.onClose) props.onClose();
  };

  return (
    <BaseModal title="Sign In" show={props.isOpen} onClose={handleClose}>
      <div className="login-modal-content">
        <span className="close-btn" onClick={handleClose}>
          X
        </span>
        <div>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <button>Sign In</button>
      </div>
    </BaseModal>
  );
}
