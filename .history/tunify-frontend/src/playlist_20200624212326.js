class Playlist {
 
  constructor(playlist, playlistAttributes) {  
    
    var i;  
     for (i = 0; i < playlist.length; i++) {
      playlistAttributes.tracks[i].artist && playlistAttributes.tracks[i].title
    } 

     
     this.id = playlist.id
     this.name = playlistAttributes.name    
     this.artist = playlistAttributes.tracks[i].artist
     this.artist = playlistAttributes.tracks[1].artist
     this.title = playlist.attributes.tracks[0].title    
     this.title = playlist.attributes.tracks[1].title     
     Playlist.all.push(this);   
     debugger   
}
   

renderPlaylistCard() {
  return  `            
   <div data-id=${this.id}>
   <h3><li>Playlist Name: ${this.name}</h3></li>   
   <h4><li>Track Artist: ${this.artist}</h4></li>
   <h4><li>Track Title: ${this.title}</h4></li>    
   <button data-id=${this.id}>EDIT!</button>    
   </div> </li>
   `
   ;
 }
 
}  


Playlist.all = [];