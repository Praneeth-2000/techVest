import React, { useState, useEffect, useRef } from 'react';
import { marked } from 'marked';
import { 
    MessageSquare, 
    Bot, 
    Trash2, 
    X, 
    Send, 
    Lightbulb, 
    User 
} from 'lucide-react';
import './ChatbotWidget.css';

/**
 * TechVest AI Chatbot Component for React
 */

const TECHVEST_CHATBOT_API_URL = 'https://techvest-chatbot-api-2026.azurewebsites.net/api';
// No API key is sent from the browser. The /chat and /feedback endpoints are
// AuthLevel.ANONYMOUS server-side, so no credential appears in this bundle.
// DO NOT add a key here - anything shipped to a browser is publicly readable.
// Access is controlled server-side by per-IP rate limiting, Origin validation,
// and three content-safety layers.

const ChatbotWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 'initial',
            text: "Hello! I'm TechVest AI Assistant. How can I help you today?",
            sender: 'bot',
            time: getCurrentTime(),
            suggestedQuestions: [
                "What AI services does TechVest offer?",
                "Tell me about your data engineering solutions",
                "What career opportunities are available?"
            ]
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [sessionId] = useState(() => generateSessionId());
    
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Scroll to bottom whenever messages list updates
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isTyping]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    function getCurrentTime() {
        return new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    }

    function generateSessionId() {
        return 'session_' + Math.random().toString(36).substring(2, 15);
    }

    const toggleChat = () => setIsOpen(!isOpen);

    const handleClearChat = async () => {
        setMessages([
            {
                id: Date.now(),
                text: "Hello! I'm TechVest AI Assistant. How can I help you today?",
                sender: 'bot',
                time: getCurrentTime(),
                suggestedQuestions: [
                    "What AI services does TechVest offer?",
                    "Tell me about your data engineering solutions",
                    "What career opportunities are available?"
                ]
            }
        ]);
        try {
            await fetch(`${TECHVEST_CHATBOT_API_URL}/clear-history?session_id=${sessionId}`, {
                method: 'POST'
            });
        } catch (error) {
            console.warn('Could not clear server-side history:', error);
        }
    };

    const sendMessage = async (text) => {
        const messageText = text || inputValue.trim();
        if (!messageText) return;

        // Add user message
        const userMsg = {
            id: Date.now(),
            text: messageText,
            sender: 'user',
            time: getCurrentTime()
        };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        try {
            const response = await fetch(`${TECHVEST_CHATBOT_API_URL}/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: messageText, session_id: sessionId })
            });

            if (!response.ok) throw new Error(`API returned ${response.status}`);

            const data = await response.json();
            setIsTyping(false);

            const botMsg = {
                id: Date.now() + 1,
                text: data.blocked ? `⚠️ ${data.response}` : data.response,
                sender: 'bot',
                time: getCurrentTime(),
                suggestedQuestions: data.suggested_questions || []
            };
            
            setMessages(prev => [...prev, botMsg]);

        } catch (error) {
            console.error('Error sending message:', error);
            setIsTyping(false);
            
            let errorText = 'Sorry, I encountered an error connecting to the server.';
            if (error instanceof TypeError && error.message.includes('fetch')) {
                errorText = '⚠️ **Connection Error:** I couldn\'t reach the server. This is usually due to a **CORS policy block**.';
            }

            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: errorText,
                sender: 'bot',
                time: getCurrentTime()
            }]);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') sendMessage();
    };

    // Normalise the model's markdown before handing it to marked.js.
    // marked.js only recognises a list block when it is preceded by a blank line;
    // without this, answers where a list follows a sentence directly were rendered
    // as one flat paragraph instead of bullets.
    const preprocessMarkdown = (text) => {
        // Defensive: strip images. The chatbot never legitimately returns one, and
        // rendering an attacker-supplied image URL can leak visitor IP/fingerprint
        // data. (The server also sanitises these; this is belt-and-braces.)
        text = text.replace(/!\[[^\]]*\]\([^)]*\)/g, '');
        text = text.replace(/<img\b[^>]*>/gi, '');

        // Unicode bullets -> markdown dashes
        text = text.replace(/^[•●◦▪▸►]\s*/gm, '- ');

        const isItem = (s) => /^\s*[-*+] |^\s*\d+\. /.test(s);
        const lines = text.split('\n');
        const out = [];
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const prev = i > 0 ? lines[i - 1] : null;
            // Blank line before a list block begins
            if (isItem(line) && prev !== null && !isItem(prev) && prev.trim() !== '') {
                out.push('');
            }
            // Blank line after a list block ends
            if (!isItem(line) && line.trim() !== '' && prev !== null && isItem(prev)) {
                out.push('');
            }
            out.push(line);
        }
        return out.join('\n');
    };

    const renderMessageContent = (msg) => {
        if (msg.sender === 'bot') {
            const html = marked.parse(preprocessMarkdown(msg.text));
            return <div dangerouslySetInnerHTML={{ __html: html }} className="markdown-content" />;
        }
        return <p>{msg.text}</p>;
    };

    return (
        <div className="tvbot-wrapper">
            {/* Floating Chat Button */}
            {!isOpen && (
                <button className="chat-button" onClick={toggleChat} aria-label="Open Chat">
                    <MessageSquare size={24} style={{ display: 'block' }} />
                </button>
            )}

            {/* Chatbot Container */}
            <div className={`chatbot-container ${isOpen ? 'active' : ''}`}>
                <div className="chatbot-header">
                    <div className="chatbot-header-content">
                        <div className="bot-avatar">
                            <Bot size={24} />
                        </div>
                        <div className="bot-info">
                            <h3>TechVest AI Assistant</h3>
                            <span className="status">
                                <span className="status-dot"></span>
                                Online
                            </span>
                        </div>
                    </div>
                    <div className="chatbot-actions">
                        <button className="action-btn" onClick={handleClearChat} title="Clear Chat">
                            <Trash2 size={16} />
                        </button>
                        <button className="action-btn" onClick={toggleChat} title="Close">
                            <X size={16} />
                        </button>
                    </div>
                </div>

                <div className="chatbot-messages">
                    {messages.map((msg) => (
                        <React.Fragment key={msg.id}>
                            <div className={`message ${msg.sender}-message`}>
                                <div className="message-avatar">
                                    {msg.sender === 'bot' ? (
                                        <Bot size={18} />
                                    ) : (
                                        <User size={18} />
                                    )}
                                </div>
                                <div className="message-content">
                                    {renderMessageContent(msg)}
                                    <span className="message-time">{msg.time}</span>
                                </div>
                            </div>
                            
                            {msg.sender === 'bot' && msg.suggestedQuestions && msg.suggestedQuestions.length > 0 && (
                                <div className="suggested-questions">
                                    {msg.suggestedQuestions.map((q, idx) => (
                                        <button 
                                            key={idx} 
                                            className="suggestion-btn" 
                                            onClick={() => {
                                                setInputValue(q);
                                                inputRef.current?.focus();
                                            }}
                                        >
                                            <Lightbulb size={14} className="lightbulb-icon" />
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                <div className="chatbot-input">
                    <div className="input-container">
                        <input 
                            type="text" 
                            id="userInput"
                            ref={inputRef}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..." 
                            autoComplete="off" 
                        />
                        <button className="send-button" onClick={() => sendMessage()} disabled={!inputValue.trim()}>
                            <Send size={18} />
                        </button>
                    </div>
                    <div className="input-footer">
                        <small>Powered by Microsoft Foundry AI</small>
                    </div>
                </div>

                <div className={`typing-indicator ${isTyping ? 'active' : ''}`}>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                </div>
            </div>
        </div>
    );
};

export default ChatbotWidget;
