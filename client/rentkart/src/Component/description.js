import React from 'react'

 function Description() {
  return (
    <div className="container" style={{ paddingLeft: "75px" }}>
          <h3>Independent 2 BHK Furnished flats at Hydrabad Gate, Near B.H.U.</h3>
          <h6>RLL Homes 05 Flat 301</h6>
          <div className="row">
            <div className="col"><p className="rent">Rent ₹10000/- Per Month*</p></div>
            <div className="col space"><center><button type="button" class="btn btn-info" style={{ width: "200px", height: "50px" }}>BOOK NOW</button></center> </div>
          </div>

          <div className="row">
            <div className="col"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color="#3CB7C6" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>&nbsp;4.74 (84 Reviews)</div>
            <div className="col">RLL Property</div>
            <div className="col">For Everyone</div>
          </div>
          <div className="container space">
            <h5>HOUSE FEATURES</h5>
            <br />
            <ul >
              <li>Wifi</li>
              <li>Parking</li>
              <li>Attached Washroom</li>
            </ul>
          </div>
          <div className="container">

            <h4><svg xmlns="http://www.w3.org/2000/svg" width="22" color="#3CB7C6" height="22" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg> Nearby Locations of Your Dream Home</h4>
            <br />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.5063475436723!2d83.4382572512494!3d26.728213283124994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915d6eb4004b0d%3A0xe54969702df09311!2sMMMUT%20Gorakhpur!5e0!3m2!1sen!2sin!4v1652743271243!5m2!1sen!2sin"
              className="container" height="600" style={{ border: "0" , allowfullscreen: "" , loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
          </div>
          <h3 className="space">RLL Homes 04</h3>
          <h4 style={{ paddingtop: "-20px" }}>In front of Union bank, Susuwahi,Varanasi 221011</h4>
          <br />
          <br />
        </div>
  )
}

export default Description