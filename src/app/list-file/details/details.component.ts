import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilesServices } from '../services/files.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute
              private filesServices: FilesServices) { }

  asset_id : int;
  
  ngOnInit() {
  	  this.asset_id = this.router.snapshot.params['asset_id'];

      this.fileServices.getDetailsFiles(asset_id).subscribe((data) => {
        this.files = data
      });
  }

}
