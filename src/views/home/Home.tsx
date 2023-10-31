import {
  actions,
  selector,
} from "@/core/adaptor/redux-toolkit/HomeReadUseCaseSlice";
import { useAppDispatch, useAppSelector } from "@/store";
import { Suspense, useEffect } from "react";

export default function Home() {
  return (
    <div>
      <h1>title</h1>
      <div>
        <Suspense fallback={"loading..."}>
          <PageContent d={fetchUser("1")} />
        </Suspense>
      </div>
    </div>
  );
}

function PageContent({ d }: { d: any }) {
  const user = d.read();
  console.log(user);

  const dispatch = useAppDispatch();
  const uc = useAppSelector(selector.uc);

  const onDecreaseCount = () => {
    dispatch(actions.onUpdateCount(uc.getCount() - 1));
  };
  const onIncreaseCount = () => {
    dispatch(actions.onUpdateCount(uc.getCount() + 1));
  };
  useEffect(() => {
    if (user) {
      dispatch(
        actions.onUpdateApiSite({
          code: "200",
          message: "success",
          data: { user: user.name },
        })
      );
    }
  }, [dispatch, user]);

  useEffect(() => {
    return () => {
      dispatch(actions.onReset());
    };
  }, [dispatch]);

  return (
    <div>
      <strong>counter</strong>
      <button onClick={onDecreaseCount}>decrease</button>
      <span>{uc.getCount()}</span>
      <button onClick={onIncreaseCount}>increase</button>
    </div>
  );
}

function fetchUser(userId: string) {
  let user: any = null;
  const suspender = fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  )
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        user = data;
      }, 1000);
    });
  return {
    read() {
      if (user === null) {
        throw suspender;
      } else {
        return user;
      }
    },
  };
}
