import express from 'express';
import crmRoutes from './routes/crmRoutes.js';
import connect from './connectDb.js';

const app = express();
connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(crmRoutes);
app.get('/', (req, res) => {
	res.send('root');	
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
