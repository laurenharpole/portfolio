import './styles/home.css';
import './styles/footer.css';
import Footer from './Footer.js';
import Masonry from './Masonry.js';

function Home() {

  return (
    <div className="Home">
      <Masonry />
      <Footer />
    </div>
  )

}

export default Home;