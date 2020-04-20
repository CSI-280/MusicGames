# Extended Play :musical_note:
The focus of this project is to create a website where you play minigames to make “money” and spend it on adding songs to a music playlist
Some of these games include:    
   * Tic-tac-toe
   * Connect Four
   * Fill in the lyrics (type racing)
   * Guess the artist
   * Popularity gamibling/guessing
   * Guess the soundtrack

Some features this site will have are:
   * Advertisements
   * Microtransactions
   * Trending page
   * Leaderboard
   * User Sign Up/In System
   * Merchandise

Since we are logical developers, living in the 21st century, we will be using web frameworks with this project:
   * [Django](https://www.djangoproject.com/)
       * Backend
        * Some sort of database to track users
        * [Documentation](https://docs.djangoproject.com/en/3.0/intro/install/)
   * [React](https://reactjs.org/)
        * Frontend
        * Everything rendered on the screen will be done with React
        * [Documentation](https://github.com/facebook/react)

- - - -

## APIs
With this project, we will be using a number of APIs:
   * [Spotify](https://developer.spotify.com/documentation/web-api/)
        * It's Spotify. This is what we're going to manage music.
        * For the site, we will have one master account that will be used to playback songs. The account will also hold the playlist for the site.
   * [SoundCloud](https://developers.soundcloud.com/)
        * It's Soundcloud. This is how we are going to be playing music on the site for people to hear.
   * [Google Sign-in](https://developers.soundcloud.com/)
        * Managing accounts properly is scarry, that why we are letting the bigs boy handel it. 
We will be using more APIs as this project grows, but there are a few that we know we are going to use.

- - - -

## Setup
It's recommended that you use [git bash](https://gitforwindows.org/) for cloning the repo and installing dependencies.
### Clone the repo
To get the actual code for this, you need to clone the repo.  To clone the repo, simply enter the command 

`git clone https://github.com/CSI-280/MusicGames.git`

Then to get to the folder, simply do `cd Musicgames`
### Install Dependencies
As previously mentioned, this project uses Django and React. So we need to install those dependencies in order to run this on your local machine.
Run these commands to install them.

`pip install django djangorestframework virtualenv django-cors-headers`

`cd .\frontend\gui`

`npm install`

`npm istall react-router-dom jquery react-google-login axios`


#### You might need to update package.json
You can find this file in frontend/gui/package.json

Open the file. We only need to modify a single line in this file.

This is what it will look like before (if its wrong)

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  ```

The fix for this is simple, all you have to do is change one line:
```json
"scripts": {
    "start": "set HTTPS=true&&react-scripts start", //This is the updated line!!
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
We need to change this in order to use the [Google Sign-In api](https://developers.google.com/identity) so it is important that you do this, or else you won't be able to sign in!

### Start up the front and back end
Now you should be able to run the files.
For the front end, use 

`cd .\frontend\gui`

`npm start`

for the backend, in a new terminal in the project directory

`python backend\src\manage.py runserver`

- - - -

## Team Members
   * Lenora Batcher
   * Jake Buzzell
   * Nicholas Szabo
   * Jake Capra
   * Thomas Szpila
   * Richard Honiker
   * Alex Waters
   * Joseph Castaner
   * Nate DiMauro

- - - -

## License
[MIT](https://choosealicense.com/licenses/mit/)

    
