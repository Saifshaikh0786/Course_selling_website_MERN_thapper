const { z } = require("zod");

const ContactSchema = z.object({
    email: z
        .string({ required_error: "Please fill the email" })
        .trim()
        .email({ message: "Invalid email address" }),
    username: z
        .string({ required_error: "Please fill the username" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters long" })
        .max(255, { message: "Name cannot exceed 255 characters" }),
    message: z
        .string({ required_error: "Please enter your message" })
        .trim()
        .min(1, { message: "Message cannot be empty" }),
});

module.exports = ContactSchema;
