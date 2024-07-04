import { useState, useEffect } from 'react';
const RedeemPromo = () => {
  const { location } = window;
  const [promoCode, setPromoCode] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const promo = query.get('promo');
    if (promo) {
      // Naively setting the promo code from URL parameter without validation
      setPromoCode(promo);
    } 
  }, [location]);

  return (
    <div className='app-container'>
      <h1>Redeem Your Promo Code</h1>
      {promoCode ? <p>Applying promo code: <strong dangerouslySetInnerHTML={{ __html: promoCode}}/></p> : <p>No Promo code</p>} 
    </div>
  );
};

export default RedeemPromo;
