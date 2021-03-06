class Playlist {
 
  constructor(playlist, playlistAttributes) {    
     this.id = playlist.id
     this.name = playlistAttributes.name  
     Playlist.all.push(this);  
   
}

renderPlaylistCard() {
  return   `            
   <div data-id=${this.id}>
   <h3><li>Playlist Name: ${this.name}</h3></li> 
   <button data-id=${this.id}>EDIT!</button>    
   </div> </li>
   ` ;  
 }

 static findById(id) {
  return this.all.find(playlist => playlist.id === id);
} 

  renderUpdateForm() {
    return `
    <form data-id=${this.id}>
      <label>Name</label>
      <p>
        <input type="text" value="${this.name}" />
      </p>
      
      <button type='submit'>Save Playlist</button>
    </form>
  `;
  }
  update({name}) {
    this.name = name  
  }
}


Playlist.all = [];
