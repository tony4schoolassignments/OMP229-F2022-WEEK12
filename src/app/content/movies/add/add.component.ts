import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class MovieAddComponent implements OnInit {

  form: any = {
    name: String, 
    year: String, 
    director: String,
    genre: String,
    runtime: Number
  }

  isSuccessfull = true;
  errorMessage = "";

  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit():void {
    this.movieService.addMovie(this.form)
      .subscribe({
        next: data => {
          console.log(data);
          this.isSuccessfull = true;
          this.backToList();          
        }, 
        error: err => {
          this.errorMessage = err.error.message;
          this.isSuccessfull = false;
        }
      });
  }
  
  backToList(): void {
    this.router.navigate(['/books/list']);
  }

}
