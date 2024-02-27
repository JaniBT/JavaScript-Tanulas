class User{
    static userCount = 0

    constructor(username){
        this.username = username
        User.userCount++
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online!`)
    }

    sayHello(){
        console.log(`Hello ${this.username}!`)
    }
}

const user1 = new User("Spongebob")
const user2 = new User("Patrick")
const user3 = new User("Sanyi")

user1.sayHello()
user2.sayHello()
user3.sayHello()

console.log(user1.username)
console.log(user2.username)
console.log(user3.username)
console.log(User.getUserCount())