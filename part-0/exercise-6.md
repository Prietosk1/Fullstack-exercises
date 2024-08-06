# Process of a user creating a note (SPA)

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: The user sends a new note that triggers a POST request
    activate server

    Note right of browser: POST request to https://studies.cs.helsinki.fi/exampleapp/new_note_spa

    server-->>browser: The server updates de notes in data.JSON, and it sends a 201 HTTP response, which means that the new message was added to the list of messages.
    deactivate server

    Note left of server: 201 HTTP status response

    Note right of browser: The new messages is displayed locally without refreshing the page or sending any other request to the server.
```

## Differences between the SPA and the standard page.

- When a new note is uploaded in the SPA, the browser just makes a single request because it doesn't receive a redirect from the server, preventing to make additionals request as the standard page does.
- The only downside is that the new notes are displayed locally, that means if any other user uploads a note at the same time it won't be displayed unless the main user recharges the page.
