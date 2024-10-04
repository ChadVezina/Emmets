// Define the URL for the Bacon Ipsum API
const apiUrl = "https://baconipsum.com/api/?type=meat-and-filler";

// Make a GET request to the API
fetch(apiUrl)
    .then((response) => {
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        // Convert the response to JSON
        return response.json();
    })
    .then((data) => {
        // Handle the JSON data
        console.log(data);
        // Insert the first paragraph into an element with id 'bacon'
        document.getElementById("bacon").innerText = data[0];
    })
    .catch((error) => {
        // Handle any errors
        console.error("There was a problem with the fetch operation:", error);
    });
