import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

let nextId = 2; // Simple counter for unique IDs

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! Need help choosing a treatment or booking an appointment?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [currentStep, setCurrentStep] = useState('initial');
    const [options, setOptions] = useState([
        "Emergency",
        "Implants",
        "Invisalign",
        "Book appointment"
    ]);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, options]);

    const generateId = () => {
        return nextId++;
    };

    const handleOptionClick = (option) => {
        processUserMessage(option);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        processUserMessage(inputValue);
        setInputValue("");
    };

    const processUserMessage = (text) => {
        // Add user message
        const userMsg = { id: generateId(), text, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setOptions([]); // Hide options while typing/processing

        // Determine bot response based on flow state
        const lowerInput = text.toLowerCase();

        setIsTyping(true);

        // Simulate network delay for realistic feel
        const delay = Math.floor(Math.random() * 800) + 800; // 800ms - 1600ms

        setTimeout(() => {
            let nextOptions = [];
            let botText = "";
            let nextStep = currentStep;

            if (currentStep === 'initial') {
                if (lowerInput.includes('emergency') || lowerInput.includes('pain')) {
                    nextStep = 'emergency_1';
                    botText = "I'm sorry to hear that. Do you need to see a dentist today?";
                    nextOptions = ["Yes, today", "Tomorrow is fine", "Just a question"];
                } else if (lowerInput.includes('implant')) {
                    nextStep = 'implants_1';
                    botText = "Dental implants are a great permanent solution! Are you looking to replace a single tooth or multiple teeth?";
                    nextOptions = ["Single tooth", "Multiple teeth", "Full arch"];
                } else if (lowerInput.includes('invisalign') || lowerInput.includes('braces')) {
                    nextStep = 'invisalign_1';
                    botText = "Invisalign is perfect for a straight smile without wires. Have you had orthodontic treatment before?";
                    nextOptions = ["Yes, in the past", "No, never"];
                } else if (lowerInput.includes('book') || lowerInput.includes('appointment')) {
                    nextStep = 'booking_1';
                    botText = "Awesome! Are you a new or returning patient?";
                    nextOptions = ["New Patient", "Returning Patient"];
                } else {
                    botText = "I can definitely help with that. Are you interested in one of our core services?";
                    nextOptions = ["Emergency", "Implants", "Invisalign", "Book appointment"];
                }
            } else if (currentStep.startsWith('emergency_')) {
                nextStep = 'end';
                botText = "For dental emergencies, the fastest way to get help is to call us directly. Please call (555) 123-4567 right away so we can prepare for your arrival.";
                nextOptions = ["Start Over"];
            } else if (currentStep === 'implants_1') {
                nextStep = 'end';
                botText = `Got it. We offer free, comprehensive consultations for implants where we take 3D scans. You can book an appointment using the "Book Online" button at the top of the page!`;
                nextOptions = ["Start Over"];
            } else if (currentStep === 'invisalign_1') {
                nextStep = 'end';
                botText = "Great! Treatment usually takes 6-18 months depending on the case, and we offer 0% financing. We'd love to scan your smile—feel free to book a consultation!";
                nextOptions = ["Start Over"];
            } else if (currentStep === 'booking_1') {
                nextStep = 'end';
                botText = "Perfect. Please use the 'Book Online' button in the main navigation bar to select your preferred date, time, and service.";
                nextOptions = ["Start Over"];
            } else if (currentStep === 'end' || lowerInput.includes('start over')) {
                nextStep = 'initial';
                botText = "How else can I help you today?";
                nextOptions = ["Emergency", "Implants", "Invisalign", "Book appointment"];
            } else {
                nextStep = 'initial';
                botText = "I'm not exactly sure, but our clinical team can definitely assist! In the meantime, what else can I help you explore?";
                nextOptions = ["Emergency", "Implants", "Invisalign", "Book appointment"];
            }

            setMessages(prev => [...prev, { id: generateId(), text: botText, sender: 'bot' }]);
            setCurrentStep(nextStep);
            if (nextOptions.length > 0) {
                setOptions(nextOptions);
            }
            setIsTyping(false);
        }, delay);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat Panel */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-[calc(100vw-3rem)] sm:w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-secondary-200 overflow-hidden flex flex-col mb-2 animate-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="bg-primary-600 text-white p-4 flex justify-between items-center rounded-t-2xl">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse"></div>
                            <div>
                                <h3 className="font-semibold text-sm">SmileCare Support</h3>
                                <p className="text-[10px] text-primary-100 opacity-80 leading-tight">Typically replies instantly</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-primary-100 hover:text-white transition-colors bg-black/10 hover:bg-black/20 p-1.5 rounded-full"
                            aria-label="Close Chat"
                        >
                            <X size={16} />
                        </button>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 p-4 h-[350px] overflow-y-auto bg-slate-50/50 flex flex-col gap-4 relative">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`max-w-[85%] p-3.5 text-sm premium-transition ${msg.sender === 'user'
                                    ? 'bg-primary-600 text-white self-end rounded-2xl rounded-tr-sm shadow-soft'
                                    : 'bg-white text-secondary-800 border border-secondary-100 self-start rounded-2xl rounded-tl-sm shadow-soft animate-in fade-in slide-in-from-bottom-2 duration-300'
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="bg-white border border-secondary-100 self-start rounded-2xl rounded-tl-sm shadow-sm p-4 w-16 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <div className="flex gap-1 items-center justify-center">
                                    <div className="w-1.5 h-1.5 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        )}

                        {/* Options */}
                        {!isTyping && options.length > 0 && (
                            <div className="flex flex-col gap-2 mt-2 animate-in fade-in slide-in-from-bottom-2 duration-500">
                                {options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionClick(option)}
                                        className="text-left text-sm bg-white border border-primary-200 text-primary-700 hover:bg-primary-50 py-2.5 px-4 rounded-xl transition-colors shadow-sm font-medium hover:shadow-md hover:-translate-y-0.5 premium-transition"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-secondary-100 flex gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type a message..."
                            disabled={isTyping}
                            className="flex-1 bg-secondary-50 border border-secondary-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50 disabled:bg-secondary-100 premium-transition"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim() || isTyping}
                            className="bg-primary-600 text-white p-2.5 rounded-full hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-soft premium-transition active:scale-95"
                            aria-label="Send message"
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center animate-pulse-soft relative"
                aria-label={isOpen ? "Close Support Chat" : "Open Support Chat"}
            >
                {/* Notification ping on closed state */}
                {!isOpen && (
                    <span className="absolute overflow-hidden -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-accent-500 border-2 border-white"></span>
                    </span>
                )}
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>
        </div>
    );
};

export default Chatbot;
