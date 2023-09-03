import React from "react";

import Form from "../components/form";

type Props = {};

export default function Center({}: Props) {
  return(
    <div className="grid content-start lg:mx-4">
        <Form />
    </div>
    
  );
}
