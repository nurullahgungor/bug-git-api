const express = require("express");
const https = require("https");
const config = require("../bundle/config");
const router = express.Router();

const gitApiOpt = require("../bundle/config");

console.log("git", gitApiOpt)

router.get("/", (req, res, next) => { 
    

    const request = https.request(
        gitApiOpt.headerMiddleware,
        function (response) {
            console.log("bsd")
            var gitApiData = "";
            
            response.on("data", function (chunk) {
                gitApiData += chunk;
            });

            response.on("end", function () {
                
                const jsonApi = JSON.parse(gitApiData);

                if (Array.isArray(jsonApi.items)) {
                    // Turn the api items to regular objects
                    var resArr = jsonApi.items.map( function(repo) {
                        return {
                            "name": repo.name,
                            "link": repo.html_url,
                            "language": repo.language,
                            "privateRepo": repo.private
                        };
                    });

                    console.log(resArr);
                    res.end("saasads");

                } else {
                    console.log("Error!")
                    res.statusCode = 500;
                    res.end("Invalid JSON Data");
                }
            
                
            });

            response.on("error", function (error) {
                console.error("Request error:", error);
                res.statusCode = 500;
                res.end("Request error");
            });
        })
});

module.exports = router;
