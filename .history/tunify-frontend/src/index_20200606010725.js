const BACKEND_URL = 'http://localhost:3000/api/v1/tracks'


document.addEventListener('DOMContentLoaded', () => {
  getPlaylists();  


  const createPlaylistForm  = document.getElementById("create-playlist-form");

  createPlaylistForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // debugger

  });


function getPlaylists(){
  fetch(BACKEND_URL)
  .then(response => response.json())
  .then(list  => {
  list.data.forEach(playlist=> {
      const playlistMarkup = `
       <div data-id=${playlist.id}>
        <h4>${track.attributes.name}</h4>
        <h4>${track.attributes.tracks.title}</h4>
         
        <button data-id=${playlist.id}>edit</button>
        </div> 
        <br><br>`
        
     
        document.getElementById("playlist-container").innerHTML += playlistMarkup
      })
  })
}
  

function createFormHandler(){
  e.preventDefault()
  const nameInput = document.getElementById('Playlist Name').value
  const songTitle = document.getElementById('Song Title').value
  const songInput = document.getElementById()
  const songId = parseInt()
}


// app.get('/login', function(req, res) {
//   var scopes = 'user-read-private user-read-email';
//   res.redirect('https://accounts.spotify.com/authorize' +
//     '?response_type=code' +
//     '&client_id=' + my_client_id +
//     (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
//     '&redirect_uri=' + encodeURIComponent(redirect_uri));
//   });
  


  });