const user = {
    fullName: "Gabriella Godwin",
    email: "uzowuluchinyere7@gmail.com",
    age: 35,
    phoneNumber: [
        {
            home: '07064248345',
            mobile: '07035533283'
        }
    ],
    children: ['Victoria', 'Precy', 'Olive'],
    newBirth: function () {
        return `${this.fullName} birthed a new child`
    }

}

console.log(user)
console.log(user.fullName)
console.log(user.age)
console.log(user.newBirth())
