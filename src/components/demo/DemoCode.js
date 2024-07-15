'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import CopyContainer from "gt-codeblocks"

export default function DemoCode({ children, title = '' }) {
    return (
        <div className="mt-3 w-[100%] max-w-[450px]">
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>
                    <CopyContainer lang='javascript'>
                        {children}
                    </CopyContainer>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
    )
}