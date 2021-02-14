import '../App.css';
import Header from '../Component/Header';
import SearchContent from '../Component/SearchContent'
import Footer from '../Component/Footer'


function Home() {
  return (
    <div className="App">
      <Header/>
      <SearchContent/>
      <Footer/>
    </div>
  );
}

export default Home;