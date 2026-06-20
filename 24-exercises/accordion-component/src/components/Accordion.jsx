import AccordionItem from "./AccordionItem";
import { faqs } from "../data/faqs";
import { useState } from "react";

export default function Accordion({ data = faqs }) {
  const [curOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((element, index) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setIsOpen}
          title={element.title}
          num={index}
          key={element.title}
        >
          {element.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curOpen={curOpen}
        onOpen={setIsOpen}
        title="Thinking in React"
        num={22}
        key="Thinking in React"
      >
        <p>Allows React developers to: </p>
        <ul>
          <li>Break up UI into components</li>
          <li>Male components reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}
