class API::V1::PlaylistsController < ApplicationController
    
    def index 
      playlists = Playlist.all   
      options = {
        include: [:tracks, :is_collection]
      }
     
      render json: PlaylistSerializer.new(playlists,options)
    end     

    
    
      def create
        playlist = Playlist.new(playlist_params)
        if playlist.save         
        render json: PlaylistSerializer.new(playlist)
        else          
          render json: {errors: playlist.errors.full_messages}          
        end
      end


      private 

      def playlist_params
        params.require(:playlist).permit(:name)
      end
end
