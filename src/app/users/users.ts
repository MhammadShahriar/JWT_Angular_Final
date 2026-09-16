import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  styleUrl: './users.css',
  templateUrl: './users.html',
})
export class Users implements OnInit {

  userId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    // this.userId =
    //   this.route.snapshot.paramMap.get('id') ?? '';

      this.route.paramMap.subscribe(params => {

      this.userId = params.get('id') ?? '';
    });
  }


}
