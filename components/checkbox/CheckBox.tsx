import React from "react";

type CheckboxProps = Partial<{
    children: React.ReactNode;
    onChange: (prevChanged: boolean) => void;
    color: string;
}>;

const Checkbox = ({ children, onChange, color }: CheckboxProps) => {
    const ADD_CLASS = [color ?? "blue"];
    const REMOVE_CLASS = ["hover:bg-slate-100", "active:bg-slate-200"];
    const button = React.createRef<HTMLButtonElement>();
    const [checked, setChecked] = React.useState(false);

    const onClick = () => {
        setChecked((prev) => !prev);
        onChange ? onChange(checked) : 0;
        if (checked) {
            button.current?.classList.remove(...ADD_CLASS);
            button.current?.classList.add(...REMOVE_CLASS);
        } else {
            button.current?.classList.add(...ADD_CLASS);
            button.current?.classList.remove(...REMOVE_CLASS);
        }
    };
    return (
        <>
            <div>
                <input readOnly checked={checked} className="hidden" type="checkbox" />
                <button className="button border hover:bg-slate-100 active:bg-slate-200" ref={button} onClick={onClick}>
                    {children}
                </button>
            </div>
        </>
    );
};

export default Checkbox;
