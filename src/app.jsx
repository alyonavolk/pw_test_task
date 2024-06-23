import React from "react";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Btn from "./components/btn/Btn";
import CardArticle from "./components/articleCard/articleCard";
import Slider from "./js/slider";

const breadcrumbs = [
  { label: "Главная", link: "/" },
  { label: "О компании", link: "/" },
  { label: "Разработка дизайн-системы digital-проектов", link: "/" }
];

const btns = [
  { label: "Все", active: true },
  { label: "Металлургия", active: false },
  { label: "Интерактивный класс", active: false },
  { label: "Авиация и БПЛА", active: false },
  { label: "Выставка", active: false },
  { label: "Профессионалитет", active: false },
  { label: "Лаборатория", active: false },
  { label: "Макетная мастерская", active: false },
  { label: "Судостроение", active: false }
];

const App = () => {
  const swiper = new Slider(".swiper");

  return (
		<div className={"layout"}>
      <div className={"layout__header"}>
        <header className="header">
          <div className="header__inner container">
            <div className="header__logo">
              <img src="./images/logo.svg" alt="logo" />
            </div>
          </div>
        </header>
      </div>
      <main className={"layout__main"}>
        <div className={"layout__sections"}>
          <section className={"section"}>
            <div className={"container"}>
              <Breadcrumbs items={breadcrumbs} />
              <div className={"section__header isMt50"}><h1>Статьи с картинкой</h1></div>
              <div className={"articles"}>
                <div className="articles__filter isMb50">
                  {btns.map(({ label, active }, key) => {
                    return <Btn key={key} Tag="a" classes={active ? "active" : ""} href="/">{label}</Btn>;
                  })}
                </div>
                <div className="articles__items">
                  <CardArticle title="Промежуточные итоги работы с федеральной программой «Профессионалитет»" tags={["CEO", "Мероприятие"]} date={"23.05.23"} image={"./images/article1.png"} link={"/"}>
                    Чтобы вам было проще разработать акцию, мы собрали семь распространённых идей. Их можно адаптировать для большинства типов бизнеса. Мы покажем примеры акций из digital — от компании, которая продвигает сайты.Чтобы вам было проще разработать акцию, мы собрали  Чтобы вам было проще разработать акцию, мы собрали семь распространённых идей. Их можно адаптировать для большинства типов бизнеса. Мы покажем примеры акций из digital — от компании, которая продвигает сайты.Чтобы вам было проще разработать акцию, мы собрали.
                  </CardArticle>

                  <div className="articles__slider swiper">
                    <div className="swiper-wrapper" navigation>
                      <div className="swiper-slide">
                        <CardArticle classes={"cardArticle--isSmall"} title="Промежуточные итоги работы с федеральной программой «Профессионалитет»" tags={["CEO", "Мероприятие"]} date={"23.05.23"} image={"./images/article1.png"} link={""}>
                        Чтобы вам было проще разработать акцию, мы собрали семь распространённых идей. Их можно адаптировать для большинства типов бизнеса. Мы покажем примеры акций из digital — от компании, которая продвигает сайты.Чтобы вам было проще разработать акцию, мы собрали  Чтобы вам было проще разработать акцию, мы собрали семь распространённых идей. Их можно адаптировать для большинства типов бизнеса. Мы покажем примеры акций из digital — от компании, которая продвигает сайты.Чтобы вам было проще разработать акцию, мы собрали.
                      </CardArticle>
                      </div>
                      <div className="swiper-slide">
                        <CardArticle classes={"cardArticle--isSmall"} title="Промежуточные итоги работы с федеральной программой «Профессионалитет»" tags={["CEO", "Мероприятие"]} date={"23.05.23"} image={"./images/article1.png"} link={""}>
                        Чтобы вам было проще разработать акцию, мы собрали семь распространённых идей. Их можно адаптировать для большинства типов бизнеса. Мы покажем примеры акций из digital — от компании, которая продвигает сайты.Чтобы вам было проще разработать акцию, мы собрали  Чтобы вам было проще разработать акцию, мы собрали семь распространённых идей. Их можно адаптировать для большинства типов бизнеса. Мы покажем примеры акций из digital — от компании, которая продвигает сайты.Чтобы вам было проще разработать акцию, мы собрали.
                      </CardArticle>
                      </div>
                      <div className="swiper-slide">
                        <CardArticle classes={"cardArticle--isSmall"} title="Промежуточные итоги работы с федеральной программой «Профессионалитет»" tags={["CEO", "Мероприятие"]} date={"23.05.23"} image={"./images/article1.png"} link={""}>
                        Чтобы вам было проще разработать акцию, мы собрали семь распространённых идей. Их можно адаптировать для большинства типов бизнеса. Мы покажем примеры акций из digital — от компании, которая продвигает сайты.Чтобы вам было проще разработать акцию, мы собрали  Чтобы вам было проще разработать акцию, мы собрали семь распространённых идей. Их можно адаптировать для большинства типов бизнеса. Мы покажем примеры акций из digital — от компании, которая продвигает сайты.Чтобы вам было проще разработать акцию, мы собрали.
                      </CardArticle>
                      </div>
                    </div>
                    <Btn classes="swiper-button-prev"></Btn>
                    <Btn classes="swiper-button-next"></Btn>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={"section"}>
            <div className={"container"}>
              <div className={"section__header"}><h1>Новости без картинки</h1></div>
              <div className={"articles"}>
                <div className="articles__filter isMb50">
                  {btns.map(({ label, active }, key) => {
                    return <Btn key={key} Tag="a" classes={active ? "active" : ""} href="/">{label}</Btn>;
                  })}
                </div>
                <div className="news__items">
                  <div className="news__slider">
                    <CardArticle classes={"cardArticle--isSmall"} title="Промежуточные итоги работы с федеральной программой «Профессионалитет»" tags={["CEO", "Мероприятие"]} date={"23.05.23"} link={"/"}>
                      Чтобы вам было проще разработать акцию, мы собрали семь распространённых идей. Их можно адаптировать для большинства типов бизнеса. Мы покажем примеры акций из digital — от компании, которая продвигает сайты.Чтобы вам было проще разработать акцию, мы собрали  Чтобы вам было проще разработать акцию, мы собрали семь распространённых идей. Их можно адаптировать для большинства типов бизнеса. Мы покажем примеры акций из digital — от компании, которая продвигает сайты.Чтобы вам было проще разработать акцию, мы собрали.
                    </CardArticle>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <div className={"layout__footer"}>
        <footer className="footer">
          <div className="footer__inner container">
              <div className="footer__logo">
                <img src="./images/logoDark.svg" alt="logo" />
                <p>Разработка и производство инновационной учебной продукции для вузов, колледжей и учебных центров предприятий.</p>
              </div>
          </div>
        </footer>
      </div>
		</div>
  );
};

export default App;
