import { useRef, useState } from "react";

import { ReactNode } from "react";

const AccordionTitle = (props: { children?: ReactNode }) => {
    const [show, setShow] = useState(false);
    const ref = useRef<HTMLHeadingElement>(null);

    const onClick = () => {
        setShow((p) => !p);

        const container = ref.current?.parentElement;
        const item = container?.querySelector<HTMLElement>(".accordion-item");
        const icon = ref.current?.querySelector(".accordion-icon");
        if (item) {
            const scrollHeight = item.scrollHeight;
            if (show) {
                container?.classList.remove("show");
                item.style.maxHeight = "0px";
                ref.current?.classList.add("bg-slate-50");
                ref.current?.classList.remove("bg-slate-200");
                icon?.classList.add("rotate-[540deg]");
            } else {
                container?.classList.add("show");
                item.style.maxHeight = `${scrollHeight}px`;
                ref.current?.classList.remove("bg-slate-50");
                ref.current?.classList.add("bg-slate-200");
                icon?.classList.remove("rotate-[540deg]");
            }
        }
    };

    return (
        <>
            <div className="accordion-title p-4 bg-slate-50 text-lg font-bold transition-all duration-500 flex items-center gap-2" ref={ref} onClick={onClick}>
                {props.children}
            </div>
            <input readOnly type="checkbox" className="hidden" checked={show} />
        </>
    );
};

export default AccordionTitle;
