# Cypress test

## HowTo.
* run `npm install`
* Check tests code in cypress/integration/helsingborg_spec.js
* run `npx cypress open`
* Click `Run all specs` and watch run succeed.
* Make test fail by chaning regex in cypress/integration/helsingborg_spec.js on line 32 to `.and('match', /blabla/);`
* Click `Run all specs` and watch run fail.
* Check images in cypress/screenshots
* Check Video in cypress/videos
* Undo changes in cypress/integration/helsingborg_spec.js on line 32
* For cli run `npm run test`