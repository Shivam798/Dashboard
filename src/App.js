import Home from './pages/home/home';
import New from './pages/new/Newone';
import Login from './pages/login/login';
import Single from './pages/single/single';
import ListItem from './pages/list/list';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { userInputs, productInputs } from "./formSource"
import "./style/dark.scss"
function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<ListItem addnew="Add New User" />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route path="new" element={<New input={userInputs} title="Add New User" />}></Route>
            </Route>
            <Route path="products">
              <Route index element={<ListItem addnew="Add New Product" />}></Route>
              <Route path=":productId" element={<Single />}></Route>
              <Route path="new" element={<New input={productInputs} title="Add New Product" />}></Route>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
