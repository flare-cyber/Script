// ==UserScript==
// @name         Modernize Legacy Tables (Soft Black)
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Automatically applies clean, soft-black CSS borders to outdated HTML tables.
// @author       You
// @match        https://www.torn.com/admin*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Inject the CSS directly into the page
    GM_addStyle(`
        table[border="1"] {
            border-collapse: collapse !important;
            border-spacing: 0 !important;
        }

        /* The color #333333 is used here for a soft, charcoal black */
        table[border="1"], table[border="1"] td, table[border="1"] th {
            border: 1px solid #333333 !important;
            padding: 3px !important;
        }

        /* Remove the default gray background from empty divider cells if they exist */
        table[border="1"] td[bgcolor="#DFDFDF"] {
            background-color: transparent !important;
            border-left: none !important;
            border-right: none !important;
        }
    `);

    // Clean up the DOM by removing old attributes
    const legacyTables = document.querySelectorAll('table[border="1"]');
    legacyTables.forEach(table => {
        table.removeAttribute('cellspacing');
        table.removeAttribute('cellpadding');
    });

})();
