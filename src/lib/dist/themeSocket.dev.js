"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initThemeSocket = initThemeSocket;

var _socket = require("socket.io-client");

var _applyTheme = require("./applyTheme");

function initThemeSocket() {
  var socket = (0, _socket.io)("https://hirezy-backend.onrender.com");
  console.log("Calling socket");
  socket.on("theme-updated", function (theme) {
    (0, _applyTheme.applyTheme)(theme);
    console.log("Socket emitted", theme);
  });
}