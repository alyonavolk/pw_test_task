import * as React from "react";
import "./articleCard.scss";
import Btn from "../btn/Btn";
import Arrow from "../arrow/arrow";

const CardArticle = ({
  image,
  title,
  children,
  link,
  date,
  tags = [],
  classes = ""
}) => {
  return (
    <div className={`cardArticle${classes ? " " + classes : ""}`}>
      {
        image
          ? <a href={link} className={"cardArticle__image"}>
              <img src={image} alt="articleImg" />
              <h4 className={"cardArticle__date"}>{date}</h4>
            </a>
          : <time className={"h4 cardArticle__date"}>{date}</time>
      }
      <div className={"cardArticle__content"}>
        <a href={link}><h3 className={"cardArticle__title h4"} title={title}>{title}</h3></a>
        <hr />
        <p className={"cardArticle__descr"}>{children}</p>
        <div className={"cardArticle__contentBottom"}>
          <div className={"cardArticle__tags"}>
          {tags.map((label, key) => {
            return <Btn key={key} Tag="a" href="/">{label}</Btn>;
          })}
          </div>
          <div className={"cardArticle__readMore"}>
            <Btn Tag="a" href={link} classes={"btn--isInherit"} rightIcon={<Arrow />}>Читать далее</Btn>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CardArticle;
