import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./style.css";

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel autoPlay>
                <div>
                    <img src="../Appliance.jpg" alt= "Appliance Repair"/>
                </div>
                <div>
                    <img src="../Carpet.jpg" alt= "Carpet Cleaning"/>
                </div>
                <div>
                    <img src="../Deck.jpg" alt= "Deck and Fence Installation"/>
                </div>
                <div>
                    <img src="../Duct.jpg" alt= "Duct Cleaning"/>
                </div>
                <div>
                    <img src="../Electrical.jpg" alt= "Electrical Repair"/>
                </div>
                <div>
                    <img src="../Flooring.jpg" alt= "Flooring and Tiling Works"/>
                </div>
                <div>
                    <img src="../Garage.jpg" alt= "GArage Door Installation"/>
                </div>
                <div>
                    <img src="../Heater.jpg" alt= "Heating and Cooling Maintenance"/>
                </div>
                <div>
                    <img src="../Junk.jpg" alt= "Junk Removal"/>
                </div>
                <div>
                    <img src="../Lawn.jpg" alt= "Landscaping and Lawn Maintenance"/>
                </div>
                <div>
                    <img src="../Mover.jpg" alt= "Moving and Delivery"/>
                </div>
                <div>
                    <img src="../Painting.jpg" alt= "Door and Wall Painting"/>
                </div>
                <div>
                    <img src="../Patio.jpg" alt= "Patio Maintenance"/>
                </div>
                <div>
                    <img src="../Pest.jpg" alt= "Pest Control"/>
                </div>
                <div>
                    <img src="../Plumber.jpg" alt= "Plumbing Works"/>
                </div>
            </Carousel>
        </div>
    );
}



