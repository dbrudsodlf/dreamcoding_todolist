import React from "react";
import { CiLight } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className="top">
      <div className="darkmode">
        <p>
          <CiLight />
        </p>
      </div>
      <div className="btn">
        <button>All</button>
        <button>Active</button>
        <button>Complete</button>
      </div>
    </div>
  );
}
