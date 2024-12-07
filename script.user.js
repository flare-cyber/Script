// ==UserScript==
// @name         Add DumpChatState Button
// @namespace    flare
// @match        https://www.torn.com/*
// @version      1.1
// @description  Adds a button to the bottom-left of the page to execute window.dumpchatstate()
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
        button.style.padding = '10px 20px';
        button.style.backgroundColor = '#007BFF';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.fontSize = '16px';
        button.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';

        // Add a hover effect
        button.onmouseover = () => button.style.backgroundColor = '#0056b3';
        button.onmouseout = () => button.style.backgroundColor = '#007BFF';

        // Append the button to the body
        document.body.appendChild(button);

        // Add a click event to the button
        button.addEventListener('click', () => {
                console.log('Executing window.dumpchatstate()...');
                if (typeof window.dumpChatState == 'function'){
                    console.log("success");
                }
               else {
                   console.log("error");
               }
        });
    });
})();
