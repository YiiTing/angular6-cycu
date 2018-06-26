1.Environment version on windows
	1.1 install nodejs(https://nodejs.org/en/) && node -v = 10.4.0
	1.2 npm i npm@latest -g && npm -v = 6.1.0
	1.3 npm install -g @angular/cli && ng -v = 6.0.8
2.Download && install
	2.1 git clone https://github.com/YiiTing/angular6-cycu.git angular6
	2.2 cd angular6
	2.3 npm install
	2.4 GO to Firebase Console, login with your Google Account, then click on Add Project.
		&& Choose Database in the left (list of Firebase features) -> Tab RULES, then change .read and .write values to true:
		 "rules": {
			".read": true,
			".write": true
		  }
		&& Click on Add Firebase to your Web App, a Popup will be shown:
		<script src="https://www.gstatic.com/firebasejs/5.1.0/firebase.js"></script>
		<script>
		  // Initialize Firebase
		  var config = {
			apiKey: "xxxxxxxxxxxxxxxxxxxx",
			authDomain: "xxxxxxxxxxxxxxxxxxxx",
			databaseURL: "xxxxxxxxxxxxxxxxxxxx",
			projectId: "xxxxxxxxxxxxxxxxxxxx",
			storageBucket: "xxxxxxxxxxxxxxxxxxxx",
			messagingSenderId: "xxxxxxxxxxxxxxxxxxxx"
		  };
		  firebase.initializeApp(config);
		</script>
		&& copy 
		&& paste to /src/environments/environment.ts
	2.5 ng serve --o
		
# Angular6Cycu

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
