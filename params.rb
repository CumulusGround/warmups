# Params
# Do NOT setup a web server for this problem. Just create a .rb file and write your answers there.

# You receive the data:

params = {
  username: 'chocolate',
  password: 'pudding',
  friends: ['vanilla', 'strawberry', 'caramel'],
  image_url: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
}



# Write the code to:

# print the username to the console.
puts params[:username]

# print the last friend from friends.
puts params[:friends].last

# check if the password meets the requirements of at least 8 characters.
if params[:password].length >= 8
    p true
else
    p false
end

# add a key-value pair to params where key is the data_sent_time and the value is the current time.
params[:data_sent_time] = Time.now

p params