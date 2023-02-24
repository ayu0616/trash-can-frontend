const Card = ({ children }: { children: React.ReactNode }) => {
    return <div className="p-3 bg-white shadow-sm hover:shadow active:shadow-inner no-select group">{children}</div>;
};

export default Card;
