import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite, deleteFavorite } from "../../redux/cars/slice";
import { selectFavorite } from "../../redux/selectors";
import Modal from "../Modal/Modal";
import CarInfo from "../CarInfo/CarInfo";
import defaultImg from "../../images/RentCar.jpg";
import {
  Item,
  ImgCar,
  Title,
  Span,
  Wrap,
  Price,
  Description,
  Button,
  HeardBtn,
  HeardIcon,
  ActiveHeardIcon,
} from "./CarItem.styled";

export default function CarItem({ data }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const {
    img,
    model,
    make,
    year,
    address,
    type,
    id,
    accessories,
    rentalPrice,
  } = data;

  const newAddress = address.split(", ");
  const favoriteCars = useSelector(selectFavorite);

  const handleAddToFavorite = () => {
    dispatch(setFavorite(data));
  };

  const handleRemoveToFavorite = () => {
    dispatch(deleteFavorite(data));
  };

  return (
    <Item>
      <ImgCar
        width="274px"
        height="268px"
        src={img ?? defaultImg}
        alt={model}
        onError={(e) => (e.target.src = defaultImg)}
      />
      {!favoriteCars.some((car) => car.id === id) ? (
        <HeardBtn type="button" onClick={() => handleAddToFavorite()}>
          <HeardIcon />
        </HeardBtn>
      ) : (
        <HeardBtn type="button" onClick={() => handleRemoveToFavorite()}>
          <ActiveHeardIcon />
        </HeardBtn>
      )}
      <Wrap>
        <Title>
          {make} <Span>{model}</Span>, {year}
        </Title>
        <Price>{rentalPrice} UAH</Price>
      </Wrap>
      <Description>
        {newAddress[0]} | {newAddress[1]} | {type} | {model} | {id} |{" "}
        {accessories[0]} | {accessories[2]}
      </Description>
      <Button type="button" onClick={() => setShowModal(true)}>
        Learn more
      </Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CarInfo data={data} />
        </Modal>
      )}
    </Item>
  );
}
