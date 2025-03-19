# InspireMe - Random Quote Generator📝

A simple web application that displays a random quote and allows you to generate a random background image.
![image](https://github.com/user-attachments/assets/6e91dbbf-5522-4600-91ac-5d6df5667482)


## Features

1. **Random Quote**: Fetches a random quote from [FreeAPI](https://api.freeapi.app).
2. **Random Background Image**: Uses [Picsum](https://picsum.photos/) to set a random background image.Since its free it might be slow sometime , You can also use unsplash api but it takes few business days to activate your account so i use this in my project.
3. **Copy to Clipboard**: Copies the currently displayed quote to the clipboard.
4. **Share on Twitter**: Opens a new tab to tweet the quote.
5. **Export as Image**: Exports the quote section as a PNG image.

## Technologies Used

- **HTML5** for structure
- **CSS3** for styling
- **JavaScript** for fetching and dynamic updates
- **[FreeAPI](https://api.freeapi.app)** for quotes
- **[Picsum](https://picsum.photos/)** for random background images

## How to Use

1. **Clone or Download** the project files to your local machine.
2. Open the `index.html` file in your preferred web browser.
3. You should see a default quote and background image from Picsum.
4. Use the buttons to:
   - **New Quote**: Fetch a new random quote.
   - **New Background**: Update the background image with a new random image from Picsum.
   - **Copy**: Copy the quote text to your clipboard.
   - **Share on Twitter**: Open a new tweet with the current quote.
   - **Export**: Save the quote as an image (`quote.png`).

## Setup and Configuration

- No special setup is required to run this project—just open `index.html` in your browser.
- The background image is generated using Picsum. If you wish to adjust the dimensions of the random image, modify the URL in the CSS:
  ```css
  background: url('https://picsum.photos/400/600') no-repeat center center/cover;
