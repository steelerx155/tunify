const BACKEND_URL = 'http://localhost:3000/api/v1/tracks/top_country'


document.addEventListener('DOMContentLoaded', () => {
  getPlaylists();  


  const createPlaylistForm  = document.getElementById("create-playlist-form");

  createPlaylistForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
  });


function getTracks(){
  fetch(BACKEND_URL)
  .then(response => response.json())
  .then(list  => {
  list.data.forEach(playlist=> {
      const trackMarkup = `
       <div data-id=${track.id}>
        <h4>${track.attributes.artist}</h4>
        <h4>${track.attributes.image}</h4>
        <h4>${track.attributes.preview}</h4>
         
        <button data-id=${track.id}>edit</button>
        </div> 
        <br><br>`
        
     
        document.getElementById("playlist-container").innerHTML += trackMarkup
      })
  })
}
  

function createFormHandler(){
  e.preventDefault()
  const nameInput = document.getElementById('Playlist Name').value
  const songTitle = document.getElementById('Track Title').value
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