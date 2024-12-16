/* eslint-disable react/no-unescaped-entities */
import MeIcon from "./assets/Me.svg";
import placehold1 from "./assets/panel1.svg";
import placehold2 from "./assets/panel2.svg";
import placehold3 from "./assets/panel3.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import Card from "./Compountes/Card";

function App() {
  const [fixed, setFixed] = useState(false);
  const [showCards, setShowCards] = useState(false);
  function setNavFixed() {
    if (window.scrollY >= 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  window.addEventListener("scroll", setNavFixed);

  return (
    <>
      {/* Header */}
      <header> 
        <nav
          className={
            fixed
              ? "navbar navbar-expand-lg navbar-light navBg py-3 navFixed"
              : "navbar navbar-expand-lg navbar-light navBg py-3"
          }
          id="navBg"
        >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse justify-content-center align-items-center"
              id="navbarNav"
            >
              <ul className="navbar-nav text-center nav-orig">
                <li className="nav-item p-2 btn-item">
                  <a
                    className="nav-link d-flex align-items-center text-light"
                    href="#home"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="White"
                      className="bi bi-house-fill me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                      <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                    </svg>
                    Home
                  </a>
                </li>
                {/* <li className="nav-item p-2 btn-item">
                  <a
                    className="nav-link d-flex align-items-center text-light"
                    href="#about"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="White"
                      className="bi bi-info-circle-fill me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                    </svg>
                    About
                  </a>
                </li> */}
                <li className="nav-item dropdown p-2 btn-item">
                  <a
                    className="nav-link d-flex align-items-center text-light"
                    href="#projects"
                    onClick={() => setShowCards(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="White"
                      className="bi bi-people-fill me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    </svg>
                    Projects
                  </a>
                </li>
                <li className="nav-item dropdown p-2 btn-item">
                  <a
                    className="nav-link d-flex align-items-center text-light"
                    href="#contact"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="22"
                      fill="white"
                      className="bi bi-envelope-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                    </svg>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="wrapper">
        {/* Main Section */}
        <section className="hero py-5" id="home">
          <div className="d-flex align-items-center div-container">
            <div className="flex-grow-1 pe-5 text-section">
              <h1
                className="display-4"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                Hi, I'm Eslam
              </h1>
              <p
                className="lead"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1500"
              >
                <strong>I'm Eslam </strong>, a front-end dev student with skills
                in HTML, CSS, JavaScript, React, Bootstrap, and Tailwind. I’m
                looking for a chance to dive into real world projects whether
                it’s an internship or a junior role, part-time or full-time.
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="1500"
              >
                <button
                  type="button"
                  className="btn btn-primary btnMore"
                  onClick={() => setShowCards(true)}
                >
                  <strong>See more</strong> about me &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                </button>
              </div>
            </div>
            <div
              className="image-container px-2"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1500"
            >
              <img src={MeIcon} width="500"></img>
            </div>
          </div>
          <div className={`cardsHidden ${showCards ? "cardsHiddenShow" : ""}`}>
            <h1>My Projects</h1>
            <div
              className={`d-flex align-items-center div-container gap-5 cardsHidden ${
                showCards ? "cardsHiddenShow" : ""
              }`}
              id="projects"
            >
              <Card
                image={placehold2}
                desc={"This was an early template"}
                name={"Template 1"}
                link={"https://esreiad.github.io/Web-Template/"}
              />
              <Card
                image={placehold1}
                desc={"A movie template"}
                name={"Template 2"}
                link={"https://esreiad.github.io/Aflamy-Template/"}
              />
              <Card
                image={placehold3}
                desc={"A Photography template"}
                name={"Template 3"}
                link={"https://esreiad.github.io/KayanTemplate/"}
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="ocean">
            <div className="wave"></div>
            <div className="wave2"></div>
          </div>
          <div className="footerInfo" id="contact">
            <div className="d-flex align-items-center div-container  footerLogo">
              <div
                className="footerSocial"
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                <div className="d-flex align-items-center div-container">
                  <a href="mailto:esreiad@gmail.com" target="_blank">
                    <div className="socialItem youtube">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-envelope-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/eslam-reiad-745432288/"
                    target="_blank"
                  >
                    <div className="socialItem facebook">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                      </svg>
                    </div>
                  </a>
                  <a href="https://github.com/ESReiad" target="_blank">
                    <div className="socialItem github">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </div>
                  </a>
                  {/* <div className="socialItem youtube">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </div> */}
                </div>
                <p>© 2024 Eslam Reiad. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

AOS.init();

export default App;
