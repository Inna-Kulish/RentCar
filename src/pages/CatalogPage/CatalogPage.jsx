import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCars } from "../../redux/cars/operations";
import { clearCars } from "../../redux/cars/slice";
import SearchForm from "../../components/SearchForm/SearchForm";
import CarsList from "../../components/CarsList/CarsList";
import LoadMore from "../../components/LoadMore/LoadMore";
import { selectCars, selectFilteredCars } from "../../redux/selectors";
import { CatalogBox } from "./CatalogPage.styled";

export default function CatalogPage() {
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const visibleCars = useSelector(selectFilteredCars);
  const allCars = useSelector(selectCars);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const clearPage = () => {
    dispatch(clearCars());
    setPage(1);
    setShowLoadMore(true);
  };

  useEffect(() => {
    if (allCars.length !== 0 && page === 1) return;

    dispatch(getCars(page));
    
  }, [dispatch, page]);

  useEffect(() => {
if (allCars.length % 12 !== 0) {
      setShowLoadMore(false);
    }
  }, [allCars])

  return (
    <CatalogBox>
      <SearchForm clearPage={clearPage} />
      {visibleCars ? (
        <CarsList cars={visibleCars} />
      ) : (
        <CarsList cars={allCars} />
      )}
      {showLoadMore && <LoadMore onClick={handleLoadMore} />}
    </CatalogBox>
  );
}
