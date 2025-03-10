# UrlShortner
 Short Url
{
    "version":2,
    "builds":[
        {
            "src":"./index.js",
            "use": "@vercel/node"
        }
    ],
    "routes":[
        {
            "src":"/(.*)",
            "dest":"/"
        }
    ]
    
}