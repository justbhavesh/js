// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn =  false

// console.log(tinderUser);

const regularUser = {
    email: "some@gamil.com",
    fullname: {
        userfullname: {
            firstname: "bhavesh",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname)

// console.log(regularUser.fullname.userfullname)

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",2: "b"}

const obj3 = { obj1, obj2}
console.log(obj3)