// import Home from "./pages/Home";


// // import './App.css';

// function App() {
//   return (
    
//      <Home/>
    
//   );
// }

// export default App;
import Home from "./pages/Home";
import PortfolioDetails from "./pages/PortfolioDetails";



import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
  // Outlet
} from 'react-router-dom';
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfoliodetails" element={<PortfolioDetails />} />
        <Route path="/Blog" element={<Blog/>} />

        {/* <Route path="users" element={<Users />}>
          <Route path="/" element={<UsersIndex />} />
          <Route path=":id" element={<UserProfile />} />
          <Route path="me" element={<OwnUserProfile />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;