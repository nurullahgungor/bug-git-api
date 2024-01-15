const express = require("express");
const app = express();
const config = require("./bundle/config");
const gitRepos = require("./routes/fetchGitRepos");

console.log(config);


// Important for project branch
// Change `/gitRepos` with your link branch.
app.use("/gitRepos", gitRepos); 

app.listen(config.configTree.port, () => {

    //Default port is 3000, if you want to change this port : Config => config.json => { "port" : "yourPortNumber" }
    console.log(`Server on ${config.configTree.port}`)
})