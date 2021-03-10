import Header from './Header';

import foodImage from '../images/background.jpeg';
import '../styles/index.scss';
import '../styles/app.scss';

const App = () => {
  return (
    <>
      <section className="hero">
        <Header />
      </section>
      <main>
        <section>
          <h1>App!</h1>
          <img src={foodImage} width="100%" alt="img" />
        </section>
      </main>
    </>
  );
};

export default App;
