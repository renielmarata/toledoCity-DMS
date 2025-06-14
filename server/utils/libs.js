const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const bcrypt = require("bcrypt");
const Joi = require("joi");


module.exports = {
    express,
    mongoose,
    dotenv,
    cookieParser,
    helmet,
    cors,
    jwt,
    validator,
    bcrypt,
    Joi,
}