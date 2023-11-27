import React from "react";
//import { NavLink } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div id="tm-sidebar" class="tm-sidebar">
          <nav class="tm-nav">
            <button
              class="navbar-toggler"
              type="button"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div>
              <div class="tm-brand-box">
                <h1 class="tm-brand">Cristian Carreño</h1>
              </div>
              <ul id="tm-main-nav">
                <li class="nav-item">
                  <a href="#home" class="nav-link current">
                    <div class="triangle-right"></div>
                    <i class="fas fa-home nav-icon"></i>
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#gallery" class="nav-link">
                    <div class="triangle-right"></div>
                    <i class="fas fa-images nav-icon"></i>
                    Gallery
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#about" class="nav-link">
                    <div class="triangle-right"></div>
                    <i class="fas fa-user-friends nav-icon"></i>
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#contact" class="nav-link">
                    <div class="triangle-right"></div>
                    <i class="fas fa-envelope nav-icon"></i>
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="https://paypal.me/templatemo"
                    class="nav-link external"
                    target="_parent"
                    rel="sponsored"
                  >
                    <div class="triangle-right"></div>
                    <i class="fas fa-external-link-alt nav-icon"></i>
                    External
                  </a>
                </li>
              </ul>
            </div>
            <footer class="mb-3 tm-mt-100">
              Design:{" "}
              <a href="https://templatemo.com" target="_parent" rel="sponsored">
                TemplateMo
              </a>
            </footer>
          </nav>
        </div>
      </div>
    </div>
  );
};
