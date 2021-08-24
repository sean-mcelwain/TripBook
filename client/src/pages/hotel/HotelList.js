import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import './hotel.css';

import { useLazyQuery } from "@apollo/client";
import { QUERY_FIND_HOTELS } from "../../utils/queries";

const HotelList = () => {
    const [getHotels, response] = useLazyQuery(QUERY_FIND_HOTELS);
    const findHotel = (value) => {
        if (value.length > 2) {
            console.log('findHotel', value);
            getHotels({ variables: { searchText: value } })
        }
    }
    return (
        <div>
            <div>
                <picture>
                    <img src="https://static.tacdn.com/img2/brand/home/home614_dt.jpg" />
                </picture>
                <div id="form-box">
                    <form>
                        <div id="input-group">
                            <label for="email" class="glyphicon glyphicon-search"></label>
                            <input type="text" placeholder="Where to?" id="email" onChange={(e) => { findHotel(e.target.value) }} />
                        </div>
                        <br />
                    </form>
                </div>
            </div>
            <section className="hotellist container">
            {response.data && response.data.hotels && response.data.hotels.map((hotel, index)=>(
                <div className="row" key={index}>
                    <div className="col">
                        <Link to="/hotelDetails/1">
                            <img src={`${hotel.hotelImage}`}
                                style={{ height: '200px', width: '300px' }} />
                        </Link>
                    </div>
                    <div className="col">
                        <div className="row">
                        <label className="col-12">Hotel Name - {hotel.hotelName}</label>
                        <label className="col-12">Rating - {hotel.hotelRating}</label>
                        <label className="col-12"> $ Cost - {hotel.hotelCost}</label>
                        <label className="col-12">Free Cancellation</label>
                        </div>
                        
                    </div>
                </div>
            ))}
            </section>
        </div>
    );

}

export default HotelList;
