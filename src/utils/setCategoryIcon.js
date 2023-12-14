import React from "react";
import {
  FaCircle,
  FaClock,
  FaCommentAlt,
  FaUserFriends,
  FaWifi,
  FaShieldAlt,
  FaUserGraduate,
  FaTasks,
} from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

export const setCategoryIcon = (categoryName) => {
  const noSwitch = (categoryName) => {
    if (categoryName?.includes?.("Security")) {
      return <FaShieldAlt />;
    } else if (categoryName?.includes?.("Sensor")) {
      return <FaWifi />;
    } else if (categoryName?.includes?.("Asset")) {
      return <FaTasks />;
    } else if (categoryName?.includes?.("Relationship")) {
      return <FaUserFriends />;
    } else return <FaCircle />;
  };

  switch (categoryName) {
    case "Other":
      return <FiMoreHorizontal />;
    case "Education":
      return <FaUserGraduate />;
    case "Reliability Consultant":
      return <FaUserFriends />;
    case "Communication":
      return <FaCommentAlt />;
    case "Customer Relationship Management Software":
      return <FaUserFriends />;
    case "Enterprise Resource Planning (ERP)":
      return <FaClock />;
    default:
      return noSwitch(categoryName);
  }
};
