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

## Output
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




#  3) PE03-TodoList 
The TodoList web app is a task management application. 

## Input

-The ToDo List App allows users to enter a task description using an input field. 
-When the user types a task and clicks the "Add Task" button, the application captures the input and updates the list of tasks. 
-Each task is displayed with a "Delete" button. This allows users to remove tasks from the list.

## Process

-The application is built using React and manages state with the useState hook. 
-When a user adds a task, it is appended to an array of tasks stored in the state. 
-Clicking the "Delete" button removes the corresponding task from the list by filtering the tasks array. 
-The app dynamically renders the updated task list using the .map() function.
-Component-based architecture is utilized, with separate components for task input, task list, and individual tasks.

## Output

-The application displays a list of tasks entered by the user and each task appears with a "Delete" button for removal.
-When a task is added, it is immediately shown in the list. Upon deletion, the task is removed instantly. 
-The app provides a responsive and interactive user interface for managing tasks efficiently as shown in the screenshot of the result:


![TodolistAPP](https://github.com/user-attachments/assets/0f97e943-8040-4475-9877-96cc067bef81)



#  4) PE04-Cities
The cities web application is a react application that gives information about cities the USA and its population.


## Input
-To interact with this app users need to provide data such as a city's name, country, population, and other details when adding a new city. 
-Moreover, they can click on a city in the cities list to view detailed information. 
-Input is processed through user forms and clickable links.


## Process
-When the data is entered or by clicking on a city, the application routes the user to the corresponding page using React Router. 
-When a city is added, the user’s input is captured and stored in the application’s state.
-The useParams hook is used to dynamically fetch and display the details of the selected city.
-After adding a city, redirection occurs, which brings the user back to the cities list.


## Output
-The application ensures smooth navigation through these interactions as shown below:


![PE04_Cities_01](https://github.com/user-attachments/assets/51d25fe9-6ac6-4c26-ac46-2e556ebbe8cc)



 
-After adding a city, the list updates, and after redirection, the user is brought back to the cities list view as shown in the following image:


![PE04_Cities_02](https://github.com/user-attachments/assets/75c06b1a-a152-487b-9e35-f60ffddf4a01)



-The output includes a dynamically updated cities list, with each city showing its relevant details in a visually appealing layout which is shown in the image below:


![PE04_Cities_03](https://github.com/user-attachments/assets/83d2416b-31c4-456d-8346-ee45d6fbe230)





#  5) PE05-RecipeFinder

##  Input
The Recipe Finder application allows users to interact with recipes through various input mechanisms. Users can:
- Enter new recipes by providing details such as name, ingredients, and cooking instructions via an input form.
- Click on a recipe from the list to view detailed information.
- Edit an existing recipe by modifying its details.
- Delete a recipe by selecting the appropriate option.
- Navigate between different pages using the UI, powered by React Router.


## Process
The application processes user input through the following steps:
- Front-end Handling: The React-based UI captures user input and sends requests to the backend.
- Backend Processing: The Node.js and Express server handles CRUD (Create, Read, Update, Delete) operations.
- Database Operations: The MongoDB Atlas database stores and retrieves recipe data via the MongoDB Node.js driver.
- Routing & State Management: React Router ensures seamless navigation, while API responses update the UI dynamically.


## Output
The application provides the following outputs:
- A list of stored recipes displayed on the homepage.



  ![RecipeList](https://github.com/user-attachments/assets/2964608b-39f3-4ff7-82f2-9e4080925970)



- Visual confirmation when a recipe is added, updated, or deleted. 

  

![Add_recipe](https://github.com/user-attachments/assets/65ca31c7-d109-429d-a549-2edabb1d627f)



![Update_Recipe](https://github.com/user-attachments/assets/284350ec-7951-458a-a28f-a0e8a46cd2bc)


