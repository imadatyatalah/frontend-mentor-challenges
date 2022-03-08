import Card from "./components/Card";

const App = () => {
  return (
    <section
      role="main"
      className="flex flex-col items-center justify-center min-h-screen px-4 font-manrope sm:px-0"
    >
      <h1 className="sr-only">Advice Generator</h1>

      <Card />

      <div className="p-5 attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/imadatyatalah"
          target="_blank"
          rel="noopener noreferrer"
        >
          Imad Atyat-Alah
        </a>
        .
      </div>
    </section>
  );
};

export default App;
