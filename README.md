# cs628-PE-Honorine

# 1) PE01-Resume
This application is a web application of a resume. This app can be explained using the Input-Process-Output (IPO) model:

## Input 
Use "npx create-react-app" to create the client side. Create and configure Resume.js and Resume.css in the src directory. Styling is done in Resume.css with the background color being rgba(#bdfb04).

## Process
For the react component structure, Resume.js imports Resume.css and has the structured HTML-like JSX format. 
This data is rendered in semantic sections such as div, h1, p:This is done using React's component system.
React rendering is done by App.js integrating the Resume components. The browser then loads and renders the resume data.
In the command line rum "npm start" and it starts a development server, it then processes the React code using Webpack, which bundles it for a live rendering.

# Output
The output is a responsive, visually styled webpage that displays the user's resume as shown in the screenshot below:

![alt text](Resume.png)




#  2) PE02-MovieList
The MovieList web application is illustrated as follows:

## Input

-Definition of an array of movie objects having properties such as 'Title', 'Genre' and 'ReleaseYear'
-The dropdown filter for selecting rhe user interactions is established.
-When you click on a movie item it triggers an alert displaying the movie title

## Process

-Using React hooks ('useState') the application initializes a state to manage the movie list and presently selected genre.
-When the user selects a genre from the dropdown, the system filters the movie list dynamically with reference to the selected genre:
-When "All Genres" is selected, the full list of movies is displayed. If not only movies matching the selected genre are rendered.
-When the user clicks on a movie, an event handler captures the click and triggers an alert which displays the title of the selected movie.
-The `MovieList` component renders the UI with JSX, dynamically updating based on state changes.

## Output

The for the various scenarios is illustrated as follows:

-When the filtered list of movies is displayed, showing their `Title`, `Genre`, and `ReleaseYear` the image is shown below:

![MovieList](https://github.com/user-attachments/assets/65b92812-78a9-4da6-8467-b027b1217686)


-An alert is displayed with the movie title when a user clicks on a movie item and this is shown in the image below:

![Alert](https://github.com/user-attachments/assets/7f11085e-fb5c-4bfe-b0ac-435cd7d953c8)



-When user filters based on the genre, application should filter the movie list and this is illustratedin the image below:

![based_genre](https://github.com/user-attachments/assets/2fa6550f-595a-4966-a88f-805ea1cd5e1f)
