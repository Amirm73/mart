import { counter } from "$/lib/state-management/redux/slices";
import { useDispatch, useSelector } from "react-redux";

export function Homepage() {
  const store: any = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(store);

  // const timer = setTimeout(() => dispatch(counter.actions.inc()), 5000);
  // console.log(timer);

  return (
    <>
      <h1></h1>
      <h1>{store.counter.count}</h1>
      {/* <button onClick={() => dispatch(counter.actions.inc())}>inc</button> */}
      {/* <button onClick={() => dispatch(counter.actions.de())}>de</button> */}
    </>
  );
}
