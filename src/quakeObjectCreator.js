export default class QuakeObj {

    constructor(mag, lat, lon, locDesc, link, type, depth) {
        this.mag = mag;
        this.lat = lat;
        this.lon = lon;
        this.locationDesc = locDesc;
        this.url = link;
        this.eventType = type;
        this.depth = depth * 111.2;
    }

    //set quake rgb color
    setQuakeColor(mag) {
        let gColor = 255 + parseInt(mag) * (-35);
        this.quakeColor = 'rgb(255, ' + gColor + ', 0)';
    }

    //time conversion
    msToTime(time) {
        let date = new Date(time);
        let options = {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
          month: 'numeric',
          day: 'numeric',
          year: 'numeric'
        };
        
        let timeString = date.toLocaleString('en-US', options);
        
        
        this.time = timeString;
    }

}