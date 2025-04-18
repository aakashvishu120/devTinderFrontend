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
- logout feature
- get the feed and add the feed in the redux store
- build the user card on feed 
- Edit Profile Feature
- Show Toast Message on update Profile
- New Page  - See all my connection Request
- New Page - See all my requests
- Feature -Accept/Reject connection Request
- Send/Ignore the user card from the feed
- SignUp
- E2E Testing




# DeployMent
- SignUp on AWS
- Launch instance
- chmod 400 secret.pem
- these comon work equivalent to chmod 400
    # Source: https://stackoverflow.com/a/43317244
    $path = ".\aws-ec2-key.pem"
    # Reset to remove explict permissions
    icacls.exe $path /reset
    # Give current user explicit read-permission
    icacls.exe $path /GRANT:R "$($env:USERNAME):(R)"
    # Disable inheritance and remove inherited permissions
    icacls.exe $path /inheritance:r

- Connected to the machine using SSH COmmand
- install node using this command 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
- exit then login again
- install node version using this command
nvm install 22.11.0
- git clone both frontend and backend code

FrontEnd : 
- npm install - this will install all the dependency like vite
- npm run build- this will bundle the project and placed inside a dist folder
- sudo apt update
- sudo apt install nginx  - nginx is a web server
- sudo systemctl start nginx - to start nginx this command will be used
- sudo systemctl enable nginx - to up and run nginx
- copy code from dist(build files) to /var/www/html
-  sudo scp -r dist/* /var/www/html - scp means copy , -r means recursive all content inside folders
- Enable port 80 of your instance
- now open public ip of your remote project http://13.61.194.221/


Backend : 
- updated DB password
- allowed ec2 instance public IP on mongodb server
- npm install pm2 -g : this pm2(process manager) will run the project forever in background

some userful commands regd pm2
- pm2 start npm -- start : this will start the pm2
- pm2 logs : to see pm2 logs
- pm2 list : to see name of the process
- pm2 flush <name>:
- pm2 stop <name> :
- pm2 delete npm : 
- pm2 start npm --name "devTinder-backend" -- start : rename
- mapping http://13.61.194.221:7777/ to this http://13.61.194.221/api/
- config nginx : sudo nano /etc/nginx/sites-available/default


    location /api/ {
        proxy_pass         http://127.0.0.1:7777/;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
    }
- restart nginx : sudo systemctl restart nginx
- Modify the BASEURL in the frontend project to /api