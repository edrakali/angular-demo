import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
// import { combineLatest } from 'rxjs/observable/combineLatest';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  year = '';
  month = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params) => {
    //   let year = params.get('year');
    //   let month = params.get('month');
    //   if(!year || !month)
    //     this.router.navigate(['/notfound'], {
    //       queryParams: {},
    //     });


    //   this.year = year;
    //   this.month = month;

    // });

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap,
    ]).subscribe((combined) => {
      const params = combined[0];
      const queryParams = combined[1];
      const year = params.get('year');
      const month = params.get('month');
      if (!year || !month) {
        this.router.navigate(['/notfound'], {
          queryParams: {},
        });
      }


      this.year = year;
      this.month = month;
    });
  }

  navigateHome(){
    this.router.navigate([''], {
      queryParams: {},
    });
  }

}
