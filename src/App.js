import './App.css';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function App() {
  return (
    <div className='App'>
      <div className="header_logo">
        <StorefrontOutlinedIcon className="header_image"/>
        <h2 className="logo_name">dayShop</h2>
      </div>

      <div className="header_search">
        <input type='text' className='searchInput'/>
        <SearchOutlinedIcon className='search_icon'/>
      </div>

      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_One">Hello Guys</span>
          <span className="nav_One">Sign In</span>
        </div>

        <div className="nav_item">
          <span className="nav_One">Your</span>
          <span className="nav_One">Shop</span>
        </div>

        <div className="nav_item">
          <ShoppingBasketOutlinedIcon fontSize="large"/>
          <span className="nav_One">0</span>
        </div>
      </div>

    </div>
  );
}

export default App;
