# Dev-Panic


![DevPanic](http://i.imgur.com/lRlbq9P.png)


## Technologies

-   HTML/SCSS
-   Javascript
-   jQuery
-   Bootstrap
-   Handlebars
-   Rails
- PostgreSQL

## What is DevPanic?

I love helping people learn and providing others with guidance and resources that are more positive and encouraging than scoffing at their lack of knowledge. Being a Junior Developer, I know all too well the crushing pressure of Impostor Syndrome, the frustration of not knowing how to get the magic on your side, the terror of getting something working and having no idea why,or worse yet, knowing what needs to happen and having no idea how.

I wanted DevPanic to be a a very basic application for sourcing resources, at minimum encouraging words for developers when they're hitting their breaking points--a common occurrence for all of them, in particular those just starting out. I feel that the mental and emotional health of those first getting into the industry, and even veterans, is grossly overlooked.

The idea was was to get that basic interface together and a very simple API communicating with it. Simple because as most developers would not use that website often even if it looked amazing and worked perfectly. I wanted to create an NPM CLI tool that would allow developers to pull up an encouraging phrase, tip for keeping Impostor Syndrome in check and reminders of how far they've come in their personal growth.

Unfortunately, I was working with an unscrupulous deadline, the wrong framework for the job, scrapped it, leaving me with four days to complete it, and then received clarification of new deliverables 24 hours to deadline. It made the application in it's current state somewhat inefficacious to its purpose and and suffocated the most unique and exciting features planned. It taught me a lot about clarifying deliverables with clients and being more wary of working with clients who can't clarify what they want from you.



## User Stories

-  As a user, I want to be able to sign in and see my symptoms
- As a developer, I will use nested routes and specific controller actions to create user-owned data
1.  As a user, I want to be able to find choose symptoms from a dropdown
1.  As a developer, I will make the ux smooth and minimal
1.  As a developer, I will implement CRUD functionality to allow the user to create symptoms
2. As a user I want to be able to see all users solutions, with or without signing in

## Development Issues

- Starting over from scratch on day two, and then completely changing the scop of the project on the last development day were the biggest issues by far.
- Some more specific issues that stemmed out of that as follows:
  - Unable to get OpenReadController inheritance working properly, so that any user could see all solutions without being signed in. Largely because I had never used it before, and there is no existing documentation on it. Given more time, or clarity on the deliverables from day 1, I;m confident it would have been a non-issue.
  - It was important to give the user a dropdown selection of premade symptoms that would properly access matching solutions from the API. Because of this, the code "getting" from the API was first posting a variable to the controller action that in turn would return the correct data to the application. This ate up some development time to fully integrate but adds the most user friendly feature thus far implemented.
  - Ran into an issue with options method due to rack cors gem; Rack Middleware for handling Cross-Origin Resource Sharing, which makes cross-origin AJAX possible--but caused issues with the Update feature that is yet to be resolved. If given more than a day to implement that patch request, I'm confident I could. In a real world scenario I would have explained that to the client when given the new deliverables, explain why it didnt make sense for the application, and why I would never risk dirtying the database with duplicate data when in half the time taken to read this sentence, a user could be instructed to delete the object meant to be patched, and make a new one.

## Future Implementations

- Given the choice, I would of course not have the unnecessary crud, and instead focused on the following features:
  - NPM CLI tool that could print solutions to the console
  - CLI tool could potentially even authenticate to API and perform crud from there
  - Still minimal but more powerful interface where user could access sympom solutions, and sort or browse through different types such as images and links.
  - ability to toggle the privacy of user-created symptoms and solutions to public or private.

## Wireframe

[API](https://github.com/Benjamski/dev-panic-server)

[WireFrames](http://i.imgur.com/QFNMWUe.png)
