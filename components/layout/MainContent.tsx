import { ReactNode } from "react";

const MainContent = ({ children }: { children: ReactNode }) => {
    return <div className="flex flex-1 overflow-y-auto mx-4 md:mx-6 flex-col">{children}</div>;
};

export default MainContent;
