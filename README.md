#E-mail tracking using Firebase

This is a personal project to create a e-mail tracker using an Web beacon approach. In Wikipedia, Web beacon is 'one of various techniques used on web pages or email, to unobtrusively (usually invisibly) allow checking that a user has accessed some content'. This service will offer an 1x1 pixels 
through an image url, provided by a Firebase Funcions service, to track if someone open your e-mail with this image associated. Technically you only have to add the url image in your body e-mail, and the hash associated with your image url will show how many times your e-mail was open.

##How install

Modify the file `config.js`, inside the config folder, with your firebase's data. In the Firebase console, open the database option, click in data and choose the option `Import JSON`, use the database.json inside this project. This will initialize your database.

Install the Firebase CLI:

`npm install -g firebase-tools`

Login on Firebase:

`firebase login`

Enter the functions folder:

`cd functions`

Install the dependencies:

`npm install` or `yarn install`

Leave the functions folder:

`cd ...`

Deploy your project:

`firebase deploy --only functions`