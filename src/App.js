import ContainerApp from "./components/ContainerApp/ContainerApp";
import HomePage from "./pages/HomePage";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";
import Section4 from "./pages/Section4";
import Section5 from "./pages/Section5";
import Section6 from "./pages/Section6";
import Section7 from "./pages/Section7";

function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: "-1",
          backgroundImage: "url(/img/foto8.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(8px)",
        }}
      ></div>
      <ContainerApp>
        <HomePage />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </ContainerApp>
    </>
  );
}

export default App;
