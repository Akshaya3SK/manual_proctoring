mkdir proctoring-app
cd proctoring-app
/**
  inside the proctoring-app folder put all the files that are present in this repo.
**/
proctoring-app
│
├── main.js
├── preload.js
├── package.json
│
└── renderer
     │
     ├── login.html
     ├── dashboard.html
     ├── exam.html
     │
     └── js
          ├── login.js
          ├── dashboard.js
          └── exam.js
     └── css
          ├── style.css
         



npm install electron --save-dev
npm install axios


npm start



//for backend demo(testing purpose)
proctoring-app
│
├── backend
│    └── server.js
│
├── main.js
├── preload.js
└── renderer
(in new terminal)
cd backend
npm init -y
npm install express cors
node server.js

