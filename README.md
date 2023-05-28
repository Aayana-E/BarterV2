## Inspiration
Inspired by apps that increase connection and sustainability through exchange such as TooGoodToGo and Craigslist, we wanted an app that would streamline the ability to 

## What it does

## How we built it

## Challenges we ran into
### Early setbacks
Within the first hours while setting up the bare bones of our project, we ran into some very strange errors that even mentors couldn't make sense of with our routing & firebase documentation that was unexpected. This ended up in us restarting our repo and copy pasting items over.

### Leaked API & .env woes
While working towards our Google Maps integration, we thought 'we'll put this in a `.env` later!' and then pushed the branch without doing so. Within minutes we got an email from github warning us that our API key had been leaked, and we then had to spend time deleting it and creating a new one, this time storing it properly... or so we thought. The `.gitignore` had `.env `, but the `.gitignore` was in a nested folder, therefore our env that was /outside/ the folder got pushed! It can be so tricky...

## Accomplishments that we're proud of
Team building & involving members of varying knowledge of our tech stack.
Meeting MVP details such as google maps and item entry within 
On day 2, being able to reassess & pivot our goals considering the timeline.

## What we learned
1st hackathon for 2 members. One member learned react, front-end, and working with a team on GitHub!
Learnt how to sign up for google map cloud api & firebase data and authorization.

## What's next for BARTER
- Getting the twilio chat working
- Attaching items with users
