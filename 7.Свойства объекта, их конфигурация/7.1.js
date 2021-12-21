let user = {
    name: "Влад"
}

let descriptor = Object.getOwnPropertyDescriptor(user, 'name')

console.log(descriptor)