import React, { useState } from "react";
import style from "./ContentCard.module.scss";
import ExpandIcon from "../../assets/svg/expand-icon.svg";
import CloseIcon from "../../assets/svg/close-icon.svg";

export const ContentCard = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded((bool) => !bool);
  };

  let expandElement;
  if (props.secondaryContent.length) {
      expandElement = (<div onClick={toggleExpand}>
      <img src={ExpandIcon} className={style["expand"]} />
    </div>)
  }
  if (isExpanded && props.secondaryContent.length) {
    return (
      <div
        className={`app-row app-row-lg--between app-col-md-18 app-col-lg-20 ${style["content-card-expanded"]}`}
      >
        <div className={style["content-card-header"]}>
          <span className={style["eyebrow"]}>{props.eyebrow}</span>
          <div onClick={toggleExpand}>
            <img src={CloseIcon} className={style["close"]} />
          </div>
        </div>

        {props.secondaryContent.map(section => 
          <div className={`app-col-md-18 app-col-lg-5 ${style["section"]}`}>
          <div className={style["image"]}>
         <img src={section.image.url}/>
           </div>
            <p className={style["section-eyebrow"]}>{section.eyebrow}</p>
          <p className={style["title"]}>{section.title}</p>
          <p className={style["description"]}>{section.description} </p>
          <a className={style["link"]} href={section.externalLink} target="">{section.externalLinkText}</a>
          </div>
        )}

      </div>
    );
  }
  return (
    <div
      className={`app-col-md-18 app-col-lg-5 ${style["content-card"]}`}
    >
      <div className={style["content-card-header"]}>
        <span className={style["eyebrow"]}>{props.eyebrow}</span>
        {expandElement}
      </div>
      <div className={style["image"]}>
        <img src={props.image} />
      </div>
      <p className={style["title"]}>{props.title}</p>
      <p className={style["description"]}>{props.description} </p>
      <a className={style["link"]} href={props.linkUrl} target="">{props.link}</a>
    </div>
  );
};

export default ContentCard;
