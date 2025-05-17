const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const validator = require('validator');


module.exports = {
    express,
    mongoose,
    dotenv,
    cookieParser,
    helmet,
    cors,
    validator,
}