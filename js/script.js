// Copyright (c) 2024 Calista.E All rights reserved
//
// Created by: Calista.E
// Created on: Mar 2024
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const streetName = document.getElementById("Street-name").value
  const streetNumber = parseInt(document.getElementById("Street-number").value)

  // output
  document.getElementById("user-info").innerHTML =
    "Your address is: " + streetNumber + " " + streetName + "."
}
