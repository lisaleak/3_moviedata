let movieData = [ 
            {
      title: "The Darjeeling Limited",
      shorttitle: "Darjeeling Limited",
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
            },
            {
      title: "The Royal Tenenbaums",
      shorttitle: "Royal Tenenbaums",
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
            },
            {
      title: "Fantastic Mr. Fox",
      shorttitle: "Fantastic Mr. Fox",
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
      shorttitle: "Grand Budapest Hotel",
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

/* function declarations */

let sortedData = movieData;

function compareNumbers(a, b) {
  rating1 = a.rating;
  rating2 = b.rating;
  return rating2 - rating1;
}

function sortABC(a, b) {
  title1 = a.shorttitle.toLowerCase();
  title2 = b.shorttitle.toLowerCase();
  if(title1 < title2) {
    return -1;
}
  if(title1 > title2) {
    return 1;
}
  return 0;
}

function clearHTML () {
  document.getElementById("obj1title").innerHTML = "";
  document.getElementById("obj1text").innerHTML = "";
  document.getElementById("obj2title").innerHTML = "";
  document.getElementById("obj2text").innerHTML = "";
  document.getElementById("obj3title").innerHTML = "";
  document.getElementById("obj3text").innerHTML = "";
  document.getElementById("obj4title").innerHTML = "";
  document.getElementById("obj4text").innerHTML = "";
  };

function repopulate () {
  document.getElementById("obj1title").innerHTML = sortedData[0]["title"];
  document.getElementById("obj1text").innerHTML = sortedData[0]["plot"];
  document.getElementById("obj2title").innerHTML = sortedData[1]["title"];
  document.getElementById("obj2text").innerHTML = sortedData[1]["plot"];
  document.getElementById("obj3title").innerHTML = sortedData[2]["title"];
  document.getElementById("obj3text").innerHTML = sortedData[2]["plot"];
  document.getElementById("obj4title").innerHTML = sortedData[3]["title"];
  document.getElementById("obj4text").innerHTML = sortedData[3]["plot"];
  };

// Event listeners //

document.getElementById("btnSortABC").addEventListener("click", function() {
  sortedData = sortedData.sort(sortABC);
  clearHTML ();
  repopulate ();
});

document.getElementById("btnSortRating").addEventListener("click", function() {
  sortedData = sortedData.sort(compareNumbers);
  clearHTML ();
  repopulate ();
});

// Defaults

document.getElementById("obj1title").innerHTML = sortedData[0]["title"];
document.getElementById("obj1text").innerHTML = sortedData[0]["plot"];
document.getElementById("obj2title").innerHTML = sortedData[1]["title"];
document.getElementById("obj2text").innerHTML = sortedData[1]["plot"];
document.getElementById("obj3title").innerHTML = sortedData[2]["title"];
document.getElementById("obj3text").innerHTML = sortedData[2]["plot"];
document.getElementById("obj4title").innerHTML = sortedData[3]["title"];
document.getElementById("obj4text").innerHTML = sortedData[3]["plot"];