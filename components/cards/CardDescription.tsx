import { ReactNode } from "react";

const CardDescription = ({ children }: { children: ReactNode }) => {
    return <p className="text-gray-500 text-sm my-2">{children}</p>;
};

export default CardDescription;
