const { Router } = require('express');
const router = Router();
const _= require('underscore');

const movies = require('../ejemplo.json');


router.get('/api/movies', (req, res) => {
	res.json(movies);
});

router.post('/api/movies', (req , res) => {
	const { titulo, director, year, rating } = req.body;

	if (titulo && director && year && rating) {
		const id = movies.length + 1;
		const newMovie = {...req.body, id};
		movies.push(newMovie);
		res.json(movies);
	}else{
		res.status(500).json({error: 'There was an error.'});
	}
});

router.put('/api/movies/:id', (req, res)=>{
	const { id } = req.params;
	const { titulo, director, year, rating } = req.body;

	if (titulo && director && year && rating) {
		_.each(movies, (movie, i)=>{
			if (movie.id == id) {
				movie.titulo = titulo;
				movie.director = director;
				movie.year = year;
				movie.rating = rating;
			}
		});
		res.json(movies);
	}else{
		res.status(500).json({error: 'there was an error. '});
	}
});

router.delete('/api/movies/:id', (req, res)=>{
	const { id }= req.params;
	_.each(movies, (movie, i)=>{
		if (movie.id == id) {
			movies.splice(i, 1);
		}
	})
	res.send(movies);
});

module.exports = router;