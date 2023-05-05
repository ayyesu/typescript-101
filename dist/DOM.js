"use strict";
// Using a selector
/**
 * HTMLInputElement for input fields
 * HTMLElement for a normal markup to maybe add an event listner or style
 * HTMLButtonElement for buttons
 * e.t.c......
 */
var data = document.querySelector('.input');
console.log('data', data.value);
// Working with EventListners
var preventDefault = document.querySelector('.dark');
preventDefault === null || preventDefault === void 0 ? void 0 : preventDefault.addEventListener('click', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
