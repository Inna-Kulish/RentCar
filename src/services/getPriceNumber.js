export const getPriceNumber = (cars) => {
        const arrPrice = [];
        const minPrice = 1000;
        const maxPrice = Math.max.apply(null, cars.map(({ rentalPrice }) => rentalPrice));

     for (let i = minPrice; i <= maxPrice; i += 500) {
        arrPrice.push(i);
        }   
        return arrPrice;
    }