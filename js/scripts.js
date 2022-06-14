// function ListOfMovies(){
//   this.movies = {};
//   this.movieId = 0;
// }

// ListOfMovies.prototype.addMovie = function(movie) {
//   movie.id = this.assignId();
//   this.contacts[movie.id] = movie;
// }




function Movie(name, times, newmovie) {
  this.name = name;
  this.times = times;
  this.newmovie = newmovie;
}

function Discount(time, age){
  if(age < 3){
   return "$15.00"
  }else if (time < 3){
    return "$17.00"
  } else {
    return "$20.00"
  }
}







// UI logic

$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    const title = parseInt($("#question1").val());
    const time = parseInt($("#question2").val());
    const age = parseInt($("#question3").val());
    let matrix = new Movie("Matrix", ["1:00pm", "3:00pm", "8:00pm"], true);
    let madagascar = new Movie("Madagascar", ["1:00pm", "8:00pm"], false);
    let incredibles = new Movie("The Incredibles", ["1:00pm", "3:00pm", "8:00pm"], true);
    $("#total-due").html(Discount(time, age));

  });
});


// function Dog(name, colors, age) {
//   this.name = name;
//   this.colors = colors;
//   this.age = age;
// }

// let falcor = new Dog("Falcor", ["black"], 4);
// let nola = new Dog("Nola", ["white", "black"], 6);
// let patsy = new Dog("Patsy", ["brown"], 7);