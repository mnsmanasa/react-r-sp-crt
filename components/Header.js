import React from "react";

export default function Header() {
  return (
    <header>
      <div className="logo">
        SC
      </div>
      <div>
        Cart <span className="badge">0</span>
      </div>
    </header>
  );
}
