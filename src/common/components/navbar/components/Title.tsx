import React from "react";
import MobileMenu from "./MobileMenu";

export default function Title() {
  return (
    <div className="navbar-start">
      <MobileMenu />
      <a className="btn btn-ghost uppercase text-xl text-orange-700" href="/">
        taufiqadsn
      </a>
    </div>
  );
}
