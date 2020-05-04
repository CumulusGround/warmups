# Card Traders
# Alfred and Peter are best friends and Pokemon card traders. Each week they get together and decide to buy a new pack of Pokemon trading cards. Each pack has a total of 10 cards. Each card has the Pokemon's name and attack power.

# Alfred and Peter have not opened the pack yet, but it contains the following cards:

# Name	Attack
# Pikachu	40
# Rattata	20
# Pidgeot	60
# Alakazam	80
# Butterfree	30
# Gengar	70
# Moltres	100
# Vulpix	40
# Blastoise	80
# Hitmonchan	50
# Put the above cards into an appropriate data structure (so that you can easily remove or change the order of cards if you needed to)

# They are about to open the pack of cards, and they have a ritual for deciding who gets to keep each card in the pack.

# Do each of the following with your data structure:

require 'pry'

card_pack = [
    {
        name: "Pikachu",
        attack: 40
    },
    {
        name: "Rattata",
        attack: 20
    },
    {
        name: "Pidgeot",
        attack: 60
    },
    {
        name: "Alakazam",
        attack: 80
    },
    {
        name: "Butterfree",
        attack: 30
    },
    {
        name: "Gengar",
        attack: 70
    },
    {
        name: "Moltres",
        attack: 100
    },
]

# 2a) Firstly, keeping the cards faced down (so they cannot see), they reverse the order of the cards.

reverse_pack  = card_pack.reverse


# 2b) They then split the cards into groups of 3, so they end up with 4 piles of cards (the first three with 3, and the last pile with just 1)

#split into array of array?
piles_array = []
while reverse_pack.length != 0
    piles_array << reverse_pack.slice!(0..2)
end

# 2c) Alfred takes the first and third piles of cards, and Peter takes the second and fourth piles. Create a new data structure for Alfred and Peter and pass them the cards.
alfred = []
peter = []


piles_array.each_with_index do |item, index|
    if index.odd?
        alfred << item
    else
        peter << item
    end
end

p alfred
p peter

# binding.pry
