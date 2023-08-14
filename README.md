# text-editor
- App accessible at [jate-text-editor-202308-a6c7d49b866d.herokuapp.com](https://jate-text-editor-202308-a6c7d49b866d.herokuapp.com/)
- Git repo at [github.com/benjstorlie/text-editor](https://github.com/benjstorlie/text-editor)

## Table of Contents

1. [Description](#description)
2. [User Story](#user-story)
3. [Acceptance Criteria](#acceptance-criteria)
3. [Screenshots](#screenshots)
4. [Comments](#comments)
5. [Acknowledgements](#acknowledgements)

## Description

This is a code text editor Progressive Web App where you can write notes or code snippets and access them later with or without an internet connection.

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Screenshots

## Comments

1. I have to say, I don't 100% understand everything here. At this point, I feel like there is a lot of terminology that I can't reliably use.  I'm not sure what parts of the starting application are unique to its functionality, and what would be shared among PWAs. And I started doing React right away, so I'd like to compare and contrast the shared components between this application and React applications.

2. I don't understand why indexedDB is being used here if it's only being used to store a single string.  Why are both indexedDB and local storage being used here?  Is one persisting longer than the other?  Do you only have access to one when you install it? Were you supposed to be able to save many different code snippets?

3. 🐛 Bug: The "Install" button is still present when the application is installed.  In 'client/src/js/install.js' it toggles the 'hidden' class on the install button. I did need to add `.hidden {visibility:hidden}` to 'style.css', but that only makes it function properly as the install even happens. But if you open it in either the webpage or the app after it's installed, the install button is still present, since it's basing the visibility on the install event, rather than the state of installed or uninstalled.  At least, that's what I think is the issue.

## Acknowledgements

1. I liked [this idb tutorial](https://hackernoon.com/use-indexeddb-with-idb-a-1kb-library-that-makes-it-easy-8p1f3yqq).
