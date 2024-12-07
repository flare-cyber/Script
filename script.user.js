// ==UserScript==
// @name         Add DumpChatState Button
// @namespace    flare
// @match        https://www.torn.com/*
// @version      1.5
// @description  Adds a button at the bottom of the page to execute window.dumpchatstate()
// @author       flare
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Wait for the page to fully load
    window.addEventListener('load', () => {
        // Create a container div for the button
        const container = document.createElement('div');
        container.style.textAlign = 'center'; // Center the button horizontally
        container.style.margin = '20px 0';   // Add spacing above the button
        container.style.paddingBottom = '20px'; // Add padding below the button

        // Create a button
        const button = document.createElement('button');
        button.textContent = 'Dump Chat State';
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

        // Append the button to the container
        container.appendChild(button);

        // Append the container as the last child of the body
        document.body.appendChild(container);

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
    });
})();
