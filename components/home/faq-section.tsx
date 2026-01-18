"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "Do you supply tools for wholesale?",
        answer: "Yes, Hexamech Linich Tools specializes in B2B wholesale distribution. We supply to over 4,000 workshops, service centers, and tool retailers across India with competitive bulk pricing.",
    },
    {
        question: "What brands are available in your catalog?",
        answer: "We are authorized distributors for premium brands including Linich, Bosch, Blue Point, CAR-O-LINER, SATA, 3M, Chicago Pneumatic, and many others listed on our Brands page.",
    },
    {
        question: "Do you ship across India?",
        answer: "Yes, we have a robust logistics network that ensures safe and timely delivery of equipment to any location in India, including heavy machinery like lifts and booths.",
    },
    {
        question: "How can I get a GST Invoice?",
        answer: "All our transactions are 100% compliant. We provide a valid GST Tax Invoice with every purchase, which you can use for Input Tax Credit.",
    },
    {
        question: "Do you offer warranty on equipment?",
        answer: "Yes, all our power tools and garage equipment come with standard manufacturer warranties. We also provide after-sales service support for the brands we distribute.",
    },
    {
        question: "How do I place a bulk order?",
        answer: "You can simply click the 'Get Quote' button on any product or contact us directly via WhatsApp at +91 75106 38693 with your requirement list.",
    },
]

export function FaqSection() {
    return (
        <section className="py-16 bg-muted border-t border-border">
            <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-4">
                        <span className="text-[#09757a] font-black text-[10px] uppercase tracking-[0.2em] mb-2 block">
                            Support
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight leading-none mb-4">
                            Frequent Questions
                        </h2>
                        <p className="text-muted-foreground text-sm font-medium">
                            Can't find the answer you're looking for? Reach out to our customer support team.
                        </p>
                    </div>

                    <div className="lg:col-span-8 w-full">
                        <div className="bg-card border border-border rounded-xl shadow-sm">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-0 px-6 py-2">
                                        <AccordionTrigger className="text-base font-bold text-foreground hover:text-[#09757a] text-left py-4">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
