type AccordionProps = Partial<{
    children: React.ReactNode;
}>;

const Accordion = (props: AccordionProps) => {
    return <div className="border-x border-t last:border-b no-select">{props.children}</div>;
};

export default Accordion;
