import React, { ReactNode } from "react";

import $ from "./ErrorMessage.module.css";

interface Props {
    children: ReactNode;
}

const ErrorMessage: React.FC<Props> = ({ children }) => {
    return <div className={$.error}> {children} </div>;
}

export default ErrorMessage;