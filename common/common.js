Messages = new Mongo.Collection("messages");

var Schemas = {};

Schemas.Messages = new SimpleSchema({
    message: {
        type: String,
        label: "Message",
        max: 300
    },
    author: {
        type: String,
        label: "Author"
    },
    created: {
        type: Date,
        label: "Sent",
        optional: true
    },
});

Messages.attachSchema(Schemas.Messages);