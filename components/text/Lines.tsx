const __DIVIDE__ = "___DIVIDE___";

const Lines = (props: { children: string, className?: string }) => {
    return (
        <div className={props.className}>
            {props.children
                .replaceAll("。", "。" + __DIVIDE__)
                .replaceAll("？", "？" + __DIVIDE__)
                .split(__DIVIDE__)
                .map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
        </div>
    );
};

export default Lines;
