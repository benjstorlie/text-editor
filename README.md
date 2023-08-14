# text-editor
- App accessible at [jate-text-editor-202308-a6c7d49b866d.herokuapp.com](https://jate-text-editor-202308-a6c7d49b866d.herokuapp.com/)
- Git repo at [github.com/benjstorlie/text-editor](https://github.com/benjstorlie/text-editor)

## Description

This is a code text editor Progressive Web App where you can write notes or code snippets and access them later with or without an internet connection.

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Comments

1. I have to say, I don't 100% understand everything here. At this point, I feel like there is a lot of terminology that I can't reliably use.  I'm not sure what parts of the starting application are unique to its functionality, and what would be shared among PWAs. And I started doing React right away, so I'd like to compare and contrast the shared components between this application and React applications.

2. I don't understand why indexedDB is being used here if it's only being used to store a single string.  Why are both indexedDB and local storage being used here?  Is one persisting longer than the other?  Do you only have access to one when you install it? Were you supposed to be able to save many different code snippets?

3. 🐛 Bug: The "Install" button is still present when the application is installed.  In 'client/src/js/install.js' it toggles the 'hidden' class on the install button. I did need to add `.hidden {visibility:hidden}` to 'style.css', but that only makes it function properly as the install even happens. But if you open it in either the webpage or the app after it's installed, the install button is still present, since it's basing the visibility on the install event, rather than the state of installed or uninstalled.  At least, that's what I think is the issue.

## Acknowledgements

1. I liked [this idb tutorial](https://hackernoon.com/use-indexeddb-with-idb-a-1kb-library-that-makes-it-easy-8p1f3yqq).
