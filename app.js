const cors = require('cors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const compression = require('compression');
const userRoutes = require('./routes/userRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const skillRoutes = require('./routes/skillRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');
const projectRoutes = require('./routes/projectRoutes');
const AppError = require('./utils/appError');

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss());

app.use(compression());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/about', aboutRoutes);
app.use('/api/v1/skill', skillRoutes);
app.use('/api/v1/experience', experienceRoutes);
app.use('/api/v1/recommendation', recommendationRoutes);
app.use('/api/v1/project', projectRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});

module.exports = app;
