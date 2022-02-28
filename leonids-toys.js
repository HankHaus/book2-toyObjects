const toys = [
    {
        id: 1,
        name: "Rubiks Cube",
        color: "All of them lol",
        price: 108.99
    },

    {
        id: 2,
        name: "Power Ranger",
        color: "blue",
        price: 35.87
    },

    {
        id: 3,
        name: "Skateboard",
        color: "purple",
        price: 4.53
    }
]

const YeeYee = {
    id: 4,
    name: "UpChurch",
    price: "very cheap. not even worth a float",
    age: 35
}
toys.push(YeeYee)

const toyId = 2

for (const toy of toys) {
    toy.price = toy.price * 1.05
    if (toyId === toy.id) {
        console.log(`The ${toy.name}, costs $${toy.price}, and it's color is ${toy.color}`)
    }
}
