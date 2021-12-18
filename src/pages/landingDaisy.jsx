import React from "react";

// components

import CtaDaisy from "../components/CtaDaisy";

export default function Landing() {
  return (
    <>
      {/* <main data-theme="dark" className="bg-base-100"> */}
      {/* <main data-theme="garden" className="bg-base-100"> */}
      <main data-theme="si_recreacion" className="bg-base-100">
        {/* <main data-theme="bumblebee" className="bg-base-100"> */}
        <CtaDaisy variant="primary" />
        <CtaDaisy variant="secondary" buttonShape="btn-md" />
        <CtaDaisy variant="neutral" buttonShape="btn-sm" />
      </main>
    </>
  );
}
