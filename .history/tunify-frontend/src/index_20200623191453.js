const BACKEND_URL = "http://localhost:3000/api/v1/playlists"



document.addEventListener('DOMContentLoaded', () => {
  getPlaylists()  
  getTracks()

  const createPlaylistForm = document.getElementById("create-playlist-form")
  createPlaylistForm.addEventListener("submit", (e) => createFormHandler(e))
  
})


function getPlaylists() {
  fetch(BACKEND_URL)
      .then(response => response.json())
      .then(list  => {
          list.data.forEach(playlist =>  {                        
           let newPlaylist = new Playlist(playlist, playlist.attributes)  

          document.getElementById("playlist-container").innerHTML += newPlaylist.renderPlaylistCard();
         // debugger
          }
      )}
  )
}

// function getTracks() {
//   fetch(BACKEND_URL)
//    .then(response => response.json())
//    .then(playlist  => {
//         playlist.data.forEach(playlist => {                        
//          `<h4> ${playlist.attributes.tracks.title}</h4>
//          <h4>${playlist.attributes.tracks.artist}></h4>  `
//           let newPlaylist = new Playlist(playlist, playlist.attributes.tracks) 
//          document.getElementById("playlist-container").innerHTML += newPlaylist.renderPlaylistCard();
//        // debugger
//        }
//    )}
// )
// }
     
    function createFormHandler(e) {
      e.preventDefault()
      const nameInput = document.getElementById('input-name').value
      const artistInput = document.getElementById('artist-name').value     
      const trackId = parseInt(document.getElementById('tracks').value)
      postFetch(nameInput, trackId, artistInput)     
    }

    function postFetch(name, playlist_id, artist, title, tracks){
    fetch(BACKEND_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({
        name: name,
        artist: artist,
        playlist_id: playlist_id,
        tracks: tracks,
        title: title
      })      
    })    
    .then(response => response.json())
    .then(playlist => {          
      const playlistData = playlist.data;      
      let newPlaylist = new Playlist(playlistData, playlistData.attributes) ;  
     
      document.getElementById("playlist-container").innerHTML += newPlaylist.renderPlaylistCard() ;
   
    })  
  }