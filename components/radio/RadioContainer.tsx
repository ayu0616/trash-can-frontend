import { ReactNode, createContext, useId } from "react";

export interface RadioContainerProps {
    children?: ReactNode;
    className?: string;
    value?: string | number;
    onChange?: (value: string | number) => void;
}
export const RadioContext = createContext({
    name: "",
    value: "" as string | number,
    onChange: (value: string | number) => {},
});

const RadioContainer = ({ value = "", onChange = () => {}, ...props }: RadioContainerProps) => {
    const name = useId();
    return (
        <RadioContext.Provider value={{ name, value, onChange }}>
            <div {...props}></div>
        </RadioContext.Provider>
    );
};

export default RadioContainer;
