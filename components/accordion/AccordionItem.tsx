import { ReactNode } from "react";

const AccordionItem = (props: { children?: ReactNode }) => {
    return (
        <div className="accordion-item max-h-0 duration-500 overflow-hidden transition-all">
            <div className="p-4">{props.children}</div>
        </div>
    );
};

export default AccordionItem;
