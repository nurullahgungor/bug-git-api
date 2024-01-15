/* 
    IOC container testing 

    **********************
    for developers = require("../safe_datas/config/config.json");

    
    for productions = require("..config/config.json");
    **********************
    
*/ 
const config = require("../config/config.json")

const headerMiddleware = {
    internet_protocol : "https://",
    hostname: 'api.github.com',
    path: `/search/repositories?q=user:${config.userName}`, // Github api path url
    method: 'GET',
    headers: {
        "User-Agent" : "My-App",
        "Authorization" : `Bearer ${config.githubToken}`
    }
};

/*if(config.optionalUserAgent){
    headerMiddleware.headers["User-Agent"] = config.optionalUserAgent; 
} else {
    headerMiddleware.headers["User-Agent"] = "My-Github-App"; // Provide a default User-Agent if none is specified
}*/

module.exports = {
    headerMiddleware : headerMiddleware,
    configTree : config
}