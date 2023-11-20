import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCars } from "../../redux/cars/operations";
import { setPage } from "../../redux/cars/slice";
import SearchForm from "../../components/SearchForm/SearchForm";
import CarsList from "../../components/CarsList/CarsList";
import LoadMore from "../../components/LoadMore/LoadMore";
import { selectPage, selectAllCars, selectFilteredCars } from "../../redux/selectors";
import { CatalogBox } from "./CatalogPage.styled";

export default function CatalogPage() {
  const [showLoadMore, setShowLoadMore] = useState(false);
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const visibleCars = useSelector(selectFilteredCars);
  const allCars = useSelector(selectAllCars);

const handleLoadMore = () => {
    dispatch(setPage());
  };

  useEffect(() => {
    dispatch(getCars(page));
    setShowLoadMore(true);
    
//     if(visibleCars.length === 0) {
// setShowLoadMore(false);
//     }


  }, [dispatch, page]);

  return (
    <CatalogBox>
      <SearchForm />
      {visibleCars.length ? <CarsList cars={visibleCars} /> : <CarsList cars={allCars} />}
      <LoadMore onClick={handleLoadMore}/>
    </CatalogBox>
  );
}
