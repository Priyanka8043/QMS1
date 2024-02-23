import React, { useEffect } from 'react';
import 'jquery'; // Import jQuery
import 'owl.carousel/dist/owl.carousel.min'; 
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const Client = () => {
  useEffect(() => {
    // Owl Carousel initialization using window.jQuery
    var owl = window.jQuery('.owl-carousel');
    owl.owlCarousel({
      items: 5,
      margin: 10,
      loop: true,
      nav: true
    });
  }, []);
  return (
    <div>

 <div class="home-demo">
  <h3 style={{margin:"20px 10px 40px 10px"}}>Our Clients</h3>
  <div class="owl-carousel owl-theme">
    <div class="item">
      <img src='https://quickmanagementservices.com/images/client17.jpg'></img>
    </div>
    <div class="item">
      <img src='https://quickmanagementservices.com/images/client9.jpg'></img>
    </div>
    <div class="item">
    <img src='https://quickmanagementservices.com/images/client8.jpg'></img>
    </div>
    <div class="item">
    <img src='https://quickmanagementservices.com/images/client5.jpg'></img>
    </div>
    <div class="item">
    <img src='https://quickmanagementservices.com/images/client1.jpg'></img>
    </div>
    <div class="item">
    <img src='https://quickmanagementservices.com/images/client16.jpg'></img>
    </div>
    <div class="item">
    <img src='https://quickmanagementservices.com/images/client15.jpg'></img>
    </div>
    <div class="item">
    <img src='https://quickmanagementservices.com/images/client14.jpg'></img>
    </div>
    <div class="item">
    <img src='https://quickmanagementservices.com/images/client2.jpg'></img>
    </div>
    <div class="item">
    <img src='https://quickmanagementservices.com/images/client7.jpg'></img>
    </div>
    <div class="item">
    <img src='https://quickmanagementservices.com/images/client3.jpg'></img>
    </div>
    <div class="item">
    <img src='https://quickmanagementservices.com/images/client4.jpg'></img>
    </div>
    <div class="item">
    <img src='https://quickmanagementservices.com/images/client12.jpg'></img>
    </div>
    <div class="item">
    <img src='https://quickmanagementservices.com/images/client11.jpg'></img>
    </div>
  </div>
</div>
<hr></hr>
<div className='client_text'>
  <div>
    <p> Vodaphone</p>
    <p>Commercezone</p>
    <p>Alcove</p>
    <p>Rohan Tarang</p>
    <p>Aarayan Tech Indian Pvt. Ltd</p>

  </div>
  <div>
    <p> Atul Enterpises</p>
    <p>GK Associates</p>
    <p>Auxilife</p>
    <p>Creast Avenue</p>
    <p>Empire Square Chinchawad</p>

  </div>
  <div>
    <p>Kirti Avenue</p>
    <p>b.u. Bhandari Landmarks</p>
    <p>Sukhawani Construction</p>
    <p>Rajveer Palace</p>
    <p>Caller Cab</p>
  </div>

  <div>
    <p>Planet Milinium</p>
    <p>Planet Pet society</p>
    <p>WeekNdTicket</p>
    <p>RLakhyadeep Palace</p>
    <p>Prime Plus Pimple Soudagar</p>

  </div>
<div>
</div>

</div>
    </div>
  )
}

export default Client