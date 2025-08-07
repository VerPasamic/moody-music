// Mood Music Advisor
// This function suggests music based on weather and time of day

function suggestMusic(weather, timeOfDay) {
    // Use conditionals to recommend music
    if (weather === "rainy") {
        if (timeOfDay === "morning") {
            return "Relaxing jazz for a rainy morning";
        } else if (timeOfDay === "night") {
            return "Peaceful sleep playlist for rainy nights";
        } else {
            return "Chill acoustic songs for rainy days";
        }
    } else if (weather === "sunny") {
        // TODO: Add recommendations for sunny weather at different times of day
        // Remember to use if/else if/else statements here
        
    } else {
        // TODO: Add a default recommendation or handle other weather types
        // You can add more else if statements before this else statement
        
    }
}

// Test your function with these examples:
console.log(suggestMusic("rainy", "morning"));  // Should print: Relaxing jazz for a rainy morning
console.log(suggestMusic("sunny", "morning"));  // What will this print?