const BACKEND_URL = "http://localhost:3000/api/v1/playlists"
const tracks_URL =  "http://localhost:3000/api/v1/tracks"


document.addEventListener('DOMContentLoaded', () => {
  getPlaylists(); 
  getTracks();

  const createPlaylistForm = document.getElementById("create-playlist-form")
  createPlaylistForm.addEventListener("submit", (e) => createFormHandler(e))  
})

 function getPlaylists() {
    fetch(BACKEND_URL)
        .then(response => response.json())
        .then(list  => {
          list.data.forEach(playlist =>  {      
  
          let newPlaylist = new Playlist(playlist, playlist.attributes);  
             
   
          document.getElementById("playlist-container").innerHTML += newPlaylist.renderPlaylistCard();   
             
          })       
          }
    )
  }



function getTracks() {
  fetch(tracks_URL)
      .then(response => response.json())
      .then(trk  => {
        trk.data.attributes.artist.sort();
          trk.data.map(track =>  {                       
          let newTrack = new Track(track, track.attributes);

          document.getElementById('tracks-container').innerHTML  += newTrack.renderTrackCard(); 
          }
      )}
  )
}

    // function sortByName(){

    // }

   
    function createFormHandler(e) {
      e.preventDefault()
      const playlistId = document.getElementById('playlists').value
      const titleValue = document.getElementById('title-value').value
      const artistValue = document.getElementById("artist-value").value
      postTrack(artistValue, titleValue, playlistId) 
    }


  function postTrack(title, artist, playlist_id){
    fetch(tracks_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: name,
        title: title,
        artist: artist,
        playlist_id: playlist_id
            })      
    })    
    .then(response => response.json())
    .then(track => {          
      const trackData = track.data;  
      let newTrack = new Track(trackData, trackData.attributes);
      document.getElementById('tracks-container').innerHTML += newTrack.renderTrackCard();   
    })  
 }