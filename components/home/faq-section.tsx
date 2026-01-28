"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "Is Hexamech Linich Tools a manufacturer or a wholesaler?",
        answer: "We are India's premier wholesale distributor and verified IndiaMART supplier, specializing in professional automotive diagnostic tools and industrial equipment. We bridge the gap between global technology leaders like SATA and DeVilbiss and specialized workshops across Kerala and India.",
    },
    {
        question: "Which premium brands do you exclusively distribute?",
        answer: "We are authorized partners for world-class manufacturers including SATA (Germany), DeVilbiss (UK), CAR-O-LINER (Sweden), 3M, and LINICH. Our inventory covers the full spectrum from precision spray guns to heavy-duty hydraulic lifting systems.",
    },
    {
        question: "How fast is your delivery service across Kerala and All India?",
        answer: "With our centralized hub in Chulliparamba, Malappuram, we ensure 24-48 hour dispatch. Our logistics network is equipped to handle both precision handheld tools and heavy industrial machinery like 4-ton lifts, ensuring safe delivery nationwide.",
    },
    {
        question: "Are your products GST compliant and IndiaMART verified?",
        answer: "Every purchase at Hexamech is backed by a valid GST Tax Invoice for Input Tax Credit. As a GST-verified and IndiaMART-trusted wholesaler, we guarantee the authenticity of every tool and provide reliable after-sales support.",
    },
    {
        question: "Do you provide technical support and installation for heavy equipment?",
        answer: "Yes. For complex machinery like two-post lifts, engine cranes, and paint booths, we provide professional on-site technical guidance and installation. Our service team also handles maintenance and repairs for the diagnostic equipment we supply.",
    },
    {
        question: "How can I obtain a specialized B2B quote for bulk requirements?",
        answer: "Bulk inquiries are our core business. You can use the 'Inquiry' form on any product page or contact our sales desk directly via WhatsApp. We offer tiered pricing structures tailored for service centers, garage owners, and industrial retailers.",
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
                        <p className="text-foreground text-sm font-black">
                            Can&apos;t find the answer you&apos;re looking for? Reach out to our customer support team.
                        </p>
                    </div>

                    <div className="lg:col-span-8 w-full">
                        <div className="bg-card border border-border rounded-xl shadow-sm">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-0 px-6 py-2">
                                        <AccordionTrigger className="text-base font-black text-black hover:text-[#09757a] text-left py-4">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground text-xs sm:text-sm font-medium leading-relaxed pb-4">
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
