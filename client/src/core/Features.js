import React from 'react';
import gift from '../image/gift.png'; 
import shipping from '../image/shipping.png'; 
import retur from '../image/return.png';
import contact from '../image/contact.png'; 
import './Features.css';

const Features = () => {
  return (
      
            <div className="features">
              <div className="feature">
                <img src={shipping} alt="" className="featureIcon" />
                <span className="featureTitle">FREE SHIPPING</span>
                <span className="featureDesc">Free worldwide shipping on all orders.</span>
              </div>
              <div className="feature">
                <img className="featureIcon" src={retur} alt="" />
                <span className="featureTitle">30 DAYS RETURN</span>
                <span className="featureDesc">No question return and easy refund in 14 days.</span>
              </div>
              <div className="feature">
                <img className="featureIcon" src={gift} alt="" />
                <span className="featureTitle">GIFT CARDS</span>
                <span className="featureDesc">Buy gift cards and use coupon codes easily.</span>
              </div>
              <div className="feature">
                <img className="featureIcon" src={contact} alt="" />
                <span className="featureTitle">CONTACT US!</span>
                <span className="featureDesc">Keep in touch via email and support system.</span>
              </div>
            </div>
          
      
  )
}

export default Features
    