class Playlist {

  constructor(playlist, playlistAttributes) {     
     this.id = playlist.id
     this.name = playlist.attributes.name
    //  this.track = playlistAttributes.track
     this.artist = playlist.attributes.track[0].artist  
     this.title = playlist.attributes.tracks[0].title
     Playlist.all.push(this);     
   //  debugger 
}


renderPlaylistCard() {
  return  `            
   <div data-id=${this.id}>
   <h3><li>Playlist Name: ${this.name}</h3></li>   
   <h4><li>Track Title: ${this.title}</h4></li>
   <h4><li>Track Artist: ${this.artist}</h4></li>
   <button data-id=${this.id}>EDIT!</button>    
   </div> </li>
   `;              
         
 }
}  

Playlist.all = [];