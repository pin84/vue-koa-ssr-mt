import mongoose from 'mongoose'
const Schema = mongoose.Schema
const abc = new Schema({
  city: {
    type: String
  },
  types: {
    type: Array,
    require: true
  },
  areas:{
    type:Array,
    require:true
  }
})

export default mongoose.model('categroy', abc)


