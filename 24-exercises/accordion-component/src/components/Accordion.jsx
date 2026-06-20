import AccordionItem from "./AccordionItem";
import { faqs } from "../data/faqs";

export default function Accordion({ data = faqs }) {
  return (
    <div className="accordion">
      {data.map((element, index) => (
        <AccordionItem title={element.title} text={element.text} num={index} />
      ))}
    </div>
  );
}
