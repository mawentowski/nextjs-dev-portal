// UI wrapper for button

export default function ButtonPlain({ children, className }) {
    const classes = 'bg-transparent border-0 p-0 ' + className;
    return <button className={classes}>{children} </button>;
}
