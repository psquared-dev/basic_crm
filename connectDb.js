import mongoose from 'mongoose';

async function connect() {
	try {
		const conn = await mongoose.connect('mongodb://0.0.0.0/crm2');
		console.log('MongoDb connected', conn);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
}

export default connect;
