// Declare an empty array to store flashcards
let flashcards = [];
// Declare a variable to store the current index of the flashcard
let currentCardIndex = 0;

// Add an event listener to the "Add Card" button
document.getElementById("addCardButton").addEventListener("click", addFlashcard);
// Add an event listener to the "Next" button
document.getElementById("nextButton").addEventListener("click", showNextFlashcard);
// Add an event listener to the "Previous" button
document.getElementById("prevButton").addEventListener("click", showPreviousFlashcard);

// Function to add a flashcard to the array
function addFlashcard() {
  // Get the value of the question input field
  const question = document.getElementById("questionInput").value;
  // Get the value of the answer input field
  const answer = document.getElementById("answerInput").value;

  // If both the question and answer fields are not empty
  if (question && answer) {
    // Create a flashcard object with the question and answer
    const flashcard = { question, answer };
    // Add the flashcard to the array
    flashcards.push(flashcard);
    // Display the flashcard
    displayFlashcard(flashcard);
    // Set the current index to the last flashcard in the array
    currentCardIndex = flashcards.length - 1;
  }
}

// Function to display a flashcard
function displayFlashcard(flashcard) {
  // Get the flashcard container element
  const flashcardContainer = document.querySelector(".flashcard");
  // Get the front and back elements of the flashcard
  const flashcardFront = flashcardContainer.querySelector(".flashcard-front");
  const flashcardBack = flashcardContainer.querySelector(".flashcard-back");

  // Set the text content of the front and back elements to the question and answer
  flashcardFront.textContent = flashcard.question;
  flashcardBack.textContent = flashcard.answer;
}

// Function to show the next flashcard
function showNextFlashcard() {
  // If there are no flashcards in the array, return
  if (flashcards.length === 0) return;

  // Increment the current index and wrap around to the beginning if necessary
  currentCardIndex = (currentCardIndex + 1) % flashcards.length;
  // Display the flashcard at the current index
  displayFlashcard(flashcards[currentCardIndex]);

  // Get the flashcard container element
  const flashcardContainer = document.querySelector(".flashcard");
  // If the flashcard container has the "flipped" class, remove it
  if (flashcardContainer.classList.contains("flipped")) {
    flashcardContainer.classList.remove("flipped");
  }
}

// Function to show the previous flashcard
function showPreviousFlashcard() {
  // If there are no flashcards in the array, return
  if (flashcards.length === 0) return;

  // Decrement the current index and wrap around to the end if necessary
  currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
  // Display the flashcard at the current index
  displayFlashcard(flashcards[currentCardIndex]);

  // Get the flashcard container element
  const flashcardContainer = document.querySelector(".flashcard");
  // If the flashcard container has the "flipped" class, remove it
  if (flashcardContainer.classList.contains("flipped")) {
    flashcardContainer.classList.remove("flipped");
  }
}

// Add an event listener to the flashcard container to toggle the "flipped" class
document.querySelector(".flashcard").addEventListener("click", function () {
  this.classList.toggle("flipped");
});