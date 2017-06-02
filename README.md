# Ask Me Anything

Ask me anything will be a small, ember-based app that will allow users to ask each other for any kind of advice, feedback or help with projects that are programming related.  The site will first allow users to submit a question, then it will allow other users to submit feedback on that question as a means of answering it.

## Planning

1. Configuration/dependencies
  * HTML - used for basic page layouts.
  * Javascript - used for processing information and running scripts.
  * Ember - used as a framework and to produce a final build of the site.
  * CSS - used for styling the site and allowing some customization.

2. Specifications
| behavior |  input   |  output  |
|----------|:--------:|:--------:|
|Allow the user to post a new message with their name attached.|"Hello, how are you guys doing?" "Ken"|"Hello, how are you guys doing?" - Ken|
|Allow another user to post a response to that message under their own name.|"I am doing great!" "Bob"|User Bob responded: "I am doing great!"|

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Main page with a .hbs file and accompanying .js file.
  * Individual tiles for each question asked on the main page.
  * Each tile should be clickable for more information about that question as well as a list of responses.
  * A separate tile should exist both to submit a question and to submit a response.
  * Additional components may be required.

4. UX/UI
  * Styling should be very easy to navigate with few buttons required for user input.
  * Styling will be done in towards the end, once required functionality is in place.

5. Polish
  * Refactoring will most likely be extremely minimal given the sensitivity of ember framework.
  * Will not be deleting any components for a project this small.
  * Make README awesome

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd qa-forums`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
