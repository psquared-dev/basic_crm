import express from 'express';
import Contact from '../model/crmModel.js';

const route = express.Router();

route.get('/contacts', async (req, res) => {
	try {
		const contacts = await Contact.find();
		res.json(contacts);
	} catch (error) {
		res.json(error);
	}
});

route.get('/contacts/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const contacts = await Contact.findById(id);
		res.json(contacts);
	} catch (error) {
		res.json(error);
	}
});

route.post('/contacts', async (req, res) => {	
	try {
		const newContact = await Contact.create(req.body);
		res.json(newContact);
	} catch (error) {
		res.json(error);
	}
});

route.put('/contacts/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const update = req.body;

		const contact = await Contact.findByIdAndUpdate(id, update, {
			new: true,
		});

		if (!contact) {
			return res.sendStatus(404);
		}

		res.json(contact);
	} catch (error) {
		res.json(error);
	}
});

route.delete('/contacts/:id', async (req, res) => {	
	try {		
		const id = req.params.id;

		const contact = await Contact.findByIdAndDelete(id);		

		if (!contact) {
			return res.sendStatus(404);
		}

		res.json(contact);
	} catch (error) {
		res.json(error);
	}
});

export default route;
