import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

interface ExperienceProps {
  title: string;
  date: string;
  children: ReactNode;
}

function Experience({ title, date, children }: ExperienceProps) {
  return (
    <div className="flex flex-col md:flex-row md:gap-[16px]">
      <p className="min-w-[170px] italic leading-7">{date}</p>
      <Accordion className="relative top-[1px]" type="single" collapsible>
        <AccordionItem className="border-0" value="item-1">
          <AccordionTrigger className="gap-[12px] py-0 text-left md:justify-start">
            {title}
          </AccordionTrigger>
          <AccordionContent className="w-full">{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Experience;
