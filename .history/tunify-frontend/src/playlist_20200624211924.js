class Playlist {
 
  constructor(playlist, playlistAttributes) {  
    
    var i;  
     for (i = 0; i < playlist.length; i++) {
      playlistAttributes.tracks[i].artist && playlistAttributes.tracks[i].title
    } 
    var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
     
     this.id = playlist.id
     this.name = playlistAttributes.name    
     this.artist = playlistAttributes.tracks[i].artist
     this.title = playlist.attributes.tracks[i].title       
     Playlist.all.push(this);      
}
   

renderPlaylistCard() {
  return  `            
   <div data-id=${this.id}>
   <h3><li>Playlist Name: ${this.name}</h3></li>   
   <h4><li>Track Artist: ${this.tracks.artist}</h4></li>
   <h4><li>Track Title: ${this.tracks.title}</h4></li>    
   <button data-id=${this.id}>EDIT!</button>    
   </div> </li>
   `
   ;
 }
 
}  


Playlist.all = [];