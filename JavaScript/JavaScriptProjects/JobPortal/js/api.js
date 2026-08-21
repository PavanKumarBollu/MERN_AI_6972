"use strict";

// post get  put delete Authorization FormData Errors
const API_BASE_URL = "https://jobportalbackend-2x4z.onrender.com/api";

function getUser() {
  try {
    return JSON.parse(localStorage.getItem("jobportal_user")) || null;
  } catch (error) {
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

async function api(path, options = {}) {
  const headers = new Headers(options.headers || {});

  if (options.body !== undefined && !(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  const token = getToken();

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  let data = null;

  try {
    const response = await fetch(API_BASE_URL + path, { ...options, headers });
    data = await response.json();
  } catch (error) {
    data = null;
  }

  if (!response.ok) {
    const error = new Error(
      data?.message || `request failed (${response.status})`,
    );

    error.status = response.status;
    error.data = data;
    throw error;
  }
  return data;
}

const API = {
  get(path) {
    return api(path, { method: "GET" });
  },
  post(path, body) {
    return api(path, {
      method: "POST",
      body: body instanceof FormData ? body : JSON.stringify(body),
    });
  },
};
