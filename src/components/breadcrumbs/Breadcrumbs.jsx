// import "./breadcrumbs.scss";
import React from "react";

const Breadcrumbs = ({ items = [] }) => {
  return <nav className={"breadcrumbs"} aria-label="breadcrumb">
    <ol className={"breadcrumbs__list"} itemscope itemtype="https://schema.org/BreadcrumbList">
    {items.map((val, index) => {
      return (
        <li className={"breadcrumbs__item"} itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        {index + 1 === items.length
          ? <span key={index} className={"breadcrumbs__link"} itemprop="name">{val.label}</span>
          : <a key={index} className={"breadcrumbs__link"} href={val.link} itemprop={"item"}><span itemprop="name">{val.label}</span></a>
        }
        <meta itemprop="position" content={val.content} />
      </li>
      );
    })}
	</ol>
  </nav>;
};

export default Breadcrumbs;
