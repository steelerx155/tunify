class Playlist {

  constructor(playlist, playlistAttributes) {     
     this.id = playlist.id;
     //debugger
     this.name = playlistAttributes.name;
     this.tracks.title = playlistAttributes.tracks.title;
     this.tracks.artist = playlistAttributes.tracks.artist;
     this.tracks = playlistAttributes.tracks;
     Playlist.all.push(this);     
    // debugger 
}


    renderPlaylistCard() {
      return  `            
       <div data-id=${this.id}>
       <h3><li>Playlist Name: ${this.name}</h3></li>   
       <h4><li>Track Title: ${this.tracks.title}</h4></li>
       <h4><li>Track Artist: ${this.tracks.artist}</h4></li>
       <button data-id=${this.id}>EDIT!</button>    
       </div> </li>
       `;              
             
     }
    }  

Playlist.all = [];