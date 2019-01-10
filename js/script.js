/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Almost There", "Poor Unfortunate Souls",
"Ready as I'll Ever Be", "I won't say I'm in love"];
var imagesLinks =["hercules.jpg","tangled.jpg","theLittleMermaid.jpg","thePrincessandthefrog.jpg"];
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
 
    
for (var index = 0; index < songs.length; index++) {

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}
$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
