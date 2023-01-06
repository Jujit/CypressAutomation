# README #
Please follow instructions below to understand the framework, and to be able to execute tests in local machine

## Tools and Frameworks used ##
* Cypress
* node js
* IDE should be Visual Studio Code (VSCode)

## Install cypress ##
* Run the below command in VSCode terminal
```
npm install cypress --save -dev
```
* Launch cypress application
```
npx cypress open
```
* Select E2E Testing
* Select your desired browser
* Inside Specs folder, you'll see the test cases files to run
## Folder Structure ##
* downloads : contains downloaded file run during automation
* e2e : contains test cases and extension of this files should be cy.js
* fixtures : maintain the static test data
* screenshots: contains capture screenshot through automation
* support: contains reusable scripts, in command.js we store or create custom commands, in e2e.js contains commands that loads before the spec file as prerequisite
* videos: contains the recorded files in mp4 format
* node_modules: contains all cypress related modules
* cypress.config.js: contains cypress configuration 
* package.json: contains the dependencies
## Execution Instructions ##
### Setup ###
* Make sure you have latest node.js installed on your machine. `
### Running test case using command in VSCode terminal

```
npx cypress run --spec cypress\e2e\LoginWithPOM.cy.js
``` 
### Running test case using Cypress application
* Run the below command
```
npx cypress open
```
* Select E2E Testing
* In Configuration files select **continue**
* Choose the browser of your choice and click **Start E2E Testing in your selected browser**
* Click on any file user E2E specs
* Your test case should start running
* After execution you should be able to see pass/fail in left side of specs in cypress tool

## Reports
I'm using Mochaawesome html report for generating reports 
```
go to reports folder > right click on index.html > Select Copy Path > Open browser and paste it in the URL section and enter
```

## Who do I talk to?
For any doubts or requests, please shoot a mail to jujitsaikia@gmail.com