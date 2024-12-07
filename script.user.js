// ==UserScript==
// @name         Add DumpChatState Button
// @namespace    flare
// @match        https://www.torn.com/*
// @version      1.2
// @description  Adds a mobile-friendly button to the bottom-left of the page to execute window.dumpchatstate()
// @author       flare
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Wait for the page to fully load
    window.addEventListener('load', () => {
        // Create a button
        const button = document.createElement('button');
        button.textContent = 'Dump Chat State';
        button.style.position = 'fixed';
        button.style.bottom = '10px'; // Distance from the bottom of the screen
        button.style.left = '10px';   // Distance from the left of the screen
        button.style.zIndex = 1000;
        button.style.padding = '8px 16px'; // Adjust padding for mobile
        button.style.backgroundColor = '#007BFF';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.fontSize = '14px'; // Slightly smaller font for mobile
        button.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
        button.style.maxWidth = '90%'; // Limit width for smaller screens
        button.style.textAlign = 'center';

        // Add touch feedback for mobile
        button.ontouchstart = () => button.style.backgroundColor = '#0056b3';
        button.ontouchend = () => button.style.backgroundColor = '#007BFF';

        // Append the button to the body
        document.body.appendChild(button);

        // Add a click event to the button
        button.addEventListener('click', () => {
            console.log('Executing window.dumpchatstate()...');
            if (typeof window.dumpChatState === 'function') {
                window.dumpChatState();
                console.log('Success: dumpChatState executed.');
            } else {
                console.log('Error: dumpChatState function not found.');
            }
        });

        // Adjustments for smaller screens
        const mediaQuery = window.matchMedia('(max-width: 600px)');
        if (mediaQuery.matches) {
            button.style.fontSize = '12px';
            button.style.padding = '6px 12px';
        }
    });
})();
