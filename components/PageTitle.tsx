import { ReactNode } from "react";

const PageTitle = ({ children }: { children: ReactNode }) => {
    return <h2 className="text-2xl font-bold">{children}</h2>;
};

export default PageTitle;
