import { useId, useState } from "react";

type CheckboxProps = Partial<{
    children: React.ReactNode;
    checked: boolean;
    onChange: (prevChanged: boolean) => void;
    color: string;
}>;

const Checkbox = ({ children, onChange, checked, color }: CheckboxProps) => {
    const uuid = useId();
    const [_checked, setChecked] = useState(checked || false);
    const colorClass = _checked ? color ?? "blue" : "hover:bg-slate-100 active:bg-slate-200";

    const handleChange = () => {
        setChecked((prev) => !prev);
        onChange && onChange(_checked);
    };
    return (
        <>
            <label htmlFor={uuid} className={["border button cursor-pointer", colorClass].join(" ")}>
                <input id={uuid} checked={_checked} onChange={handleChange} className="hidden" type="checkbox" />
                {children}
            </label>
        </>
    );
};

export default Checkbox;
