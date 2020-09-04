

function baseRoute(app){
	var indexRouter = require('./routes/index');
	var usersRouter = require('./routes/users');
	var aboutRouter = require('./routes/about');
	
	app.use('/', indexRouter);
	app.use('/users', usersRouter);
	app.use('/about',aboutRouter);
}

module.exports = baseRoute