import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdverts } from "../redux/adverts/operations";
import {
  selectAdverts,
  selectIsLoading,
  selectTotal,
} from "../redux/adverts/selectors";
import { LIMIT } from "constants";
import { MainContainer } from "layouts/MainContainer";
import Loader from "components/Loader";
import AdvertCard from "components/AdvertCard";
import {
  AdvertsList,
  CardItem,
  ListBtnWrap,
  LoadMoreBtn,
} from "components/AdvertCard/AdvertCard.styled";
import "../helpers/formatDate";
import FiltersForm from "components/FiltersForm/FiltersForm";
import { CatalogContainer } from "components/FiltersForm/FiltersForm.styled";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const adverts = useSelector(selectAdverts);
  const total = useSelector(selectTotal);

  useEffect(() => {
    dispatch(getAllAdverts({ page, limit: LIMIT }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    if (adverts.length >= total) {
      return;
    }
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <MainContainer>
        <CatalogContainer>
          <FiltersForm />

          <ListBtnWrap>
            <AdvertsList>
              {adverts.length > 0 &&
                adverts.map((card) => (
                  <CardItem key={card._id}>
                    <AdvertCard card={card} />
                  </CardItem>
                ))}
            </AdvertsList>

            {adverts.length !== total && adverts.length > 0 && (
              <LoadMoreBtn type="button" onClick={handleLoadMore}>
                Load more
              </LoadMoreBtn>
            )}
          </ListBtnWrap>
        </CatalogContainer>
      </MainContainer>
      {isLoading && <Loader />}
    </>
  );
};

export default Catalog;
