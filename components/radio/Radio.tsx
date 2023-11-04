import React, { useContext, useId } from "react";
import { RadioContext } from "./RadioContainer";

type RadioProps = {
    children?: React.ReactNode;
    color?: string;
    value?: string | number;
};

const Radio = ({ children, color, ...props }: RadioProps) => {
    const uuid = useId();
    const { name, value, onChange } = useContext(RadioContext);
    const checked = value === props.value;
    const colorClass = checked ? color ?? "blue" : "hover:bg-slate-100 active:bg-slate-200";

    const handleChange = () => {
        onChange && onChange(props.value || "");
    };
    return (
        <>
            <label htmlFor={uuid} className={["border button cursor-pointer", colorClass].join(" ")}>
                <input id={uuid} checked={checked} onChange={handleChange} className="hidden" type="radio" name={name} {...props} />
                {children}
            </label>
        </>
    );
};

export default Radio;
