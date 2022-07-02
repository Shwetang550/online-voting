// importing post model
import mongoose from 'mongoose';
import Parties from '../model/parties.js';

export const getParties = async (req, res) => { 
    try {
        const allParties = await Parties.find();
        
        res.status(200).json(allParties);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateParty = async (req, res) => {
    const prevPartyVersion = await Parties.findById(req.params.id);

    await Parties.findByIdAndUpdate(req.params.id, {
        votes: [
            ...prevPartyVersion.votes,
            {
                voter_id: req.body.voter_id,
                voter_photo: req.body.voter_photo
            }
        ]
    }, { new: true })
        .then(result => res.json(result))
        .catch(error => res.json(error.message));
};

// export const likePost = async (req, res) => {
//     const prevPostVersion = await Post.findById(req.params.id);

//     await Post.findByIdAndUpdate(req.params.id, {
//         likeCount: prevPostVersion.likeCount + 1
//     }, { new: true })
//         .then(result => res.json(result))
//         .catch(error => res.json(error.message));
// }