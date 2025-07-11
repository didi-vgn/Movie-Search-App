import { UserListProvider } from "./context/UserListContext";
import MainPage from "./views/MainPage";

function App() {
  return (
    <>
      <UserListProvider>
        <MainPage />
      </UserListProvider>
    </>
  );
}

export default App;
