import mongoose from "mongoose";

const MaterialsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    }
})

const Material = mongoose.model('Material', MaterialsSchema);

export default Material;