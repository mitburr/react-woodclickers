D:< It's so close!
<h1>Woodclickers!</h1>


<h2>Description</h2>


<h4> the goal of the application is to create a 'memory' like game where you select tiles until you select a tile that hasn't been selected. The points in the game are determined by how many correct clicks you get before selecting a tile twice.</h3>


</hr>


<h2>Outstanding issues</h2>

<h4>Currenntly there's one major error that inhibits the intended functionality: on the second click of a tile the find function for the array of clicked tiles fails. I'm certain that the array updates after the first click, as it is console.logged, but then the find function can't be found. It seems like, after adding data to the array, the array's type changes so the .find method is no longer available. I have no idea what's causing this. One possible workaround could be to run a function that updates a temp variable if the id is matched in the array. This would be really clunky, but would probably do the job. Once that is working I believe that the app would be complete.</h4>


</hr>


<h2>Future Directions</h2>

<h4> I definitely intend to keep working on this project: I'd like to transition it into an incremental game, like cookie clicker or clicker heroes. That would be a big but completely doable project. I would need to implement a backend to keep track of progress while the player is offline, and I'd basically need to redesign the game from the ground up.</h4>

<h4>Additionally there's currently no styling for the game. This is easily fixable but would take quite a bit of work. I will do this once I implement the new functionality.</h4>
