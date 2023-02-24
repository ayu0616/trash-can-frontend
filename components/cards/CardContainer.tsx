import { ReactNode } from "react";

const CardContainer = ({ children }: { children: ReactNode }) => {
    return <div className="grid p-3 gap-3">{children}</div>;
};

export default CardContainer;
