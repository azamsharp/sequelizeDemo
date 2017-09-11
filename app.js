const models = require('./models')

models.Address.findById(1,{
  include: [
    {
      model: models.User,
      as: 'user'
    }
  ]
}).then(function(address){
  console.log(address.user.firstname + " " + address.user.lastname)
})
