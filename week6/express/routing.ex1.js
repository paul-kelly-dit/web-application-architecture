const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello World');
});