class Playlist {
 
  constructor(playlist, playlistAttributes) {  
    
     this.id = playlist.id
     this.name = playlistAttributes.name  
     Playlist.all.push(this);   
}

renderPlaylistCard() {
  return  `            
  
   <h3><li>Playlist Name: ${this.name}</h3></li> 
   <button data-id=${this.id}>EDIT!</button>    
    </li>
   `
      ;  
 }
}  

Playlist.all = [];