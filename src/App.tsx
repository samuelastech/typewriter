import { TypingText } from "./TypingText/";

function App() {
  return (
    <div className="p-6 max-w-md m-full h-screen flex flex-col justify-center gap-4 m-auto">
      <TypingText elementType="h1" className="font-bold text-3xl">Moonlight<br/>Hold it in your arms</TypingText>
      <TypingText elementType="p" className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas eaque cumque sequi natus id, facilis ex et aspernatur voluptatibus earum tempora laboriosam aliquam ullam perspiciatis porro magni iusto esse?</TypingText>
    </div>
  );
}

export default App;
