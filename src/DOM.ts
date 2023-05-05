// Using a selector
/**
 * HTMLInputElement for input fields
 * HTMLElement for a normal markup to maybe add an event listner or style
 * HTMLButtonElement for buttons
 * e.t.c......
 */
const data = document.querySelector('.input') as HTMLInputElement;
console.log('data', data.value);

// Working with EventListners

const preventDefault = document.querySelector('.dark');

preventDefault?.addEventListener('click', (event) => {
    const target = event.target as HTMLInputElement;
    console.log('event', target.value);
});
