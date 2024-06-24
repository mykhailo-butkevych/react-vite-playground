import React, { memo } from "react";
import { createPortal } from "react-dom";
import classnames from "classnames";

export interface IBaseModalProps {
  show: boolean;
  title: string;
  children: string | React.ReactNode;
  footer?: string | React.ReactNode;
  closeOnTap?: boolean;
  onClose?: () => void;
}

export const BaseModal = memo((props: IBaseModalProps) => {
  const { title, footer, closeOnTap, onClose, children } = props;

  const root = document.getElementById("root");

  if (!root) throw new Error("Root node not found. Cannot render modal.");

  const handleInsideClick: React.MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    if (!closeOnTap) {
      event.stopPropagation();
    }
  };

  return createPortal(
    <div
      className={classnames({
        Modal: true,
        "Modal-show": props.show,
      })}
      onClick={onClose}
    >
      <div className="Modal-panel" onClick={handleInsideClick}>
        <div>
          <h4 className="Modal-header">{title}</h4>
        </div>
        <div className="Modal-content">{children}</div>
        {footer && <div className="Modal-footer">{footer}</div>}
      </div>
    </div>,
    root
  );
});
