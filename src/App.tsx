import "./App.css";
import Background from "./Background/Background";
import Logo from "./Logo/Logo";
import TicketForm from "./TicketForm/TicketForm";

function App() {
  return (
    <Background>
      <Logo />

      {/* Form */}

      <TicketForm />
    </Background>
  );
}

export default App;
