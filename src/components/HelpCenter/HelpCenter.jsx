import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HelpCenter = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-16">
            {/* Header Section */}
            <div className="text-center mb-12 px-4">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Help Center</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Need assistance? We’re here to help! Browse FAQs or reach out to our support team for personalized assistance.
                </p>
            </div>

            {/* Support Options */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4 mb-16">
                <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">📦 Order Support</h3>
                    <p className="text-gray-600 mb-3">Track orders, report delivery issues, or modify your purchase.</p>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">
                        Track Order
                    </button>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">🔄 Returns & Refunds</h3>
                    <p className="text-gray-600 mb-3">Learn about return policies and initiate a product return or refund.</p>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">
                        Start a Return
                    </button>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">💡 Product Help</h3>
                    <p className="text-gray-600 mb-3">Troubleshoot smart lighting, setup guides, and warranty information.</p>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">
                        View Guides
                    </button>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md mb-16">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <p className="font-semibold text-gray-800">How can I track my order?</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className="text-gray-600">
                                You can track your order by clicking “Track Order” in the top menu or the Help Center. Enter your order ID or email to see real-time updates.
                            </p>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <p className="font-semibold text-gray-800">What is the return policy?</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className="text-gray-600">
                                You can return items within 7 days of delivery if they are unused and in original packaging. Some custom or clearance items may not be eligible.
                            </p>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <p className="font-semibold text-gray-800">Do you offer warranty on lights?</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className="text-gray-600">
                                Yes! Most of our lights come with a 1-year replacement warranty. Check the product page for specific details.
                            </p>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <p className="font-semibold text-gray-800">How do I contact customer support?</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className="text-gray-600">
                                You can reach us at <strong>support@vivensaa.com</strong> or call us at <strong>+91 98765 43210</strong> between 9 AM – 7 PM (Mon–Sat).
                            </p>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>

            {/* Contact Section */}
            <div className="max-w-5xl mx-auto bg-indigo-600 text-white rounded-2xl p-10 text-center">
                <h3 className="text-3xl font-semibold mb-4">Still Need Help?</h3>
                <p className="mb-6">Our support team is always ready to assist you with any inquiries.</p>
                <a
                    href="mailto:support@vivensaa.com"
                    className="bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                    Contact Support
                </a>
            </div>
        </div>
    );
};

export default HelpCenter;
