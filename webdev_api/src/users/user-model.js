import { compare } from 'bcryptjs';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
},{
    timestamps: true
})


userSchema.set('toJSON', {
    transform (doc, ret) {
        delete ret.password
        return ret
    },
})
userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
    return compare( candidatePassword, this.password );

}

export default mongoose.model('User', userSchema);
// Export du modèle User
//commande K et commende C et bim tout en commentaires