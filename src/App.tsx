import './App.css';
import { Footer } from './components/Footer/Footer';
import { Greeting } from './components/Greeting/Greeting';
import { Header } from './components/Header/Header';
import { HireMe } from './components/HireMe/HireMe';
import { MyWorks } from './components/MyWorks/MyWorks';
import { RemoteWork } from './components/RemoteWork/RemoteWork';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <Skills />
      <MyWorks />
      <RemoteWork />
      <HireMe />
      <Footer />
    </div>
  );
}

export default App;
