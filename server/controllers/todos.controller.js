const Todo = require('../models/todos')

module.exports = {

  create: function(req,res){
    let newTodo = new Todo({
      todo: req.body.todo,
      done: "PENDING",
      created_at: new Date(),
      updated_at: new Date()
    })

    newTodo.save(function(err){
      if(err){
        res.json(err)
      }
      else{
        res.json(newTodo)
      }
    })
  },

  done: function(req,res){
    Todo.findOne({_id:req.params.id},function(err,tod){
      if(err){
        res.json(err)
      }
      else{
        tod.done = "DONE"
        tod.save(function(err){
          if(err){
            res.json(err)
          }
          else{
            res.json(tod)
          }
        })
      }
    })
  },

  delete: function(req,res){
    Todo.findOneAndRemove({_id:req.params.id},function(err){
      if(err){
        res.send(err)
      }
      else{
        res.send(`success to delete doc with id ${req.params.id}`)
      }
    })
  },

  show: function(req,res){
    Todo.find({},function(err,tod){
      if(err){
        res.json(err)
      }
      else{
        res.json(tod)
      }
    })
  },

  deleteAll: function(req,res){
    Todo.remove({},function(err){
      if(err){
        res.send(err)
      }
      else{
        res.send(`success to delete doc`)
      }
    })
  }

}
