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
       list.data.forEach((playlist, index)  =>  {      
          let newPlaylist = new Playlist(playlist, playlist.attributes);

      // console.log(playlist.attributes.name)
       //console.log(playlist.attributes.tracks[index].title)
      // console.log(playlist.attributes.tracks[index++].artist)
      // console.log(playlist.attributes.tracks[index].artist)
     //  console.log(playlist.attributes.tracks[index].artist)
   //  playlist.attributes.tracks[index].artist, playlist.attributes.tracks[index].title
     //   debugger

     
       document.getElementById("playlist-container").innerHTML +=  newPlaylist.renderPlaylistCard();  

       tracks-container.appendChild(playlist-container); 

        })
       
      //  debugger
        }
  )
}

 
function getTracks() {
  fetch(tracks_URL)
      .then(response => response.json())
      .then(trk  => {
          trk.data.forEach(track =>   { 
                      
          let newTrack = new Track(track, track.attributes);
          let withTracks = []
         // withTracks.push(tracks.playlist_id)
          withTracks.push(tracks.attributes.artist, tracks.attributes.title, tracks.attributes.playlist )
          
         document.getElementById('tracks-container').innerHTML += newTrack.renderTrackCard();   
         
          }
      )}
  )
}
   
    function createFormHandler(e) {
      e.preventDefault()
      const nameInput = document.getElementById('input-name').value      
      const titleValue = document.getElementById('title-value').value
      const artistValue = document.getElementById("artist-value").value
      const playlistId = parseInt(document.getElementById('tracks').value)
      postFetch(nameInput, playlistId, artistValue, titleValue)   
      // postTrack(artistValue, titleValue) 
    }

    function postFetch(name, playlist_id, artist, title){
    fetch(BACKEND_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({
        name: name,
        playlist_id: playlist_id,
        artist: artist,
        title: title
      })      
    })    
    .then(response => response.json())
    .then(playlist => {          
      const playlistData = playlist.data;      
      let newPlaylist = new Playlist(playlistData, playlistData.attributes);
    
      document.getElementById('playlist-container').innerHTML += newPlaylist.renderPlaylistCard() ;
   
    })  
    
  }