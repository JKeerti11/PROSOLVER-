const mongoose = require('mongoose');

const DSAConceptSchema = new mongoose.Schema({
    title: String,
    codeSnippet: String,
    explanation: String,
    imageUrl: String
});

module.exports = mongoose.model('DSAConcept', DSAConceptSchema);
