## Inspiration
Inspired by apps that increase connection and sustainability through exchange such as TooGoodToGo and Craigslist, we wanted an app that would streamline the ability to exchange goods, services, and more between individuals. Ultimately, this project was inspired by our own communities. This project addresses a problem of surplus and waste, solving it with sustainability. This project is about uplifting, increasing connection, and empowering our communities for a sustainable future.

## What it does
Barter is a digital bartering marketplace, connecting individuals within a local community who are interested in exchanging their surplus food, skills, clothes, and tasks. The web app provides a user-friendly interface that allows users to create listings, browse available items and services, and communicate with potential trade partners. The web app includes an interactive map that users can drop pins with, sort items, and a messaging service. 

## How we built it
We built BARTER using React, VS code, Github, Firebase, and Google Maps API. Our steps for this project were 1) brainstorming and task delegation, 2) barebones repo, architecture, and getting a workable homepage, 3) adding functionality, styling and complexity, and 4) deploying and thinking about the future of the project.

## Challenges we ran into
Errors that did not reflect the code, routing, and Firebase documentation

### Early setbacks
Within the first hours while setting up the bare bones of our project, we ran into some very strange errors that even mentors couldn't make sense of with our routing & Firebase documentation that was unexpected. This ended up in us restarting our repo and copy pasting items over.

### Leaked API & .env woes
While working towards our Google Maps integration, we thought 'we'll put this in a `.env` later!' and then pushed the branch without doing so. Within minutes we got an email from github warning us that our API key had been leaked, and we then had to spend time deleting it and creating a new one, this time storing it properly... or so we thought. The `.gitignore` had `.env `, but the `.gitignore` was in a nested folder, therefore our env that was /outside/ the folder got pushed! It can be so tricky...

## Accomplishments that we're proud of
Team building & involving members of varying knowledge of our tech stack.
Meeting MVP details such as google maps and item entry within 
On day 2, being able to reassess & pivot our goals considering the timeline.

## What we learned
1st hackathon for 2 members. One member learned react, front-end, and working with a team on GitHub!
Learnt how to sign up for google map cloud api & Firebase data and authorization.

## What's next for BARTER
- Getting the twilio chat working to add message functionality
- Attaching items with users to the map


---

**Check out our project on [Devpost](https://devpost.com/software/barter-u7k5bs)!**
