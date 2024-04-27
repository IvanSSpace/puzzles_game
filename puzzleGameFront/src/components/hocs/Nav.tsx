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
  <div className="bg-[#1B3AAB] h-14 w-full">
    <div className="flex flex-row justify-around">
    <button className="bg-[#E5E2FB]" onClick={() => navigateToAchievements()}>Достижения</button>
    <button onClick={() => navigateToMain()}>Главная</button>
    <button onClick={() => navigateToStore()}>Магазин</button>
    </div>
  </div>
  );
}

export default Nav;