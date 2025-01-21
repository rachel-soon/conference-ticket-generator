import "./App.css";
import Background from "./Background/Background";
import Header from "./Header/Header";
import TicketForm from "./TicketForm/TicketForm";

function App() {
  return (
    <Background>
      <Header />
      <TicketForm />
    </Background>
  );
}

export default App;
