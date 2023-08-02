import "./App.css"
import ExploreMore from './components/HomePage/ExploreMore/ExploreMore';
import Feedback from './components/HomePage/Feedback/Feedback';
import Intro from './components/HomePage/Intro/Intro';
import NavBar from './components/HomePage/NavBar/NavBar';
import Reactions from './components/HomePage/Reactions/Reactions';
import ReasonToRent from './components/HomePage/ReasonToRent/ReasonToRent';
import StepsToBook from './components/HomePage/StepsToBook/StepsToBook';

function App() {
  return (
    <div>
<NavBar/>
<Intro/>
<Reactions/>
<ExploreMore/>
<ReasonToRent/>
<StepsToBook/>
<Feedback/>
    </div>
  );
}

export default App;
