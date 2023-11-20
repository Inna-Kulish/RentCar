import defaultImg from '../../images/ImgCarInfo.jpg'
import { Img, Title, ListSpecial, ItemSpecial, CarDecs, TitleList, ItemConditions, SpanNumber, TelLink } from "./CarInfo.styled";
import { Span } from "../CarItem/CarItem.styled";

export default function CarInfo({ data }) {
    const { img, model, make, year, address, rentalCompany, type, id, accessories, rentalPrice, fuelConsumption, engineSize, description, functionalities, rentalConditions, mileage } = data;
    const newAddress = address.split(', ').slice(1);
    const rentCond = rentalConditions.split('\n');
    const minAge = parseInt(rentCond[0].match(/\d+/));
    const price = Number(rentalPrice.slice(1));
    const mile = new Intl.NumberFormat("en-IN").format(mileage);
    
    return (
        <>
            <Img src={img ?? defaultImg} alt={make} width='461px' height='248px' onError={(e) => e.target.src = defaultImg} />
            <Title>{make} <Span>{model}</Span>, {year}</Title>
            <ListSpecial>
                <ItemSpecial>{newAddress[0]}</ItemSpecial>
                <ItemSpecial>{newAddress[1]}</ItemSpecial>
                <ItemSpecial>id:{id}</ItemSpecial>
                <ItemSpecial>Year: {year}</ItemSpecial>
                <ItemSpecial>Type: {type}</ItemSpecial>
                <ItemSpecial>Fuel Consumption: {fuelConsumption}</ItemSpecial>
                <ItemSpecial>Engine Size: {engineSize}</ItemSpecial>
            </ListSpecial>
            <CarDecs>{description}</CarDecs>
            <TitleList>Accessories and functionalities:</TitleList>
            <ListSpecial>
                {accessories.map(item => (<ItemSpecial key={item}>{item}</ItemSpecial>))}
                {functionalities.map(item => (<ItemSpecial key={item}>{item}</ItemSpecial>))}
            </ListSpecial>
            <TitleList>Rental Conditions:</TitleList>
            <ListSpecial>
                <ItemConditions>Minimum age: <SpanNumber>{minAge}</SpanNumber></ItemConditions>
                {rentCond.slice(1).map(item => (<ItemConditions key={item}>{item}</ItemConditions>))}
                <ItemConditions>Mileage: <SpanNumber>{mile}</SpanNumber></ItemConditions>
                <ItemConditions>Price: <SpanNumber>{price}$</SpanNumber></ItemConditions>
            </ListSpecial>
            <TelLink href="tel:+380730000000">Rental car</TelLink>
        </>
    )
}