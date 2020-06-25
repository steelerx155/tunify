# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or newd alongside the database with db:setup).
#
# Examples:
#
# newtrack = Track.create(name: "My newest Track")
# favtrack = Track.create(name: "my fav Track")
# thetrack = Track.create(name: 'easy come, easy go')
# hey = Track.create(name: "hey")
# leastfav = Track.create(name: "I hate this Track")

#karaoke = Playlist.create(name: "karaoke", track_id: newtrack.id)
# lady = Playlist.new(name: "Country", track_id: thetrack.id)

# 

country = Playlist.create!(name: "Country Songs", track_id: first.id)
pop = Playlist.create!(name: "Pop", track_id: fourth.id)
# country = Playlist.new(name: "Country Songs", track_id: hiphop.id)
second = Track.create!(name: "Second Song", artist: "Kristy", playlist: hiphop.id)
third = Track.create!(name: "Third Song", artist: "Brady", playlist: pop.id)
fourth = Track.create!(name: "Fourth Song", artist: "Kristy", playlist: country.id)
hiphop = Track.create(name: "Hip Hop Horray", playlist: pop.id)
first = Track.create!(name: "First Song", artist: "Randy", playlist: country.id)

Playlist.destroy_all
Track.destroy_all











