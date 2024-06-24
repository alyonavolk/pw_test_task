import "./breadcrumbs.scss";
import React from "react";

const Breadcrumbs = ({ items = [] }) => {
  return <nav className={"breadcrumbs"} aria-label="breadcrumb">
    <ol className={"breadcrumbs__list"} itemScope itemType="https://schema.org/BreadcrumbList">
    {items.map((val, index) => {
      return (
        <li className={"breadcrumbs__item"} itemScope="itemListElement" itemType="https://schema.org/ListItem">
        {index + 1 === items.length
          ? <span key={index} className={"breadcrumbs__link"} itemScope="name">{val.label}</span>
          : <a key={index} className={"breadcrumbs__link"} href={val.link} itemScope={"item"}><span itemScope="name">{val.label}</span></a>
        }
        <meta itemScope="position" content={val.content} />
      </li>
      );
    })}
	</ol>
  </nav>;
};

export default Breadcrumbs;
