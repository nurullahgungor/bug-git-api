const config = require("../bundle/config");
const request = new Request(config.headerMiddleware.internet_protocol + config.headerMiddleware.hostname + config.headerMiddleware.path);

fetch(request)
    .then(response => {
        response.json()
            .then(json => {
                if(Array.isArray(json.items)){
                    var repoData = json.items.map(item =>{
                            return{
                                "name" : item.name,
                                "link" : item.html_url,
                                "language" : item.language,
                                "privateRepo" : item.private 
                            }   
                    })
                    if(Array.isArray(repoData)){
                        console.log(repoData);
                    }else{
                        console.log("repoData variable is not array");
                    }
                }else{
                    console.log("it is not array")
                }
        })
    }).catch(error =>{
        console.log(error);
    })

