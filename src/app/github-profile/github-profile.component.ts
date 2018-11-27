import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.sass']
})
export class GithubProfileComponent implements OnInit {

  // constructor(private route: ActivatedRoute) { }
  constructor(private router: Router) { }

  ngOnInit() {
    // this.route.paramMap['id'];

    // this.route.snapshot.paramMap.get('id');

    // this.route.paramMap.subscribe((params) => {
    //   let id = +params.get('id');
    //   console.log(id);
    // });
  }

  submit() {
    this.router.navigate(['followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }

}
