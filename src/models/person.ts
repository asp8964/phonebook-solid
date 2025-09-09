import mongoose, { Model, model, Schema } from 'mongoose'
import { type IPersonDocument } from '~/types';
import dotenv from 'dotenv'
dotenv.config()

mongoose.set("strictQuery", false);
const url = process.env.MONGODB_URI;

console.log("connecting to", url);
mongoose
    .connect(url ?? "")
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connection to MongoDB:', error.message)
    })

mongoose.set('debug', true)

const personSchema = new Schema<IPersonDocument>({
    name: { type: String, minLength: 3, require: true },
    number: {
        type: String,
        minLength: 8,
        validate: {
            validator: (v: string) => /^\d{2,3}-\d+$/.test(v),
            message: (value: { value: string }) => `${value} is not a valid phone number!`,
        },
        require: true,
    }
});

personSchema.set('toJSON', {
    transform: (_, returnedObject: Partial<IPersonDocument>) => {
        returnedObject.id = returnedObject._id?.toString()
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const Person = mongoose.models.Person as Model<IPersonDocument> || model("Person", personSchema);

export default Person