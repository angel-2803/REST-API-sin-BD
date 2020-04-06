const { Router } = require('express');

const router = Router();

router.get('/test', (req, res) => {
	const data = {
		"nombre": "miguel",
		"email": "angeñ-41@live.com.mx"
	};
	res.json(data);
});

module.exports = router;