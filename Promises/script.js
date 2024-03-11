function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = true

            if (dogwalked) {
                resolve("You walk the dog 🐕‍🦺")
            }
            else {
                reject("YOU DIDN'T WALK THE FUCKING DOG!")
            }
            
        }, 1500)
    })
}

function cleanKitchen() {
    

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true

            if(kitchenCleaned){
                resolve("You clean the kitchen 🧹")
            }
            else {
                reject("YOU DIDN'T CLEAN THE FUCKING KITCHEN!")
            }
        }, 2500)
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = false

            if(trashTakenOut) {
                resolve("You take out the trash ♻️")
            }
            else {
                reject("YOU DIDN'T TAKE OUT THE FUCKING TRASH!")
            }
        }, 1500)
    })
}

walkDog()
.then(value => {console.log(value); return cleanKitchen()})
.then(value => {console.log(value); return takeOutTrash()})
.then(value => {console.log(value); return console.log("You finished all the chores!")})
.catch(error => console.error(error))