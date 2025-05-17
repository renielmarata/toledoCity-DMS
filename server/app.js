const { signinController } = require("./controllers");
const { express, dotenv, cookieParser, helmet, cors } = require("./utils/libs");


const startServer = async () => {
    try {
        const app = express();

        // start database connection here

        app.use(express.json());
        app.use(cookieParser());
        app.use(helmet());
        app.use(cors({
            origin: 'http://localhost:5173',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            credentials: true,
            allowedHeaders: ['Content-Type', 'Authorization'],
        }));



        app.post('/auth/signin', signinController);




        app.listen(process.env.PORT || 5000, ()=>{
            console.log("Listen at PORT:"+process.env.PORT);
        })
    } catch (err) {
        console.log(err);
        // send error response here
    }
}

startServer();