import Image from "./components/Image/Image";
import Title from "./components/Title/Title";
import Text from "./components/Text/Text";
import InfoCard from "./components/InfoCard/InfoCard";

function App() {
  return (
    <div className="main-card">
      <Image></Image>
      <Title as="h2">Equilibrium #3429</Title>
      <Text></Text>
      <InfoCard></InfoCard>
    </div>
  );
}

export default App;
