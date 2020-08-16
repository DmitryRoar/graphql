const users = [
    {name: 'Igor', age: 30, email: 'igor@mail.ru'},
    {name: 'Elena', age: 23, email: 'elena@mail.ru'}
]


module.exports = {
    test() {
        return {
            count: (Math.random() * 10).toFixed(),
            users
        }
    },
    random({min, max, count}) {
        const arr = []
        for (let i = 0; i < count; i++) {
            const random = Math.random() * (max - min) + min
            arr.push(random)
        }

        return arr
    },
    addTestUser({user: {name, email}}) {
        users.push({name, email, age: (Math.random() * 30).toFixed()})
        return users
    },
    getTodosf() {

    }
}