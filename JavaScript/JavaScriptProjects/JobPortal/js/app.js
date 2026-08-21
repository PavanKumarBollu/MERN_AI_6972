"use strict";

// UI Manipulations
function get(id) {
  return document.getElementById(id);
}

function getall(className) {
  return document.getElementsByClassName(className);
}

function setText(element, value) {
  if (!element) return;

  element.textContent =
    value === null || value === undefined ? "" : String(value);
  // element.textContent = value !== null || value !== undefined ? String(value) : "";
}

function show(element, visible = true) {
  if (!element) return;
  element.classList.toggle("hidden", !visible);
}

function addClass(element, className) {
  if (!element) return;
  element.classList.add(className);
}

function removeClass(element, className) {
  if (!element) return;
  element.classList.remove(className);
}

function toggleClass(element, className) {
  if (!element) return;
  element.classList.toggle(className);
}

function getValue(element) {
  if (!element) return;
  // return element.value;
  return element?.value?.trim();
}

function setValue(element, value) {
  if (!element) return;
  // element.value = value === null || value === undefined ? "" : String(value);
  element.value = value ?? "";
}
// 1 done

// 2 start
function toast(message, error = false) {
  const element = get("toast");
  if (!element) return;
  setText(element, message);
  element.className = "toast toast.show toast." + (error ? "error" : "");

  clearTimeout(window.toastTimer);

  window.window.toastTimer = setTimeout(() => {
    element.className = "toast";
  }, 3000);

  // console.log(element);
}
// toast("Login succesfull");

function setStatus(element, status) {
  if (!element) return;
  element.className = "status";
  if (status) {
    element.classList.add("status-" + status);
  }
  setText(element, status || "");
}

function setMatchScore(element, score) {
  if (!element) return;
  element.classList.remove("match-good", "match-mid", "match-low");
  if (score >= 70) {
    element.classList.add("match-good");
  } else if (score >= 40) {
    element.classList.add("match-mid");
  } else {
    element.classList.add("match-low");
  }
}

function formatDate(value) {
  if (!value) return;
  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// 2 end

//3 start
//  routing React router || redux

const pages = document.querySelectorAll(".page");
// console.log(pages);

function getRoute() {
  return location.hash.replace(/^#/, "") || "/";
}
// getRoute();

function showPages(pageName) {
  pages.forEach((page) => {
    show(page, page.id === "page-" + pageName);
  });
}
async function render() {
  const route = getRoute();
  console.log(route);
  if (route === "/" || route === "home") {
    showPages("home");
    return;
  }
  if (route === "/login") {
    showPages("login");
    return;
  }
  if (route === "/register") {
    showPages("register");
    return;
  }
  if (route === "/jobs") {
    showPages("jobs");
    return;
  }
  if (route === "/my-applications") {
    showPages("my-applications");
    return;
  }
  if (route === "/my-jobs") {
    showPages("my-jobs");
    return;
  }
  if (route === "/post-job") {
    showPages("post-job");
    return;
  }
  if (route === "/admin/users") {
    showPages("admin/users");
    return;
  }
}

window.addEventListener("hashchange", render);
//3 end

// 4 start

// {
// email
// name
// role
// token
// }
// save the user to the localstorage
// get the user from the localstorage
function getUser() {
  try {
    return JSON.parse(localStorage.getItem("jobportal_user")) || null;
  } catch (error) {
    // toast("user not found", true);
    // console.log("something wrong in getting the user", errror);
    return null;
  }
}

function setUser(user) {
  if (user) {
    localStorage.setItem("jobportal_user", JSON.stringify(user));
  } else {
    localStorage.removeItem("jobportal_user");
  }
}

function getToken() {
  return getUser()?.token || "";
}

function isLoggedIn() {
  return !!getUser();
}

function requireLogin() {
  if (!isLoggedIn()) {
    location.hash = "#/login";
    toast("Please Login First", true);
    return false;
  }
  return true;
}

function requireRole(role) {
  const user = getUser();
  if (!user) {
    location.hash = "#/login";
    toast("Please Login First", true);
    return false;
  }
  if (user.role !== role) {
    location.hash = "#/";
    toast("you don't have access to this page", true);
    return false;
  }
  return true;
}

// 4 end

// 5 part start
// name;
// email;
// phone;
// password;
// skills;
// role

function setupRegister() {
  const form = get("register-form");
  if (!form) return;
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    console.log("test");
    const data = Object.fromEntries(new FormData(form));
    try {
      console.log(data);
      const user = await API.post("/auth/register", data);
      setUser(user);
      toast("Account Created SuccesFully");
      form.reset();
      location.hash = "#/dashboard";
    } catch (error) {
      toast(error.message, true);
    }
  });
}
function setupLogin() {
  const form = get("login-form");
  if (!form) return;
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    console.log("test");
    const data = Object.fromEntries(new FormData(form));
    try {
      // console.log(data);
      const user = await API.post("/auth/login", data);
      setUser(user);
      toast("Login SuccesFully");
      form.reset();
      location.hash = "#/dashboard";
    } catch (error) {
      toast(error.message, true);
    }
  });
}
setupRegister();
setupLogin();
// 5 part end
