import { ReactNode } from "react";

const MainContent = ({ children }: { children: ReactNode }) => {
    return <div className="flex flex-1 overflow-y-auto m-6 flex-col">{children}</div>;
};

export default MainContent;
