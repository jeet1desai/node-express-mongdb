const mongoose = require('mongoose');

// Connection create and create db if not exist
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connection Successful...'))
    .catch((e) => console.log(e));


// Schema
const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "Error: Enter more than 2 Letter"]
    },
    ctype: String,
    video: {
        type: Number,
        validate(value){
            if(value < 0){
                throw new Error("No Negetive Value");
            }
        }
    },
    author: String,
    active: Boolean,
    date: { type: Date, default: Date.now },
});

// Model
const Data = new mongoose.model('Data', dataSchema);

// Create Document || Insert Operation
const createDocuments = async () => {
    try {
        const nodeData = new Data({
            name: "Mongoos Js",
            ctype: "Back End",
            video: 35,
            author: "P D",
            active: true,
        });
        const result = await nodeData.save();
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}
// createDocuments();

const getDocument = async () => {
    // const result = await Data.find({ video: { $gte: 35 } }).select({ name: 1 });

    // // And, Or Oprator
    // const result = await Data.find({ $or: [{ctype: "Back End"}, {author: "Jeet Desai"}]}).select({ name: 1 });

    // // Count
    // const result = await Data.find({ video: { $gte: 35 } }).select({ name: 1 }).createDocuments();

    // // Sorting Asc-Dsc  1:asc -1:dsc  
    // const result = await Data.find({ video: { $gte: 35 } }).select({ name: 1 }).sort({ name: 1 });

    console.log(result);
}
// getDocument();


const updateDocument = async (_id) => {
    try {
        // const result = await Data.updateOne({ _id }, {
        //     $set: {
        //         name: "Mongo Db"
        //     }
        // });
        const result = await Data.findByIdAndUpdate({ _id }, {
            $set: {
                name: "Mongo Db"
            }
        }, {
            new: true,
            useFindAndModify: false
        });
        console.log(result);
    } catch (e) {
        console.log(e);
    }

}
// updateDocument("60c1fe8d6dcafe271400a555");



const deleteDocument = async (_id) => {
    try {
        // const result = await Data.deleteOne({_id});
        const result = await Data.findByIdAndDelete({ _id });
        console.log(result);
    } catch (e) {
        console.log(e);
    }

}
// deleteDocument("60caef8152e81029d0681463");