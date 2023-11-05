import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({  
	firstname: {
		type: String,    
		required: true,
	}, 
	lastname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
	},
	company: {
		type: String,
	},
	phone: {
		type: String,
	},
	created_on: {
		type: Date,
		default: Date.now,
	},
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
