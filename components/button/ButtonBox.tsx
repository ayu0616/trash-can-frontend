import { ReactNode } from "react";

const ButtonBox = ({ children }: { children?: ReactNode }) => {
    return (
        <>
            <div className="button-box">{children}</div>
        </>
    );
};

export default ButtonBox;
