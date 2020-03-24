# Music Games :musical_note:
The focus of this project is to create a website where you play minigames to make “money” and spend it on adding songs to a music playlist
Some of these games include:    
   * Tic tac toe
    * Connect 4
    * Fill in the lyrics (type racing)
    * Guess the artist
    * Popularity gamibling/guessing
    * Guess the soundtrack

Some features this site will have are:
   * Ads
    * Microtransactions
    * Trending page
    * Leaderboard
    * User system
    * Merch

Since we are logical developers, living in the 21st century, we will be using web frameworks with this project:
   * Django
        * Backend
        * Some sort of database to track users
    * React
        * Frontend
        * Everything rendered on the screen will be done with React

- - - -

## APIs
With this project, we will be using a number of APIs:
   * [Last.fm](https://www.last.fm/api/)
        * Last.fm is a tool that tracks your music, and can provide recommendations based on artists that you listen to. It has a ton a data that will be useful for this project.
    * [Bandsintown](https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0#/)
        * Bandsintown is a tool that provides an artists events.
        * artist info: returns the link to the Bandsintown artist page, the link to the artist photo, the current number of trackers and more
        * artist events: returns the list of events including their date and time, venue name and location, ticket links, lineup, description and the link to the Bandsintown event page
    * [Spotify](https://developer.spotify.com/documentation/web-api/)
        * It's Spotify. This is what we're going to use to playback music.
        * For the site, we will have one master account that will be used to playback songs. The account will also hold the playlist for the site.
    * [Dictionary](https://dictionaryapi.com/)
        * This API will be used for one of the sites extra features, breaking down songs word by word, using the dictionary definition.
We will be using more APIs as this project grows, but there are a few that we know we are going to use.

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



## How to run (in progress)
if youre confused so am I so please wait

1. install 
```
    pip install django djangorestframework virtualenv pep8 autopep8 pylint django-cors-headers
    npm install axios
```

2. run
```
    python backend\src\manage.py runserver
    cd frontend
    npm start
```


    