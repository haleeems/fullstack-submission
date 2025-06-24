Exercise 0.4
sequenceDiagram
    participant user
    participant browser
    participant server

    Note over user: User types text into the input field
    user->>browser: Click "Save" button
    
    Note right of browser: Browser captures form data and prepares POST request
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Note right of browser: Form data: note content and timestamp
    activate server
    
    Note right of server: Server processes the new note
    Saves note to database/storage
    Prepares redirect response
    server-->>browser: 302 Redirect to /exampleapp/notes
    deactivate server

    Note right of browser: Browser follows redirect
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document (updated page)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the updated JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, { "content": "New note", "date": "2023-1-2" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders all notes including the new one

Exercise 0.5
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file (SPA version)
    deactivate server

    Note right of browser: The browser starts executing the SPA JavaScript code which handles DOM manipulation and AJAX requests

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The SPA JavaScript renders the notes directly into the DOM without page reload
    Sets up the event handlers when form is submitted

Exercise 0.6
sequenceDiagram
    participant user
    participant browser
    participant server

    Note over user: User types text into the input field
    user->>browser: Click "Save" button
    
    Note right of browser: SPA JavaScript stops default form submission
    Saves form data and creates note object
    Immediately adds note to the DOM
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: AJAX request with JSON data:{"content": "New note text", "date": "2023-1-2"}
    activate server
    
    Note right of server: Server processes the new note
    Saves note to database/storage
    Returns JSON response (doesnt redirect)
    server-->>browser: 201 Created (JSON response)
    deactivate server

    Note right of browser: SPA JavaScript receives confirmation
    Note already visible in UI
    Clears the input field
    Page doesnt need to reload