import React from "react";

import Head from "../components/head";
import Form from "../components/form";
import Description from "../components/description";

type Props = {};

export default function Center({}: Props) {
  return(
    <div className="grid content-start lg:mx-4">
        <Head />
        <Form />
        <Description />
    </div>
    
  );
}
