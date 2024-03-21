import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdverts } from "../redux/adverts/operations";
import { selectAdverts, selectIsLoading } from "../redux/adverts/selectors";
import { MainContainer } from "layouts/MainContainer";
import Loader from "components/Loader";
import AdvertCard from "components/AdvertCard";
import { AdvertsList, CardItem } from "components/AdvertCard/AdvertCard.styled";

const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const adverts = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(getAllAdverts({ page: 1, limit: 4 }));
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <MainContainer>
      <AdvertsList>
        {adverts.length > 0 &&
          adverts.map((card) => (
            <CardItem key={card._id}>
              <AdvertCard card={card} />
            </CardItem>
          ))}
      </AdvertsList>
    </MainContainer>
  );
};

export default Catalog;
