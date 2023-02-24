import { useEffect, useState } from "react";

type ButtonProps = Partial<{
    children: React.ReactNode;
    onClick: () => void;
    color: string;
    disabled: boolean;
    className: string;
}>;

const Button = (props: ButtonProps) => {
    const [color, setColor] = useState("blue");
    useEffect(() => {
        if (props.color) {
            setColor(props.color);
        }
    }, [props.color]);
    return (
        <>
            <button className={`button ${color} ${props.className}`} onClick={props.onClick} disabled={props.disabled}>
                {props.children}
            </button>
        </>
    );
};

export default Button;
