import express from 'express';
import cors from 'cors';
import students from './api/students.route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', students);
app.use('*', (req, res) =>
	res.status(404).json({ error: 'shit bro not found' })
);

export default app;
