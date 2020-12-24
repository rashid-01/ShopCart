import React, { Fragment } from "react";

const VisibilityToggle = ({ visible, children }: any) => {
  return visible ? children : <Fragment />;
};

export default VisibilityToggle;