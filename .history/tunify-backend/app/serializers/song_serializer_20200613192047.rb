class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :artists, :image, :duration, :popularity, :preview
  has_many :playlist_tracks
  has_many :playlists, through: :playlist_tracks
end
