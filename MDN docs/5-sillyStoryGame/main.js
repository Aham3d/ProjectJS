// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomizebtn = document.querySelector('.randomize');
const story = document.querySelector('.story');

// takes the array and returns reandom itemss stored inside array
function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
};

// 2. RAW TEXT STRINGS
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

let insertX = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas'
];

let insertY = [
    'the soup kitchen',
    'Disney land',
    'the white House'
];

let insertz = [
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away'
]

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomizebtn.addEventListener('click', result);

function result() {
    // task 1
    let newStory = storyText;
    // task 2
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertz);
    // task 3
    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);

    if(customName.value !== '') {
        const name = customName.value;
        // task 4   
        newStory = newStory.replaceAll('Bob', name);
    }

    if(document.getElementById("uk").checked) {
        const weight = `${Math.round(300*0.0714286)} stone`;
        const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
        newStory = newStory.replaceAll('94 fahrenheit', temperature);
        newStory = newStory.replaceAll('300 pounds', weight);

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}