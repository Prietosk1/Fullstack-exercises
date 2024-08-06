# Process of a user creating a note

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note left of browser: User sends a note that triggers a POST request to the server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server

    Note right of server: The server receives our message, updating the messages list. Also it sends a response with a 302 HTTP status code

    server-->>browser: HTML document redirected - https://studies.cs.helsinki.fi/exampleapp/notes
    deactivate server

    Note left of browser: The HTML document has a CSS file and a JS file so it will request the server for this ones.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JS file
    deactivate server

    Note left of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server

    Note right of server: The browser executes the callback function that renders the notes with our new note

    server-->>browser: Data in JSON - [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The page displays all the previous messages with our last message.
```
