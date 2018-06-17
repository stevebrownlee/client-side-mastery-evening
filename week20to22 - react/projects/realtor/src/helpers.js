
// define this function with const and export at the bottom
export function formatPrice (dollars) {
  return dollars.toLocaleString(
    'en-US',
    {
      style: 'currency',
      currency: 'USD',
    }
  );
};
