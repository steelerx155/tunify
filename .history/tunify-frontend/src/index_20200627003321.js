const BACKEND_URL = "http://localhost:3000/api/v1/playlists"
const tracks_URL =  "http://localhost:3000/api/v1/tracks"


document.addEventListener('DOMContentLoaded', () => {
  getPlaylists(); 
  getTracks();

  const createPlaylistForm = document.getElementById("create-playlist-form")
  createPlaylistForm.addEventListener("submit", (e) => createFormHandler(e))  
})

// function getTracks() {
//   let newTrack = new Track(tracks, tracks.attributes);
//   let allTacks = []
//     allTacks.forEach(track =>  {
//      return console.log(track)
//     }
//     )
//    // withTracks.push(playlist.attributes.tracks[i].artist, playlist.attributes.tracks[i].title) 
//      //  debugger              
//   document.getElementById("playlist-container").innerHTML += newTrack.renderTrackCard();
          
//   }
  
 

function getPlaylists() {
  fetch(BACKEND_URL)
      .then(response => response.json())
      .then(list  => {
          list.data.forEach(playlist =>   { 
           
            // let i;
            // for (i = 0; i < playlist.attributes.tracks; i++) {
            //     playlist.attributes.tracks[i].artist
                
             
            //    }                         
          let newPlaylist = new Playlist(playlist, playlist.attributes);
          //  let withTracks = []
          //  withTracks.push(playlist.attributes.tracks[i].artist, playlist.attributes.tracks[i].title)    
     
         
         // playlist.push(playlist)
          //  let newTrack = new Track(track, track.attributes)
          //  let i;
          //  for (i = 0; i < playlist.attributes.tracks; i++) {
          //      playlist.attributes.tracks[i] 
          //      }          
              
          document.getElementById("playlist-container").appendChild( document.getElementById('playlist-tracks'))
          .innerHTML += newPlaylist.renderPlaylistCard();   
     
         // debugger 
          }
      )}
  )
}

function getTracks() {
  fetch(tracks_URL)
      .then(response => response.json())
      .then(trk  => {
          trk.data.forEach(track =>   { 
                      
          let newTrack = new Track(tracks, tracks.attributes);
          let withTracks = []
          //  let i;
          //  for (i = 0; i < track.attributes; i++) {
          withTracks.push(track.attributes.artist, track.attributes.title).value;
     
           
         // playlist.push(playlist)
          //  let newTrack = new Track(track, track.attributes)
          //  let i;
          //  for (i = 0; i < playlist.attributes.tracks; i++) {
          //      playlist.attributes.tracks[i] 
          //      }          
        
          document.getElementById(`data-id=${playlist.id}`).innerHTML += withTracks += newTrack.renderTrackCard();   
     
         // debugger 
          }
      )}
  )
}
     
    function createFormHandler(e) {
      e.preventDefault()
      const nameInput = document.getElementById('input-name').value
      const playlistId = parseInt(document.getElementById('tracks').value)
      const titleValue = document.getElementById('title-value').value
      const artistValue = document.getElementById("artist-value").value
      postFetch(nameInput, playlistId, titleValue, artistValue)     
    }

    function postFetch(name, playlist_id){
    fetch(BACKEND_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({
        name: name,
        playlist_id: playlist_id,
      })      
    })    
    .then(response => response.json())
    .then(playlist => {          
      const playlistData = playlist.data;      
      let newPlaylist = new Playlist(playlistData, playlistData.attributes);
     // let newTrack = new Track(trackData, trackData.attributes)
      document.getElementById("playlist-container").innerHTML += newPlaylist.renderPlaylistCard() ;
   
    })  

    
  }