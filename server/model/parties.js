import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    party_name: String,
    candidate_name: String,
    votes: [
        {
            voter_id: String,
            voter_photo: String
        }
    ]
});

const Parties = mongoose.model('Party', postSchema);

export default Parties;