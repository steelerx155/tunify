const BACKEND_URL = "http://localhost:3000/api/v1/playlists"



document.addEventListener('DOMContentLoaded', () => {
  getPlaylists()  
  
  const createPlaylistForm = document.getElementById("create-playlist-form")
  createPlaylistForm.addEventListener("submit", (e) => createFormHandler(e))
  
})


    function getPlaylists() {
      fetch(BACKEND_URL)  
      .then(response => response.json()) 
      .then(list  => {
          list.data.forEach(playlist => {
        const playlistMarkup = `    
          <div data-id=${playlist.id}>
          <h3>Playlist Name: ${playlist.attributes.name}         
          <h4> Artist: ${playlist.attributes.artist}           
            Click here for a preview!<a href> <br> ${playlist.preview}    
            <h4>${playlist.relationships.tracks.data}
                     
            </div> 
            <br><br>` 
               
          
                debugger
        document.getElementById("playlist-container").innerHTML += playlistMarkup
            }
      )
      })
  }
      
     
    function createFormHandler(e) {
      e.preventDefault()
      const nameInput = document.getElementById('input-name').value
      const artistInput = document.getElementById('artist-name').value      
      // const trackImage = document.getElementById("track-image").value
      const trackInput = document.getElementById('track-title').value
      const trackId = parseInt(document.getElementById('tracks').value)  
      const relationshipInput = document.getElementById('relationship-input').value
      postFetch(nameInput, artistInput, trackInput, trackId, relationshipInput)
      
    }

    function postFetch(name, artist, image, preview, track_id){
      const bodyData = {name, artist, image, preview, track_id}

    fetch(BACKEND_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)      
    })    
    .then(response => response.json())
    .then(playlist => {
      // const playlistData = playlist.data.attributes
      const playlistMarkup = `
      <div data-id=${playlist.id}>
      <h4>${playlist.included.attributes.name}
      <h4>${playlist.included.attributes}
                     
       
      </div>`
      
      document.getElementById("playlist-container").innerHTML += playlistMarkup
    })
    

    function getTracks() {
      fetch(BACKEND_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyData)      
      }) 
        .then(response => response.json())
       .then(playlist => {   
          list.included.forEach(playlist => {
        const playlistMarkup = `    
          <div data-id=${playlist.id}>
          <h3>Playlist Name: ${playlist.attributes.name}          
            </div> 
            <br><br>` 
               
          
            // debugger
        document.getElementById("playlist-container").innerHTML += playlistMarkup
            }
      )}   )
}
    }
  

    


