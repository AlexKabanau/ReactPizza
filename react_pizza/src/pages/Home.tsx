import React, { useEffect, useRef } from 'react';
import qs from 'qs';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Categories from '../componets/Categories.tsx';
import Sort, { sortList } from '../componets/Sort.tsx';
import Skeleton from '../componets/PizzaBlock/Skeleton.tsx';
import PizzaBlock from '../componets/PizzaBlock/index.tsx';
import Pagination from '../componets/Pagination/index.tsx';
import {
  FilterSliceState,
  selectFilter,
  setCategoryId,
  setCurrentPage,
  setFilters,
} from '../redux/slices/filterSlice.ts';
import { fetchPizzas, SearchPizzaParams, selectPizzasData } from '../redux/slices/pizzasSlice.ts';
import { useAppDispatch } from '../redux/store.ts';

export const Home: React.FC = () => {
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzasData);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const isSearch = useRef(false);
  const isMounted = useRef(false);

  // const { searchValue } = useContext(SearchContext);
  // const [items, setItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [categoryId, setCategoryId] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);

  const onChangeCategory = (id: number) => {
    // console.log(id);
    dispatch(setCategoryId(id));
  };

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    // setIsLoading(true);

    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? `asc` : `desc`;
    const category = categoryId > 0 ? `category=${categoryId}` : ``;
    const search = searchValue ? `&search=${searchValue}` : ``;

    dispatch(
      fetchPizzas({
        category,
        sortBy,
        order,
        search,
        currentPage: String(currentPage),
      }),
    );
    // try {
    //   dispatch(fetchPizzas({
    //     category,
    //     sortBy,
    //     order,
    //     search,
    //     currentPage
    //   }));
    // } catch (error) {
    //   console.log(error);
    //   alert('Ошибка при получении данных');
    // } finally {
    //   setIsLoading(false);
    // }

    window.scrollTo(0, 0);
  };

  // useEffect(() => {
  //   if (isMounted.current) {
  //     const params = {
  //       categoryId: categoryId > 0 ? categoryId : null,
  //       sortProperty: sort.sortProperty,
  //       currentPage,
  //     }
  //     const queryString = qs.stringify({
  //       sortProperty: sort.sortProperty,
  //       categoryId,
  //       currentPage,
  //     });

  //     navigate(`/?${queryString}`);
  //   }
  //   if (!window.location.search) {
  //     console.log(111);
  //     dispatch(fetchPizzas({} as SearchPizzaParams))
  //   }
  //   // isMounted.current = true;
  // }, [categoryId, sort.sortProperty, searchValue, currentPage]);
  
  useEffect(() => {
    // window.scrollTo(0, 0);
    // if (!isSearch.current) {
      getPizzas();
      // }
      // isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);
    
  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = (qs.parse(window.location.search.substring(1)) as unknown) as SearchPizzaParams;

  //     // console.log(params)

  //     const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);

  //     dispatch(
  //       setFilters({
  //         searchValue: params.search,
  //         categoryId: Number(params.category),
  //         currentPage: Number(params.currentPage),
  //         sort: sort || sortList[0],
  //       }),
  //     );
  //     isMounted.current = true;
  //   }
  // }, []);
    

  const pizzas = items
    // .filter((obj) => (obj.title.toLowerCase().includes(searchValue.toLowerCase())))
    .map((obj) => (
        <PizzaBlock key={obj.id} rating={''} {...obj} />
    ));
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>
            Произошла ошибка <span>😕</span>
          </h2>
          <p>
            К сожалению, неудалось получить пиццы.
            <br />
            Попробуйте повторить попытку позже.
          </p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};
