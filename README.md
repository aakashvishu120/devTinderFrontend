# DevTinder FrontEnd
- Create a a vite + react application
- Remove unecessary code and create a Hello World App
- install tailwind css
- install Daisy UI
- Add navbar component to App.jsx
- Create a NavBar.jsx separate Component file
- Install react router dom
- create browserRouter > Routes > Route=/body > routeChildren
- create an outlet in your body component
- we have to give outlet for childern to display ,when deal with multiple path children , oulet only be placed inside parent component
- create  a footer 
- create a login page
- in package.json add add --host next to the vite like 
  "scripts": {
    "dev": "vite --host",
  }
  this will run the server in 127.0.0.1 as well

- Install Axios
- CORS - INstall cors in backend => add middleware to with configurations : origin, credentials : true
- When you are making api call so pass axios => {withCredentials : true}
- Install react-redux + @reduxjs/toolkit => configureStore => provider => createSlice => add reducer to store
- Add redux DevTools in Chrome
- Login and see if your data is coming properly in the redux store
- navbar should update as soon as user loggedin
- Refactor our code to add contasnt file + create a component folder
- you should not be able to access other routess wihtout login
- If token is not present, redirect user to login page
- logout
- Profile