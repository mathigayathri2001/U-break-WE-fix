import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Button from '@material-ui/core/Button'
import './style.css'

export default function CarouselComponent () {
  return (
    <div className='carousel-wrapper'>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        stopOnHover={false}
        interval='7000'
      >
        <div>
          <img src='images/Plumber.jpg' alt='Plumbing Works' />
          <span className='legend'>
            <h2>Our Services: Plumbing Works</h2>
            <p>
              Whether you’re looking at plumbing replacement or installation, or
              need emergency plumbing repair, you can count on us. With quality
              workmanship, friendly service and fast response, we’re your go-to
              plumber.
            </p>
          </span>
        </div>
        <div>
          <img src='images/Lawn.jpg' alt='Landscaping and Lawn Maintenance' />
          <span className='legend'>
            <h2>Our Services: Landscaping & Lawn Maintenance</h2>
            <p>
              Our approach involves an enjoyable landscape environment, which
              enhances the overall curb appeal, increases property value, and
              can often save money in the long run.
            </p>
          </span>
        </div>
        <div>
          <img src='images/Patio.jpg' alt='Patio Maintenance' />
          <span className='legend'>
            <h2>Our Services: Patio Maintenance</h2>
            <p>
              Our services include fixing splintering wood, water damage, or
              other issues with your patio. If there are structural issues
              impacting your patio, we can take care of them.
            </p>
          </span>
        </div>
        <div>
          <img src='images/Mover.jpg' alt='Moving and Delivery' />
          <span className='legend'>
            <h2>Our Services: Moving & Delivery</h2>
            <p>
              We specializes in professional moving, home delivery, and packing
              services. Our movers are available for both local and long
              distance moves.
            </p>
          </span>
        </div>
        <div>
          <img src='images/Electrical.jpg' alt='Electrical Repair' />
          <span className='legend'>
            <h2>Our Services: Electrical Works</h2>
            <p>
              We can perform electrical installation of appliances such as
              ceiling fans, repair damaged light switches and dimmers, and
              restore light fixtures to glowing beauty.
            </p>
          </span>
        </div>
        <div>
          <img src='images/Duct.jpg' alt='Duct Cleaning' />
          <span className='legend'>
            <h2>Our Services: Duct Cleaning</h2>
            <p>
              We use state-of-the-art equipment brushes and high pressured
              compressed air whips to dislodge the dirt and debris inside the
              duct.
            </p>
          </span>
        </div>
        <div>
          <img src='images/Flooring.jpg' alt='Flooring and Tiling Works' />
          <span className='legend'>
            <h2>Our Services: Flooring & Tiling Works</h2>
            <p>
              From living room and bedroom flooring to basements, kitchens,
              bathrooms and more, we provide the right flooring solution for
              your home.
            </p>
          </span>
        </div>
        <div>
          <img src='images/Garage.jpg' alt='Garage Door Installation' />
          <span className='legend'>
            <h2>Our Services: Garage Door Installation</h2>
            <p>
              Our Services include Overhead Garage Door Systems, Automatic
              Openers, Rolling Steel Doors, Dock Levellers, Rolling Counter and
              Window Shutters.
            </p>
          </span>
        </div>
        <div>
          <img src='images/Painting.jpg' alt='Door and Wall Painting' />
          <span className='legend'>
            <h2>Our Services: Door & Wall Painting</h2>
            <p>
              Our painting contractors can take care of all your interior and
              exterior painting needs. We provide many services that will suit
              your personal and business needs.
            </p>
          </span>
        </div>
        <div>
          <img src='images/Heater.jpg' alt='Heating and Cooling Maintenance' />
          <span className='legend'>
            <h2>Our Services: Heating & Cooling</h2>
            <p>
              We provide services and repairs to all makes and models of
              existing heating & air conditioning systems combined with our 24/7
              emergency HVAC service availability.
            </p>
          </span>
        </div>
        <div>
          <img src='images/Appliance.jpg' alt='Appliance Repair' />
          <span className='legend'>
            <h2>Our Services: Appliance Repair</h2>
            <p>
              Your household appliances can malfunction from time to time and
              we’re here to help. All our appliance repair technicians are
              insured, trained and licensed.
            </p>
          </span>
        </div>
        <div>
          <img src='images/Carpet.jpg' alt='Carpet Cleaning' />
          <span className='legend'>
            <h2>Our Services: Carpet Cleaning</h2>
            <p>
              Our technology involves carbonation to extract the dirt from the
              source, leaving your carpet cleaner for a longer period of time.
            </p>
          </span>
        </div>
        <div>
          <img src='images/Deck.jpg' alt='Deck and Fence Installation' />
          <span className='legend'>
            <h2>Our Services: Deck & Fence Installation</h2>
            <p>
              Choose between our various wood or composite materials and layout
              to build your dream deck with the finest care.
            </p>
          </span>
        </div>
        <div>
          <img src='images/Junk.jpg' alt='Junk Removal' />
          <span className='legend'>
            <h2>Our Services: Junk Removal</h2>
            <p>
              We strive to ensure a professional, clean, and organized removal
              or recycling of all your unwanted items safely.
            </p>
          </span>
        </div>
        <div>
          <img src='images/Pest.jpg' alt='Pest Control' />
          <span className='legend'>
            <h2>Our Services: Pest Control</h2>
            <p>
              We offer various services such as prevention, intervention,
              control, research alternatives, identification of insects and
              rodents, consultation by biologists and estimation.
            </p>
          </span>
        </div>
      </Carousel>
    </div>
  )
}
