

let songlist;

function requestAsync(url) {
    return new Promise((resolve, reject) => {
        var req = request(url, (err, response, body) => {
            if (err) return reject(err, response, body);
            resolve(JSON.parse(body));
        });
    });
};


// url Async requesting function
function httpGetAsync(theUrl, callback) {
    // create the request object
    var xmlHttp = new XMLHttpRequest();

    // set the state change callback to capture when the response comes in
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(xmlHttp.responseText);
        }
    }

    // open as a GET call, pass in the url and set async = True
    xmlHttp.open("GET", theUrl, true);

    // call send with no params as they were passed in on the url string
    xmlHttp.send(null);

    return;
}

// callback for the top 8 GIFs of search
function tenorCallback_search(responsetext) {
    // parse the json response
    var response_objects = JSON.parse(responsetext);
    res = response_objects["results"];

    // load the GIFs -- for our example we will load the first GIFs preview size (nanogif) and share size (tinygif)
    // document.getElementById("preview_gif").src = top_10_gifs[0]["media"][0]["nanogif"]["url"];
    // document.getElementById("share_gif").src = 
    return res[0]["media"][0]["tinygif"]["url"];;
}


// function to call the trending and category endpoints
function grab_data(search_terms) {
    // set the apikey and limit
    var apikey = "RPXDNR1LTCTK";
    var lmt = 1;
    var urls = search_terms.map(function(e){
        return "https://api.tenor.com/v1/search?q=" + e + "&key=" + apikey + "&limit=" + lmt;
    });
    return;
}

function pickRandomSong() {
    let rand_index = Math.floor(Math.random() * (songlist.length)); //Because using floor 
    let idx = rand_index >= songlist.length ? rand_index - 1 : rand_index;
    return songlist[idx];
}

function render() {
    let picked_song = pickRandomSong();
    let words_in_title = _.uniq(picked_song.title.split(' '));
    console.info(words_in_title);
    let image_urls = grab_data(words_in_title);
    
}

function main(data) {
    songlist = data;
    render();
}


$(document).ready(

);