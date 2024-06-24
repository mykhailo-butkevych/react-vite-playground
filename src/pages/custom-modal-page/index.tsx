// https://hackernoon.com/the-perfect-react-modal-implementation-for-2023
import React from "react";
import { useModal } from "./components/modal/useModal";
import "./styles/index.css";
import { useUIStore } from "./zustand-store";
import LazyComponent from "./components/modal/LazyComponent";
import { useShallow } from "zustand/react/shallow";

function CustomModalPage() {
  const { onOpen: openLoginModal } = useModal("LoginModal");
  const { onOpen: openTestModal } = useModal("TestModal");
  const [getOpenModalsList] = useUIStore((state) => [state.getOpenModalsList]);
  const openModals = getOpenModalsList();
  // console.log("🚀 ~ CustomModalPage ~ modal:", modal);
  console.log("🚀 ~ CustomModalPage ~ openModals:", openModals);

  return (
    <>
      {openModals.map((filename) => (
        <LazyComponent key={filename} filename={filename} />
      ))}
      <div className="App">
        <h1>Hello Developer</h1>
        <h2>Here is our magnificent enterprise level modal ecosystem!</h2>
        <div style={{ display: "flex", gap: "2rem" }}>
          <button
            className="custom-button"
            onClick={(e) => {
              console.log("clicked!");
              openLoginModal({ name: "John" });
            }}
          >
            LOGIN
          </button>
          <button
            className="custom-button"
            onClick={(e) => {
              console.log("clicked!");
              openTestModal();
            }}
          >
            TEST
          </button>
        </div>
      </div>
    </>
  );
}

export default CustomModalPage;
