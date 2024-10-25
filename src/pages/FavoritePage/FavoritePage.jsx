import { useSelector } from "react-redux";
import { CatalogBox } from "../CatalogPage/CatalogPage.styled";
import CarsList from "../../components/CarsList/CarsList";
import { selectFavorite } from "../../redux/selectors";
import { Title } from "./FavoritePage.styled";

export default function FavoritePage() {
    const favoriteCars = useSelector(selectFavorite);

  return (
    <CatalogBox>
      {favoriteCars.length !== 0 ? <Title>Favorites</Title> :
      <Title>No Favorites Yet</Title>}
      
      <CarsList cars={favoriteCars} />
    </CatalogBox>
  );
}
