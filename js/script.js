/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Almost There", "Poor Unfortunate Souls",
"Ready as I'll Ever Be", "I won't say I'm in love"];
var imagesLinks =["theprincessandthefrog.jpg","theLittleMermaid.jpg","tangled.jpg","hercules.jpg",];
var artists=["Anika Noni Rose (Princess and the frog)"
,"Pat Caroll (The Little Mermaid)","Cast of Tangled: The series"
,"Cast of Hercules"];
var songLengths=["2:21","2:49","2:03","2:10"];
var songLinks=["https://www.youtube.com/watch?v=ljdAYTH5QSY",
"https://youtu.be/xfkkMHieqcI",
"https://www.youtube.com/watch?v=G9T0kQA1Hnw",
"https://www.youtube.com/watch?v=FqDaoMtIujs"
];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above

    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
 function  displaySongInfo(){
 songs.forEach(function(title){
 $("#songs").append("<p>"+title+"</p>");   
});
imagesLinks.forEach(function(img){
 $("#images").append("<img src='"+img+"'>");   
});
artists.forEach(function(element){
 $("#artists").append("<p>"+element+"</p>");   
});
songLinks.forEach(function(links){
 $("#links").append("<a href='"+links+"'>Listen</a>");   
});
songLengths.forEach(function(length){
 $("#lengths").append("<p>"+length+"</p>");   
});
}
function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#links").empty();
    $("#lengths").empty();
    // Use jQuery to empty all of the remaining divs
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
var newsong =$("#song").val();
var newimage=$("#image").val();
var newartist =$("#artist").val();
var newlength=$("#length").val();
var newlink =$("#link").val();

songs.push(newsong);
imagesLinks.push(newimage);
artists.push(newartist);
songLengths.push(newlength);
songLinks.push(newlink);

}
function deleteSongInfo(num){
    songs.splice(num,1);
    imagesLinks.splice(num,1);
    artists.splice(num,1);
    songLinks.splice(num,1);
    songLengths.splice(num,1);
    
}
$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
    pushToLocalStorage();
});

displaySongInfo();

$("#delete").click(function() {
    deleteSongInfo($("#userChoice").val());
    emptySongInfo();
    displaySongInfo();
    pushToLocalStorage();
});


$("#empty").click(function() {
window.localStorage.clear();
});
function pushToLocalStorage(){
    window.localStorage.setItem("songs",JSON.stringify(songs));
    window.localStorage.setItem("imagelinks",JSON.stringify(imagesLinks));
    window.localStorage.setItem("artists",JSON.stringify(artists));
    window.localStorage.setItem("songLinks",JSON.stringify(songLinks));
    window.localStorage.setItem("songLengths",JSON.stringify(songLengths));
}