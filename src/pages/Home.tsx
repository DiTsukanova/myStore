import React from "react";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Categories from "../components/Categories";
import { useEffect} from "react";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setPageCount } from "../redux/slices/filterSlices";
import { fetchPizzas } from "../redux/slices/pizzaSlice";
const Home: React.FC = () => {
  const dispatch = useDispatch();

  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const currentPage = useSelector((state) => state.filter.pageCount);
  const searchValue = useSelector((state) => state.filter.searchValue)
  const {items, status} = useSelector((state) => state.pizza);

  const onChangeCategory = (idx: number) => {
    dispatch(setCategoryId(idx));
  };

  const onChangePage = (page: number) => {
    dispatch(setPageCount(page))
  }

  const getPizzas =  () =>  {
    const category = categoryId > 0 ? categoryId : "";
    const title = searchValue ? searchValue : "";

    dispatch(fetchPizzas({
      // @ts-ignore
      category,
      title,
      currentPage,
      sortType,
    }));

    window.scrollTo(0, 0);
  }


  useEffect(() => {
    getPizzas()

  }, [categoryId, sortType, searchValue, currentPage]);

  const listPizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : listPizzas}</div>
      )}
      <Pagination onChangePage={onChangePage} />
      </div>
  );
};

export default Home;
