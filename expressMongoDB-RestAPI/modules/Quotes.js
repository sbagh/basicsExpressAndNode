const mongoos = require('mongoose')

const QuoteSchema = new mongoos.Schema({
    content: {
        type: String,
        author: String
    }
})


module.exports = mongoose.model('Quote', QuoteSchema)