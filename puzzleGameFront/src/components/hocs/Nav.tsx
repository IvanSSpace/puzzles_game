import { useNavigate } from "react-router-dom";

const Nav = () => {
const navigate = useNavigate();

const navigateToMain = () => {
  navigate('/');
}

const navigateToStore = () => {
  navigate('/store');
}

const navigateToAchievements = () => {
  navigate('/achievements');
}
  
  return (
  <div>
    <a onClick={() => navigateToAchievements()}>Достижения</a>
    <a onClick={() => navigateToMain()}>Главная</a>
    <a onClick={() => navigateToStore()}>Магазин</a>
  </div>
  );
}

export default Nav;