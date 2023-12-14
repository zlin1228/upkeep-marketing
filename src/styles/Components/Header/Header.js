import styled from 'styled-components';

export const HeaderTop = styled.div`
  display: none;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  padding: 15px 0;
  transition: all 0.2s;

  &.dark,
  &.light {
    .content-holder {
      justify-content: center;
      text-align: center;
    }
  }

  &.dark {
    background-color: transparent;

    .close-btn {
    }
  }

  &.light {
    background: linear-gradient(270deg, #f8fbff 0%, #e6f2ff 100%);
    background: #fff;
    &.bg-trans {
      background: transparent;
    }
    p,
    .close-btn {
    }
  }

  .content-holder {
    position: relative;
    text-align: center;
    align-items: center;
  }

  p {
    margin-bottom: 0;
    font-size: 16px;
  }

  .close-btn {
    position: absolute;
    right: 0;
    top: -14px;
    padding: 0;
    width: auto;
    box-shadow: initial;
    background-color: transparent;
    margin-right: 14px;
    svg {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 1200px) {
    .container {
      max-width: 1350px;
    }
  }

  @media screen and (max-width: 575px) {
    p {
      max-width: 100%;
      width: 240px;
      font-size: 14px;
    }
  }
`;
export const HeaderContainer = styled.div`
  &.nav-expended {
    .dark {
      transition-delay: 0.5s;
      .navbar-brand-logo {
        filter: brightness(0) invert(1);
        transition-delay: 0.5s;
        @media (max-width: 992px) {
          transition-delay: 0.2s;
        }
      }
    }
  }
`;
export const DemoHeader = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1000;
  background: transparent;
  text-align: center;
  padding: 40px 0 0;
  .navbar-brand-logo {
    width: 132px;
  }
  &.dark {
    .navbar-brand-logo {
      filter: brightness(0) invert(1);
    }
  }
`;
export const HeaderSection = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1000;
  top: 55px;
  padding: 6px 0;
  &.top-header-removed {
    top: 0;
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: background 0.5s, padding 0.5s;
  @media (max-width: 992px) {
    transition: background 0s ease-in-out, padding 0s ease-in-out;
  }
  background: transparent;
  &.dark,
  &.light {
    border-bottom: initial;
  }
  .navbar-brand-logo {
    transition: all 0.5s;
    @media (max-width: 992px) {
      transition: all 0s ease-in-out;
    }
  }
  &.dark {
    background-color: transparent;
    @media (max-width: 992px) {
      transition-delay: 0.2s;
    }
    .navbar-light .navbar-nav .nav-link,
    .nav-link {
      color: #fff;
      &:after {
        filter: brightness(0) invert(1);
      }
    }

    .navbar-brand-logo {
      filter: brightness(0) invert(1);
    }
    .navbar-toggler .icon-bar {
      background: #fff;
    }
  }
  &.light {
    background: linear-gradient(270deg, #f8fbff 0%, #e6f2ff 100%);
    background: #fff;
    &.bg-trans {
      background: transparent;
      &.header-scroll {
        background: #fff;
      }
    }
  }
  &.header-scroll {
    position: fixed;
    top: 0;
    padding: 0;
    background: #fff;
    box-shadow: rgba(11, 26, 33, 0.08) 0px 3px 10px;
    animation-name: slide;
    animation-duration: 0.7s;
    animation-timing-function: ease;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    transform: translate(0px, -80px);
    transition: height 0.25s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s,
      background 0.25s ease-in-out 0s;
    z-index: 1000;
    #basic-navbar-nav .dropdown-menu {
      top: 80px !important;
    }
    @keyframes slide {
      0% {
        transform: translateY(-80px);
      }
      to {
        transform: translate(0);
      }
    }
  }

  .navbar {
    padding: 0;
  }
  #basic-navbar-nav {
    &:after {
      content: '';
      position: absolute;
      bottom: 10px;
      height: 2px;
      width: 0;
      background: #007bff;
      transition: all 0.3s;
      left: var(--ulleft);
    }
    &.active {
      &:before {
        opacity: 1;
        height: 810px;
        background: #fff;
        z-index: -1;
        box-shadow: 0 50px 60px 0 rgba(36, 50, 66, 0.15);
      }
      &:after {
        width: var(--ulwidth);
        left: var(--ulleft);
      }
    }

    &.active {
      .dropdown-nav-holder {
        transform: translate(40px, 0);
        transition-delay: 0s;
        transition-duration: 0s;
      }
    }
    .dropdown-nav {
      padding: 0 56px;
      @media (max-width: 992px) {
        padding: 0;
      }
    }
  }
  .navbar-brand {
    margin-right: 60px;
    width: 150px;
    height: 80px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .logo-width {
    margin-right: 60px;
    width: 120px;
    height: 80px;
  }

  .navbar-light .navbar-nav .nav-link,
  .nav-link {
    padding: 20px 25px;
    color: #33394b;
    font-size: 15px;
    font-weight: 600;

    &:after {
      filter: brightness(0) invert(0);
    }
    &:hover {
      color: #007bff;
      &:after {
        filter: unset;
      }
    }
    &[aria-expanded='true'] {
      color: #007bff;
      &:after {
        filter: unset;
      }
    }
    &[aria-expanded='false'] + .dropdown-menu {
      height: 0 !important;
      opacity: 0;
    }
  }
  &.blue.dark .nav-link:hover {
    color: #004a99;
  }
  .nav-item {
    position: initial;
  }

  .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 100%;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 1.26;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    transition: background-color 0.5s, color 0.5s ease-in-out;

    &:focus {
      outline: none;
    }
  }
  &.dark .nav-link {
    transition-delay: 0.5s;
  }
  .schedule-holder {
    display: flex;
    align-items: center;
  }

  #basic-navbar-nav .dropdown-menu {
    top: 86px;
    display: block;
    padding: 0;
    width: 100%;
    height: 0;
    background-color: #fff;
    border: 0;
    border-radius: 0;
    pointer-events: none;

    max-height: calc(100vh - 93px);
    width: calc(100% + 112px);
    left: -56px;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    background: #fff;
    transition: height 0.5s, opacity 0.5s;
    transition-delay: 0.52s;
    @media screen and (max-width: 991px) {
      transition: height 0.3s, opacity 0.3s;
      transition-delay: 0.3s;
    }
    &.show {
      opacity: 1;
      height: auto;
      z-index: 999;
      transition-delay: 0s;
      @media screen and (min-width: 992px) {
        height: 765px;
      }
      pointer-events: initial;

      &:before {
        height: 100%;
        opacity: 1;
        transition: height 0.35s cubic-bezier(0, 0, 0.16, 0.96),
          opacity 0.35s cubic-bezier(0, 0, 0.16, 0.96);
      }

      .dropdown-nav-holder {
        opacity: 1;
        transform: initial !important;
        transition: opacity 0.45s cubic-bezier(0, 0, 0.16, 0.96),
          transform 0.4s cubic-bezier(0, 0, 0.16, 0.96);
      }
    }

    .nav-title {
      position: relative;
      padding-bottom: 24px;
      text-transform: uppercase;

      &:before,
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        height: 1px;
        transform-origin: left;
        transition: transform 0.4s cubic-bezier(0, 0, 0.16, 0.96);
        background: #ddd;
      }

      &:after {
        opacity: 0.8;
        transform: scaleX(0);
      }
    }
  }

  .expended #basic-navbar-nav.active .dropdown-menu {
    transition-delay: 0s;
    transition: unset;
  }
  .collapsed #basic-navbar-nav .nav-link {
    transition-delay: 0s;
    transition-duration: 0.3s;
  }
  @keyframes slidenavAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
    0% {
      opacity: 0;
    }
  }

  @-webkit-keyframes slidenavAnimation {
    0% {
      -webkit-opacity: 0;
    }
    100% {
      -webkit-opacity: 1;
    }
    0% {
      -webkit-opacity: 0;
    }
  }

  .dropdown-nav-holder {
    margin-top: 46px;

    padding-left: 25px;
    @media screen and (max-width: 991px) {
      padding: 0;
    }
    opacity: 0;
    transform: translateY(-40px);
    transition: transform 120ms cubic-bezier(1, 0.01, 1, 0.99) 0s,
      opacity 120ms cubic-bezier(1, 0.01, 1, 0.99) 0s;

    &:first-child {
      transition-delay: 200ms;
    }

    &:nth-child(2) {
      transition-delay: 250ms;
    }

    &:nth-child(3) {
      transition-delay: 300ms;
    }

    &:hover .nav-title:after {
      transform: scaleX(1);
    }
  }

  .dropdown-toggle {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      right: 2px;
      border: unset;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%23007BFF' d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z' %3E%3C/path%3E%3C/svg%3E")
        0 0 no-repeat;
    }
    &[aria-expanded='true']:after {
      transform: rotate(180deg);
    }
  }
  .card-title {
    color: #33394b;
    position: relative;
    display: inline-block;

    &:after {
      position: absolute;
      content: '';
      top: 9px;
      left: 100%;
      margin-left: 12px;
      transform: rotate(45deg);
      width: 6px;
      height: 6px;
      border-top: 2px solid #007bff;
      border-right: 2px solid #007bff;
      transition: margin-left 0.3s ease, opacity 0.1s ease 0.2s;
      opacity: 0;
    }
    &:before {
      position: absolute;
      content: '';
      top: 11px;
      left: 100%;
      margin-left: 12px;
      width: 8px;
      border-bottom: 2px solid #007bff;
      opacity: 0;
      width: 0;
      transition: all 0.3s ease;
    }
    svg {
      display: none;
    }
  }

  .card-item {
    &:hover .card-title {
      &:before {
        opacity: 1;
        width: 10px;
      }
      &:after {
        margin-left: 18px;
        opacity: 1;
        transition: margin-left 0.3s ease, opacity 0.1s ease;
      }
    }
  }

  .card-row {
    display: flex;
  }

  .card-column:not(:first-child) {
    margin-left: 25px;
  }

  .card-item {
    position: relative;
    display: flex;
    padding: 12px 15px 12px 0;
    width: 270px;
    &.sm-item {
      width: 200px;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -10px;
      z-index: -1;
      width: calc(100% + 16px);
      height: 100%;
      opacity: 0;
      border-radius: 3px;
      transform: scale(1.1);
      transition: opacity 80ms linear, transform 80ms ease-in;
      background: rgb(230, 242, 255);
    }

    &:hover {
      &:before {
        opacity: 1;
        transform: scale(1);
        transition: opacity 0.2s linear, transform 0.2s ease-out;
      }
      .card-title {
        color: #007bff;
      }
    }

    .icon-holder {
      margin-right: 15px;
      padding-top: 2px;
      .card-icon {
        width: 20px;
        position: relative;
        top: -2px;
      }
    }

    .card-title {
      font-size: 0.833rem;
      margin-bottom: 8px;
      white-space: nowrap;
      margin: 0;
      svg {
        width: 20px;
        height: 20px;
        //display:none;
      }
    }

    .card-desc {
      color: #707481;
      margin-bottom: 0;
    }
  }
  .red .card-item {
    color: rgb(255, 59, 48);
    &:before {
      background: rgb(255, 235, 234);
    }
    .card-title {
      &:before,
      &:after {
        border-color: rgb(255, 59, 48);
      }
    }
    &:hover {
      .card-title {
        color: rgb(255, 59, 48);
      }
    }
  }
  .yellow .card-item {
    color: #efc861;
    &:before {
      background: #fdf9ef;
    }
    .card-title {
      &:before,
      &:after {
        border-color: #efc861;
      }
    }
    &:hover {
      .card-title {
        color: #efc861;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    .container {
      max-width: 1350px;
    }
  }

  @media (min-width: 1200px) and (max-width: 1349px) {
    .navbar-brand,
    .logo-width {
      margin-right: 15px;
    }
    .dropdown-menu {
      padding-left: 186px;
    }

    .card-column:not(:first-child) {
      margin-left: 15px;
    }

    .card-item {
      width: 275px;

      &:before {
        left: -5px;
        width: calc(100% + 10px);
      }
    }
  }
  @media (min-width: 992px) {
    .dropdown-nav-wrapper {
      flex-wrap: nowrap !important;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .navbar-brand,
    .logo-width {
      margin-right: 0;
    }
    .dropdown-menu {
      padding-left: 100px;
    }
    .navbar-light .navbar-nav .nav-link,
    .nav-link {
      padding: 0 15px;
      font-size: 14px;
    }

    .dropdown-nav-holder {
      margin-top: 25px;
    }

    .card-column:not(:first-child) {
      margin-left: 15px;
    }

    .card-item {
      padding: 10px 10px 10px 0;
    }
    .dropdown-nav {
      align-items: end !important;
      justify-content: flex-end !important;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .container {
      max-width: 971px;
    }
    .dropdown-menu {
      padding-left: 0;
    }
  }
  @media (min-width: 576px) and (max-width: 991px) {
    .navbar-collapse {
      padding: 0 60px !important;
    }
  }
  @media (min-width: 320px) and (max-width: 991px) {
    .navbar-toggler {
      padding: 0;
      width: 27px;
      border: 0;
      outline: none;
      &:hover {
        background: transparent;
      }
      .icon-bar {
        display: block;
        width: 22px;
        height: 2px;
        border-radius: 1px;
        margin: 4px 0 4px 0;
        transition: all 0.2s;
        background: #33394b;
        /* custom .navbar-dark .icon-bar background */

        /* .navbar open top .icon-bar rotated down 45° */
        &:nth-of-type(1) {
          transform: rotate(45deg);
          transform-origin: 10% 10%;
        }

        /* .navbar open middle .icon-bar invisible */
        &:nth-of-type(2) {
          opacity: 0;
          filter: alpha(opacity=0);
        }

        /* .navbar open bottom .icon-bar rotated up 45° */
        &:nth-of-type(3) {
          transform: rotate(-45deg);
          transform-origin: 10% 90%;
        }
      }

      /* styles for when .navbar is closed */
      &.collapsed {
        .icon-bar {
          /* .navbar closed top .icon-bar no rotation - straight */
          &:nth-of-type(1) {
            transform: rotate(0);
          }
          /* .navbar open middle .icon-bar visible */
          &:nth-of-type(2) {
            opacity: 1;
            filter: alpha(opacity=100);
          }
          /* .navbar open bottom .icon-bar no rotation - straight */
          &:nth-of-type(3) {
            transform: rotate(0);
          }
        }
      }
    }
    #basic-navbar-nav {
      &:after {
        content: unset;
      }
      .dropdown-menu {
        padding-left: 0;
        width: 100%;
        max-height: unset;
        box-shadow: unset;
        overflow: hidden;
      }
      .dropdown-toggle:after {
        top: 24px;
        right: 15px;
      }
      hr {
        display: none;
      }
    }
    .nav-item.show {
      .nav-link {
        border: 0 !important;
      }
    }

    .nav-link {
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      margin-left: -20px;
      margin-right: -20px;
      &[aria-expanded='true'] {
        background: rgba(0, 123, 255, 0.1);
      }
    }

    .navbar-light .navbar-nav .nav-link {
      justify-content: start;
      padding: 20px;
    }

    .schedule-holder {
      flex-direction: column;

      .nav-link {
        justify-content: start;
        padding: 20px 0;
        width: 100%;
      }

      form {
        width: 100%;
      }
    }

    .dropdown-nav-wrapper {
      flex-wrap: wrap;
      padding-bottom: 15px;
    }

    .dropdown-nav-holder {
      width: 100%;

      &:not(:last-child) {
        margin: 25px 0 0;
      }
    }

    .dropdown-menu {
      overflow: hidden;

      &:before {
        display: none;
      }
    }

    .card-row {
      flex-wrap: wrap;
    }

    .card-column:not(:first-child) {
      margin-left: 0;
    }

    .card-column,
    .card-item {
      width: 100%;
    }
    .card-item {
      border-bottom: 1px solid #ebebed;
    }
    form {
      padding: 25px;
    }

    &.top-header-removed,
    &.header-scroll {
      .navbar-collapse {
        top: 79px;
        height: calc(100vh - 79px) !important;
      }
    }

    .navbar-collapse {
      position: fixed;
      padding: 0 20px;
      top: 131px;
      left: 0px;
      right: 0px;
      height: calc(100% - 131px) !important;
      overflow-x: hidden;
      transition: 0.2s ease-in-out;
      background: #fff;
      .nav-link {
        color: #33394b !important;
      }
    }
  }

  @media screen and (max-width: 575px) {
    .navbar-collapse {
      top: 145px;
      height: calc(100% - 145px) !important;
    }
  }
  @media screen and (max-width: 991px) {
    .nav-link {
    }
    .sensor-wrapper {
      display: none;
    }
    &.dark .navbar-toggler-icon {
      filter: brightness(0) invert(1);
    }
  }
  &.blue .btn {
    background-color: #0056b3;
    &:hover {
      background-color: #00448d;
    }
  }
`;
export const NavSection = styled.div`
  padding: 0 56px;
  @media (max-width: 1100px) {
    padding: 0 15px;
  }
  @media (max-width: 575px) {
    padding: 0 15px;
  }
`;
