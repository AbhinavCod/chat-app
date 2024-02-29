import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export const sendMessage =  async (req,res)=>{
    try {
        const {id:recieverId} = req.params;
        const {message} = req.body;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId,recieverId]},
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId,recieverId],
            })
        }

        const newMessage = new Message({
            senderId:senderId,
            recieverId:recieverId,
            message:message,
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        };

        //Socket io functionality

        // await conversation.save();
        // awa1it message.save();

        await Promise.all([conversation.save(),message.save()]);

        return res.status(201).json({message:"Message sent successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Internal serever error"});
    }
};

export const getMessage = async (req,res)=>{
    try {
        const {id:userToChat} = req.params;
        const senderId = req.user._id;

        const consversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChat]},
        }).populate("messages");

        if(!consversation){
            return res.status(200).json([]);
        }

        res.status(200).json(consversation.messages);

    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Internal server errror "});
    }
};