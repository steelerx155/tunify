# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or newd alongside the database with db:setup).

 Playlist.destroy_all
 Track.destroy_all


country = Playlist.create!(name: "Country Songs")
pop = Playlist.create!(name: "Pop Songs")


third = Track.create!(title: "Third Song", artist: "Brady")
fourth = Track.create!(title: "Fourth Song", artist: "Kristy", playlist_id: country.id)
hiphop = Track.create!(title: "Hip Hop Horray", artist: "Randy")
first = Track.create!(title: "First Song", artist: "Randy", playlist_id: country.id)
second = Track.create!(title: "Second Song", artist: "Kristy")





