import "./BoxTitleSubtitle.scss";

export function BoxTitleSubtitle ({boxTitle, boxSubtitle}) {
    return (
        <div className="box-container">
            <div className="box-title">{boxTitle}</div>
            <div className="box-subtitle">{boxSubtitle}</div>
        </div>
    )
}