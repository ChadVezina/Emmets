# Bacon Emmet

## Description

`bacon.js` is a script that fetches a random paragraph of Bacon Ipsum text from the Bacon Ipsum API and inserts it into all HTML elements with the title attribute set to 'bacon'.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ChadVezina/Emmets.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Emmets
    ```
## Alternative Installation

1. Include the CDN in your HTML file:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/bacon-emmet@version/bacon.js"></script>
   ```
2. Add an HTML element with the title attribute set to 'bacon':
    ```html
    <p title="bacon"></p>
    ```
   
## Usage

1. Include `bacon.js` in your HTML file:
    ```html
    <script src="bacon.js"></script>
    ```
2. Add an HTML element with the title attribute set to 'bacon':
    ```html
    <p title="bacon"></p>
    ```

## How It Works

1. `bacon.js` defines the URL for the Bacon Ipsum API:
    ```js
    const apiUrl = "https://baconipsum.com/api/?type=meat-and-filler";
    ```
2. It makes a GET request to the API using the Fetch API:
    ```js
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            document.querySelectorAll("[title='bacon']").forEach((element) => {
                element.innerText = data[0];
            });
        })
        .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
        });
    ```
3. If the request is successful, it inserts the first paragraph of the fetched Bacon Ipsum text into all elements with the title attribute set to 'bacon'.

## License

This project is licensed under the ISC License.

## Author

Chad Vezina

## Repository

[GitHub Repository](https://github.com/ChadVezina/Emmets)

## Bugs

For bug reports, please visit the [issues page](https://github.com/ChadVezina/Emmets/issues).
