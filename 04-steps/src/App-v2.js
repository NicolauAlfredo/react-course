import StepMessage from "./components/StepMessage";
import Steps from "./components/Steps";

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>🤘</p>
      </StepMessage>

      <StepMessage step={2}>
        <p>Read children prop</p>
        <p>😎</p>
      </StepMessage>

      <StepMessage step={3}>
        <p>Read children prop</p>
        <p>😎</p>
      </StepMessage>
    </div>
  );
}