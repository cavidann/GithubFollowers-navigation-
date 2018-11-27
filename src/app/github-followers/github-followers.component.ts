import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor (
    private route: ActivatedRoute,
    private service: GithubFollowersService) {}

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
      switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');

        return  this.service.getAll();
      })
    )
    .subscribe(followers => this.followers = followers);
  }

}
