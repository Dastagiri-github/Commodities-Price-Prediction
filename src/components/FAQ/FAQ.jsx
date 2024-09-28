import React from 'react';
import './FAQ.css'; // Make sure to create a CSS file for styling

const FAQ = () => {
    return (
        <div id="faq" className="faq-container">
            <h1>Frequently Asked Questions</h1>
            <div className="faq-grid">
                <div className="faq-item">
                    <input type="checkbox" id="faq1" />
                    <label className="faq-question" htmlFor="faq1">
                        <h2>How is Agripredict beneficial?</h2>
                        <span className="faq-toggle"></span>
                    </label>
                    <div className="faq-answer">
                        <p>It helps to inform market interventions and stabilize commodity prices.</p>
                    </div>
                </div>

                <div className="faq-item">
                    <input type="checkbox" id="faq2" />
                    <label className="faq-question" htmlFor="faq2">
                        <h2>Can I get alerts for price changes?</h2>
                        <span className="faq-toggle"></span>
                    </label>
                    <div className="faq-answer">
                        <p>Yes! You can set up notifications in your user settings to receive alerts for significant price changes or trends.</p>
                    </div>
                </div>

                <div className="faq-item">
                    <input type="checkbox" id="faq3" />
                    <label className="faq-question" htmlFor="faq3">
                        <h2>Can I modify my buffer stock by releasing?</h2>
                        <span className="faq-toggle"></span>
                    </label>
                    <div className="faq-answer">
                        <p>Yes, you can modify your buffer stock by releasing excess inventory to stabilize supply and demand.</p>
                    </div>
                </div>

                <div className="faq-item">
                    <input type="checkbox" id="faq4" />
                    <label className="faq-question" htmlFor="faq4">
                        <h2>What should I do if I forget my password?</h2>
                        <span className="faq-toggle"></span>
                    </label>
                    <div className="faq-answer">
                        <p>If you forget your password, click on the 'Forgot Password' link on the login page.</p>
                    </div>
                </div>

                <div className="faq-item">
                    <input type="checkbox" id="faq5" />
                    <label className="faq-question" htmlFor="faq5">
                        <h2>What factors influence the price predictions?</h2>
                        <span className="faq-toggle"></span>
                    </label>
                    <div className="faq-answer">
                        <p>Factors include weather conditions, production estimates, historical trends, and seasonal variations.</p>
                    </div>
                </div>

                <div className="faq-item">
                    <input type="checkbox" id="faq6" />
                    <label className="faq-question" htmlFor="faq6">
                        <h2>What happens during extreme market fluctuations?</h2>
                        <span className="faq-toggle"></span>
                    </label>
                    <div className="faq-answer">
                        <p>The model adapts to sudden changes by incorporating real-time data inputs.</p>
                    </div>
                </div>

                <div className="faq-item">
                    <input type="checkbox" id="faq7" />
                    <label className="faq-question" htmlFor="faq7">
                        <h2>How often will the predictions be updated?</h2>
                        <span className="faq-toggle"></span>
                    </label>
                    <div className="faq-answer">
                        <p>Predictions are updated daily to reflect the latest market trends and data.</p>
                    </div>
                </div>

                <div className="faq-item">
                    <input type="checkbox" id="faq8" />
                    <label className="faq-question" htmlFor="faq8">
                        <h2>How does Agripredict contribute to stabilizing commodity prices?</h2>
                        <span className="faq-toggle"></span>
                    </label>
                    <div className="faq-answer">
                        <p>Agripredict stabilizes commodity prices by providing accurate forecasts that enable timely market interventions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
