## Title: This Online-Shopping-Cart application when built has the following features.  
  #### Features

- Add and remove products from the floating cart
- Sort products by highest to lowest and lowest to highest price
- Filter products by available sizes
- Products persist in floating cart after page reloads
- Unit tests, integration tests, api tests and e2e testing
- Responsive design

## Pre-requisites: Below are the system requirements to build this project.
 #### Install below
 - This app has been tested working in node version v10.1.0.
    - Download and install node version 10.1.X
    - Check node version with node -v to confirm the installed version.


## To build the application, some node modules are required. 
 #### First, Install the needed packages, run the below command, this takes all the required packages from package.json file located in project root folder*/

npm install

## After all the required packages are installed successfully. Start both Node and React with the below command. This will start the application at port: 3000 with url: http://localhost:3000/ 

npm start

## Running tests

#### E2E TESTS

###### We have used 'testcafe' to run e2e tests. Run below command to run end to end tests. It uses the .testcaferc.json file in the project root folder to fetch testcafe runtime configuration

npm run test:TestCafe 

 ##### Test scenarios: Following functionalities have been tested as part of e2e testing
- Add and remove products from the floating cart
- Sort products by highest to lowest and lowest to highest price
- Filter products by available sizes
- Products persist in floating cart after page reloads

Test report(using HTML reporter) can be found : ./e2e/cafe/reports/tc_report.html 
To open the report, browse to the folder and open the report in any HTML browser like chrome/Safari

#### API TESTS

###### We have used SuperTest/Mocha to do the api testing. Run the below command to execute the 
npm run test:SuperTest
##### Test scenarios: Following functionalities have been tested as part of api testing
As this api only returns all the products in the db/xml. There is no operation defined on the api. The scope of testing was limited.
-  Validate the api responds with 200 status code.
-  Count the api returns all the products available
-  Validate all the products returned with all the fields/tags required in the UI

API test results can be found at : ./APITestResult

### Copyright and license

The MIT License (MIT). Please see License File for more information.

<br/>
<br/>

<p align="center"><img src="http://www.jeffersonribeiro.com/assets/img/apple-icon-180x180.png" width="35" height="35"/></p>
<p align="center">
<sub>A little project by <a href="http://www.jeffersonribeiro.com/">Jefferson Ribeiro</a></sub>
</p>

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Syed-Saad-Qamar"><img src="https://avatars3.githubusercontent.com/u/38069997?v=4" width="100px;" alt="Syed Saad Qamar"/><br /><sub><b>Syed Saad Qamar</b></sub></a><br /><a href="https://github.com/jeffersonRibeiro/react-shopping-cart/commits?author=Syed-Saad-Qamar" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ksakiyama"><img src="https://avatars0.githubusercontent.com/u/1367783?v=4" width="100px;" alt="ksakiyama"/><br /><sub><b>ksakiyama</b></sub></a><br /><a href="https://github.com/jeffersonRibeiro/react-shopping-cart/commits?author=ksakiyama" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/rithikachowta08"><img src="https://avatars1.githubusercontent.com/u/26671726?v=4" width="100px;" alt="Rithika Chowta"/><br /><sub><b>Rithika Chowta</b></sub></a><br /><a href="https://github.com/jeffersonRibeiro/react-shopping-cart/commits?author=rithikachowta08" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/criesbeck"><img src="https://avatars3.githubusercontent.com/u/1717574?v=4" width="100px;" alt="Chris Riesbeck"/><br /><sub><b>Chris Riesbeck</b></sub></a><br /><a href="#ideas-criesbeck" title="Ideas, Planning, & Feedback">🤔</a> <a href="#tutorial-criesbeck" title="Tutorials">✅</a> <a href="#content-criesbeck" title="Content">🖋</a> <a href="#review-criesbeck" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/jeffersonRibeiro/react-shopping-cart/issues?q=author%3Acriesbeck" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/hay-tran-ab6421165/"><img src="https://avatars0.githubusercontent.com/u/39950210?v=4" width="100px;" alt="Hay Tran"/><br /><sub><b>Hay Tran</b></sub></a><br /><a href="https://github.com/jeffersonRibeiro/react-shopping-cart/commits?author=HayTran94" title="Code">💻</a> <a href="#design-HayTran94" title="Design">🎨</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
