# Review Questions

## What is Node.js?
Node.js is a program that is able to run other programs and is used to execute JavaScript outside the browser.

## What is Express?
Expresss is a framework that sits on the Node server to add extra functionality like routing, middleware support, and simpler API. 

## Mention two parts of Express that you learned about this week.
I learned about Routing and request handlers that deal with the URL that the user visits to be able to break an application into smaller parts. 
I also learned about middleware being able to manage and operate on requests and responses.
## What is Middleware?
Middleware is a function that get requests and response objects that will either return the response or move onto the next middleware down the line. 
## What is a Resource?
A resource is a thing that is accessed by the URL being supplied. It is represented usually by the JSON as an object
## What can the API return to help clients know if a request was successful?
An http status code that indicates a successful execution
## How can we partition our application into sub-applications?
Routers can do this by serving both our application and a routing our API with its own middleware and routing. 
## What is express.json() and why do we need it?
this isf or adding support for parsing JSON content out of the request body. 