// Fetch a random quote from the FreeAPI and update the page
function fetchBackgroundImage() {
    const randomImageUrl = `https://picsum.photos/400/600?random=${new Date().getTime()}`;
    document.body.style.background = `url('${randomImageUrl}') no-repeat center center/cover`;
}

async function fetchQuote() {
    try {
        fetchBackgroundImage();
        // Send a GET request to fetch a random quote
        const response = await fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random", {
            method: 'GET',
            headers: { accept: 'application/json' }
        });
        // Parse the response as JSON
        const data = await response.json();

        // Check if 'data.data.content' exists; if so, wrap it in quotes, otherwise use a default message
        const quoteText = data.data?.content ? `"${data.data.content}"` : "No quote available.";
        // Check if 'data.data.author' exists; if so, prepend a hyphen, otherwise display '- Unknown'
        const authorText = data.data?.author ? `- ${data.data.author}` : "- Unknown";

        // Update the DOM elements with the fetched quote and author
        document.getElementById("quote").innerText = quoteText;
        document.getElementById("author").innerText = authorText;
    } catch (error) {
        // Log any errors that occur during the fetch operation
        console.error("Error fetching quote:", error);
        // Display error messages on the page
        document.getElementById("quote").innerText = "Failed to fetch quote.";
        document.getElementById("author").innerText = "";
    }
}

// Copy the current quote and author text to the clipboard
function copyToClipboard() {
    // Concatenate the quote and author text from the page
    const text = document.getElementById("quote").innerText + " " + document.getElementById("author").innerText;
    // Write the text to the clipboard and alert the user upon success
    navigator.clipboard.writeText(text).then(() => {
        alert("Quote copied to clipboard!");
    });
}

// Share the current quote on Twitter
function shareOnTwitter() {
    // Encode the quote and author text for use in a URL
    const text = encodeURIComponent(document.getElementById("quote").innerText + " " + document.getElementById("author").innerText);
    // Create a Twitter share URL with the encoded text
    const url = `https://twitter.com/intent/tweet?text=${text}`;
    
    window.open(url, "_blank");
}

// Export the quote section as a PNG image using html2canvas
function exportQuote() {
    // Select the container element that holds the quote
    const container = document.querySelector(".container");
    // Use html2canvas to render the container as a canvas element
    html2canvas(container).then(canvas => {
        // Create a temporary link element for downloading the image
        const link = document.createElement("a");
        // Set the link's href to the canvas data URL (PNG format)
        link.href = canvas.toDataURL("image/png");
        // Specify the filename for the downloaded image
        link.download = "quote.png";
        // Simulate a click on the link to trigger the download
        link.click();
    });
}

// Fetch an initial quote when the page loads
fetchQuote();
