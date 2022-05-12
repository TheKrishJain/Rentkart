const express = require('express')
require('./db/mongoose')
const Landlord = require('./models/landlord')
const Tenant = require('./models/tenant')

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())

app.post('/Landlords', (req, res) => {
    const landlord = new Landlord(req.body)

    landlord.save().then(() => {
        res.status(201).send(landlord)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.post('/Tenants', (req, res) => {
    const tenant = new Tenant(req.body)

    tenant.save().then(() => {
        res.status(201).send(tenant)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// app.get('/users', (req, res) => {
//     User.find({}).then((users) => {
//         res.send(users)
//     }).catch((e) => {
//         res.status(500).send()
//     })
// })

// app.get('/users/:id', (req, res) => {
//     const _id = req.params.id

//     User.findById(_id).then((user) => {
//         if (!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     }).catch((e) => {
//         res.status(500).send()
//     })
// })

// app.post('/tasks', (req, res) => {
//     const task = new Task(req.body)

//     task.save().then(() => {
//         res.status(201).send(task)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
// })

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})