import React, { ReactNode } from "react";
import Button from "../Button/Button";

import $ from "./Form.module.css";

interface Props {
    children: Array<ReactNode>
    onSubmit: () => {}
    legend: string
    submitText: string
    readyToSubmit?: boolean
}

const Form: React.FC<Props> = ({ children,
    onSubmit,
    legend,
    submitText }) => {

    return (
        <form onSubmit={onSubmit}>
            <fieldset>
                <legend>{legend}</legend>
                {children.map((input, index) =>
                    <div key={index} className={$.formRow}>
                        {input}
                    </div>
                )}

                <Button type="submit">{submitText}</Button>
            </fieldset>
        </form>
    )
}

export default Form;