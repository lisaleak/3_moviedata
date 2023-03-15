let movieData = [ 
            {
      title: "The Darjeeling Limited",
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
            },
            {
      title: "The Royal Tenenbaums",
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
            },
            {
      title: "Fantastic Mr. Fox",
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
        {
      title: "The Grand Budapest Hotel",
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
];
// Rendering objects on HTML doc //

// let sortedmovies = movieData items sorted into an array ordered by the values of one property //
// append visible properties to firstmovie //

sortedData = movieData

sortedData = movieData.sort(function compareNumbers(a, b) {
  return b.rating - a.rating;
})


let movie1 = sortedData[0];
let movie2 = sortedData[1];
let movie3 = sortedData[2];
let movie4 = sortedData[3];
document.getElementById("obj1title").innerHTML = movie1["title"];
document.getElementById("obj1text").innerHTML = movie1["plot"];
document.getElementById("obj2title").innerHTML = movie2["title"];
document.getElementById("obj2text").innerHTML = movie2["plot"];
document.getElementById("obj3title").innerHTML = movie3["title"];
document.getElementById("obj3text").innerHTML = movie3["plot"];
document.getElementById("obj4title").innerHTML = movie4["title"];
document.getElementById("obj4text").innerHTML = movie4["plot"];