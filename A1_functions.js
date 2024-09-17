/*
Full Name: Devansh Shah (041132970)
File Name: A1_design.css
Date: 5/07/2024 
Subject: CST8285
Description: This is the JavaScript file which helps add functionality to my Portfolio Website (Assignment 1)
*/

document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the class 'project' and store them in a NodeList.
    const projects = document.querySelectorAll(".project");

    // Get the element that displays the project counter.
    const counter = document.getElementById("counter");

    // Initialize the current project index to 0 (first project).
    let currentProject = 0;

    // Function to update the displayed project and the counter text.
    function updateProjectDisplay() {
        // Loop through all project elements.
        projects.forEach((project, index) => {
            // Show the project if its index matches the current project index, otherwise hide it.
            project.style.display = index === currentProject ? "block" : "none";
        });

        // Update the counter text to show the current project number and total number of projects.
        counter.textContent = `Project ${currentProject + 1} of ${projects.length}`;
    }

    // Add an event listener to the 'Previous' button.
    document.getElementById("prev").addEventListener("click", function() {
        // Decrement the current project index, wrapping around to the last project if necessary.
        currentProject = (currentProject === 0) ? projects.length - 1 : currentProject - 1;

        // Update the displayed project and counter.
        updateProjectDisplay();
    });

    // Add an event listener to the 'Next' button.
    document.getElementById("next").addEventListener("click", function() {
        // Increment the current project index, wrapping around to the first project if necessary.
        currentProject = (currentProject === projects.length - 1) ? 0 : currentProject + 1;

        // Update the displayed project and counter.
        updateProjectDisplay();
    });

    // Initial call to display the first project and update the counter when the page loads.
    updateProjectDisplay();
});
