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
  return location.hash.replace(/^#/, "" || "/");
}
// getRoute();

function showPages(pageName) {
  pages.forEach((page) => {
    show(page, page.id === "page-" + pageName);
  });
}
async function render() {
  const route = getRoute();
  if (route === "/" || route === "home") {
    showPages("home");
    return;
  } else if (route === "/login") {
    showPages("login");
    return;
  }
}

window.addEventListener("hashchange", render);
//3 end
