
/* This is my first code
 * this is what it does
 
console.log('ccxxxx');

//import all:
import stats from './stats.js';
var counts = [1,3,5,7];
console.log(counts);

console.log(stats.meanOfValues(counts));
console.log( 'e6 module', stats );
*/

import { fetchCurrentWeather } from './weather.js';
async function displayWeather() {
  try {
    const weatherData = await fetchCurrentWeather('New York');
    const weatherElement = document.getElementById('weather');

    weatherElement.textContent = `Weather in ${weatherData.city}, ${weatherData.country}: ${weatherData.temperature}°C, ${weatherData.description}`;
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}
displayWeather();

import { fetchRandomQuote } from './zenquotes.js';
async function displayQuote() {
    const quoteData = await fetchRandomQuote();
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
  
    quoteElement.innerHTML = `<p>"${quoteData.q}"</p>`;
    authorElement.innerHTML = `<p>- ${quoteData.a}</p>`;
    //quoteElement.textContent = `"${quoteData.q}"`;
    //authorElement.textContent = `- ${quoteData.a}`;
  }
  
displayQuote();
  
const objects = document.getElementsByClassName('interactive-object');
  // Create a mapping between object IDs and sound IDs
  const objectSoundMap = {
    object1: 'stone',
    object2: 'stone',
    object3: 'temple',
    object4: 'tree',
    object5: 'windchimes',
    object6: 'bubble',
    object7: 'bubble2',
    object8: 'bubble',
    object9: 'bubble2',
  };

// Use Array.from() to convert the HTMLCollection to an array for using forEach()
Array.from(objects).forEach((object) => {
    object.addEventListener('click', () => {
      // Get the sound ID for the current object
      const soundId = objectSoundMap[object.id];
  
      // Play the corresponding sound
      const sound = document.getElementById(soundId);
      sound.currentTime = 0;
      sound.play();
  
      // Add the animation class to the object
      object.classList.add('animated');
  
      // Remove the animation class after the animation duration 
      setTimeout(() => {
        object.classList.remove('animated');
      }, 1000);
  
      // Check if the clicked object is object5
      if (object.id === 'object5') {
        // Delay the swing animation until the animated animation has finished
        setTimeout(() => {
          object.classList.toggle('swing-animation');
        }, 1000);
      }
  
      console.log(`Clicked on object with ID: ${object.id}`);
    });
  });
  




  