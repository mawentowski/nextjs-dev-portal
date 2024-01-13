// UI wrapper for button

export default function ButtonPlain({ children, className }) {
    const classes = 'p-0 border-0 bg-transparent ' + className;
    return <button className={classes}>{children} </button>;
}
