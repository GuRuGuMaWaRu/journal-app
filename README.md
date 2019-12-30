# Journal App

## Overview
This is a Chingu Voyage 15 Pre-work Project. Allows to create notes, sort of a blogging thing.

## Features
* Create, edit and delete notes.
* Authentication layer - notes are saved in a database under your user.
* Filter notes - use search input to quickly filter notes

## Running the project
**Live version**:

[Journal App](https://mighty-chamber-81532.herokuapp.com/)

**From the repo**:

1. Clone this project
2. Go to the project directory and run `npm install`
3. Run `npm run dev`
4. Register a new user and start adding notes

## Dependencies
Techstack used when creating this project.

### Backend dependencies
* [express](https://expressjs.com/)
* [mongoose](https://mongoosejs.com/)
* [morgan](https://www.npmjs.com/package/morgan)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [nodemon](https://www.npmjs.com/package/nodemon)

### Frontend dependencies
* [create-react-app](https://github.com/facebook/create-react-app)
* [react](https://reactjs.org/)
* [prop-types](https://www.npmjs.com/package/prop-types)
* [axios](https://www.npmjs.com/package/axios)

## TODOs
* Add the ability for users to upload pictures (or even audio clips) to notes
* Allow notes to be formatting using Markdown
* Include tests cases using tools like Jest, Enzyme, etc.
* Use Accessibility techniques (i.e. a11ly) to improve your site for users with impairments (see [A11Y Project](https://a11yproject.com/))
* Add a CONTRIBUTING.md file with instructions on how to contribute to your project
* Implement service workers to improve performance by relying on cached data (see [Service Workers: An Introduction](https://developers.google.com/web/fundamentals/primers/service-workers))
