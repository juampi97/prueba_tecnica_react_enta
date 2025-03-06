import Error from "./components/Error";
import Header from "./components/Header";
import { useFetch } from "./components/hooks/useFetch";
import Loading from "./components/Loading";
import UserListContainer from "./components/UserListContainer";

export const API_URL: string =
  "https://api.freeapi.app/api/v1/public/randomusers";

const App = () => {
  
  const {data,loading,error} = useFetch(API_URL)

    return (
    <>
      <div className="main">
        {loading? <Loading /> : null}
        {error ? <Error /> : null }
        {!loading && !error ? <Header /> : null}
        {!loading && !error ? <UserListContainer data={data.data.data} /> : null}
      </div>
    </>
  );
};

export default App;
