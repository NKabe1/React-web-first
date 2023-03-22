import "./Button.scss";

export function Button ({children, mode}) {
    return <button className={`button ${(mode === "primary" && "primary-button") || 
    (mode === "secondary" && "secondary-button") || 
    (mode === "text" && "text-button")}`}>{children}</button>
}