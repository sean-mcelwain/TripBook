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
                            <input type="text" placeholder="Where to?" id="email" onChange={(e) => { findHotel(e.target.value) }} />
                        </div>
                        <br />
                    </form>
                </div>
            </div>
            <section className="hotellist container">
                {response.data && response.data.hotels && response.data.hotels.map((hotel, index) => (
                    <div className="row" key={index}>
                        <div className="col-6">
                            <img src={`${hotel.hotelImage}`}
                                style={{ height: '200px', width: '300px' }} />
                        </div>
                        <div className="col-6">
                            <label className="col-12">Hotel Name - {hotel.hotelName}</label>
                            <br></br>
                            <label className="col-12">Rating - {hotel.hotelRating}</label>
                            <br></br>
                            <label className="col-12"> goibibo - Cost - $ {hotel.hotelCost}</label>
                            <br></br>
                            <label className="col-12"> makemytrip - Cost - $ 100</label>
                            <br></br>
                            <label className="col-12"> expedia - Cost - $ 130</label>
                            <br></br>
                            <label >Free Cancellation</label>
                            <br></br>
                            <button>View Detail</button>

                        </div>
                    </div>
                ))}
            </section>
        </div>
    );

}

export default HotelList;
