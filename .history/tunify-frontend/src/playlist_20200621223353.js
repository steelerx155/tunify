class Playlist {

  constructor(playlist, playlistAttributes) {     
     this.id = playlist.id
     this.name = playlistAttributes.name
     this.tracks = playlistAttributes.tracks
    //  this.artist = playlistAttributes.tracks[0].artist  
    //  this.title = playlistAttributes.tracks[0].title  
     Playlist.all.push(this)  
    //  debugger    
}


    renderPlaylistCard() {
      return  `            
       <div data-id=${this.id}>
       <h3><li>Playlist Name: ${this.name}</h3></li>   
      
       <button data-id=${this.id}>EDIT!</button>    
       </div> </li>
       `;              
     }
    }  


    
Playlist.all = [];