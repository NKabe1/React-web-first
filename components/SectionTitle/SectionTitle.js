import "./SectionTitle.scss";

export function SectionTitle ({title, subtitle, mode}) {
    return (
        <div className="second-title-container">
            <div className={(mode === "large" && "section-title-large") || (mode === "medium" && "section-title-medium")}>{title}</div>
            <div className="section-subtitle">{subtitle}</div>
        </div>
    );
}