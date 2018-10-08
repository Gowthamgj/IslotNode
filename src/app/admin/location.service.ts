import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LocationService {
  url;
  location;
  data;
  locid = 0;
  constructor(private http: Http) {
    this.url = 'https://islotproject-3175e.firebaseio.com/Location.json ';
    this.location = [];
  }
fetchAdmin() {
  this.location = [];
  this.http.get(this.url)
  .subscribe((res) => {
    this.data  = res.json();
    console.log(this.data);
    // tslint:disable-next-line:forin
    for (const key in this.data) {
      // console.log(this.data[key].name);
      if(parseInt(this.data[key].id)  > this.locid) {
        this.locid = parseInt(this.data[key].id);
      }
      this.location.push(this.data[key].name);
    }
  });
}
deleteLoc(loc) {
  // let deleteid;
  for ( const key in this.data) {
    if (this.data[key].name === loc ) {
      this.http.delete('https://islotproject-3175e.firebaseio.com/Location/' + key + '.json ' )
      .subscribe((res) => {
        console.log(res);
      });
    }
  }
}
updateLocation(cityname) {
  this.locid = this.locid + 1;
  const data = {
    'id': this.locid,
    'name' : cityname
  };
this.http.post(this.url, data)
.subscribe((res) => {
  console.log(res);
});
}
}
