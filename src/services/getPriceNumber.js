export const getPriceNumber = (cars) => {
        const arrPrice = [];
        const minPrice = 10;
        const maxPrice = Math.max.apply(null, cars.map(({ rentalPrice }) => Number(rentalPrice.slice(1))));

     for (let i = minPrice; i <= maxPrice; i += 10) {
        arrPrice.push(i);
        }   
        return arrPrice;
    }