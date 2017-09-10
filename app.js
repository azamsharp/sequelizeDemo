const models = require('./models')

let user = new models.User({
  firstname: 'Mary',
  lastname: 'Doe',
  email: 'marydoe@gmail.com',
  username: 'mary'
})

let address = new models.Address({
  street: 'Hilcroft',
  city: 'Houston',
  state: 'TX'
})

user.addresses = [];
user.addresses.push(address)

user.save({
  model: models.Address,
  as: 'addresses'
}).then(function(user){
  console.log(user)
})



// get the address by id
models.Address.findById(2,{
  include: [
    {
      model :models.User,
      as: 'user'
  }
  ]
}).then(function(address){
//  console.log(address.user)
})
