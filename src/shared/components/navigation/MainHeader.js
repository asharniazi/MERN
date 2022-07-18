import React from "react";
import ApplicationLogo from "./ApplicationLogo";
import UserMessages from "./UserMessages";
import UserNotification from "./UserNotification";
import UserProfileMenu from "./UserProfileMenu";

export default function MainHeader() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <ApplicationLogo />
      <nav class="header-nav ms-auto">
        <ul class="d-flex align-items-center">
          <li class="nav-item d-block d-lg-none">
            <a class="nav-link nav-icon search-bar-toggle " href="/#">
              <i class="bi bi-search"></i>
            </a>
          </li>

          <UserNotification />

          <UserMessages />

          <UserProfileMenu />
        </ul>
      </nav>
    </header>
  );
}
