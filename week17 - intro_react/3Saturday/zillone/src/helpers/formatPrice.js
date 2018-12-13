const formatPrice = (dollars) => {
  return dollars.toLocaleString(
    'en-US',
    {
      style: 'currency',
      currency: 'USD',
    }
  );
};

export default formatPrice;
