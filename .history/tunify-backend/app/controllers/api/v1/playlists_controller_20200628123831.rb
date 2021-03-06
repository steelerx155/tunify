class API::V1::PlaylistsController < ApplicationController
    
    def index 
      playlists = Playlist.all   
      options = {
        include: [:tracks]
      }
     
      render json: PlaylistSerializer.new(options, playlists)
    end     

    
    
      def create
        playlist = Playlist.new(playlist_params)
        if playlist.save          
          options = {
            include:  [:tracks]
        }
        render json: PlaylistSerializer.new(playlist, options)
        else          
          render json: {errors: playlist.errors.full_messages}          
        end
      end

        def show 
          playlist = Playlist.find_by(params[:id])
          options = {
            include:  [:tracks]
        }
          render json: PlaylistSerializer.new(playlist, options)
      end
     

      private 

      def playlist_params
        params.require(:playlist).permit(:name, :tracks, :id)
      end
end
