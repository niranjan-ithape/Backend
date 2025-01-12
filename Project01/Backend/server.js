const express = require('express');
const app = express();

let port = 3000;

// app.get('/', (req, res) => {
//     res.send("Server is ready");
// });

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "joke",
            content: "this is joke"
        },
        {
            id: 2,
            title: "this second joke",
            content: "this is another joke"
        },
        {
            id: 3,
            title: "this is third joke",
            content: "this beautiful joke"
        },
        {
            id: 4,
            title: "this is fourth joke",
            content: "this is joke"
        },
        {
            id: 5,
            title: "this is fifth joke",
            content: "this is joke"
        },
    ];
    
    // Send the jokes as a JSON response
    res.send(jokes);
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
