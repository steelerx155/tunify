class Playlist {

  constructor(playlist, playlistAttributes) {     
     this.id = playlist.id
     this.name = playlistAttributes.name
     this.artist = playlistAttributes.artist
     this.title = playlistAttributes.title  
     this.track = playlistAttributes.track
     Playlist.all.push(this)
      debugger    
}


    renderPlaylistCard() {
      return  `            
       <div data-id=${this.id}>
       <h3><li>Playlist Name: ${this.name}</h3></li>   
       <h4><li>Track Artist: ${this.artist}</h4></li>
       <h4><li>Track Title: ${this.title}</h4></li>
       <h4><li>Track ${this.track}</h4></li>
       <button data-id=${this.id}>Edit!</button>    
       </div> </li>
       `;              
     }
    }  


    
Playlist.all = [];