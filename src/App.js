import React from 'react';
import './App.css'; // Make sure to include your CSS

const App = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className="logo">
                        <h1>WebWhiz Wizards</h1>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#hero" className="home-button">Home</a></li>
                        <li><a href="#about" className="about-button">About</a></li>
                        <li><a href="#why-web-development" className="section-button">Section</a></li>
                        <li><a href="#impact" className="impact-button">Impact</a></li>
                    </ul>
                </nav>
            </header>
            <section id="hero">
                <div className="hero-content">
                    <div className="lines"></div>
                    <div className="particle" id="particle1"></div>
                    <div className="particle" id="particle2"></div>
                    <div className="particle" id="particle3"></div>
                    <div className="particle" id="particle4"></div>
                    <div className="particle" id="particle5"></div>
                    <div className="particle" id="particle6"></div>
                    <h1>The Importance of Web Development</h1>
                    <p>Discover why web development is crucial in today's digital world.</p>
                    <div className="hero-button">
                        <a href="#about" className="get-started-button">Get Started</a>
                    </div>
                </div>
            </section>
            <section id="about">
                <div className="about-content">
                    <h2>About Web Development</h2>
                    <p>Web Development involves building websites for the Internet, from simple static pages to complex web applications and e-business solutions.</p>
                    <div className="about-facts">
                        <div className="fact">
                            <h3>What is Web Development?</h3>
                            <p>Web Development involves building and maintaining websites. It includes aspects such as web design, web publishing, web programming, and database management.</p>
                        </div>
                        <div className="fact">
                            <h3>Why is it Important?</h3>
                            <p>In today's digital age, web development is essential for businesses to reach their audience. A well-designed website can improve user experience and provide valuable information to customers.</p>
                        </div>
                        <div className="fact">
                            <h3>Key Technologies</h3>
                            <p>Common technologies used in web development include HTML, CSS, JavaScript, and various frameworks and libraries that enhance functionality and aesthetics.</p>
                        </div>
                        <div className="fact">
                            <h3>Future Trends</h3>
                            <p>The future of web development includes advancements in artificial intelligence, progressive web apps, and enhanced user interfaces to provide a more interactive and immersive experience.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="why-web-development">
                <div className="section-content">
                    <h2>Why Web Development Matters</h2>
                    <div className="content-container">
                        <div className="image-text">
                            <img src="IT.jpg" alt="Benefits of Web Development" className="section-image" />
                            <div className="text-content">
                                <h3>Benefits of Web Development</h3>
                                <p>Web development is essential for creating and maintaining online presence. It includes designing interactive websites and web applications that enhance user experience and engagement.</p>
                            </div>
                        </div>
                        <div className="image-text">
                            <div className="text-content">
                                <h3>Impact on Everyday Life</h3>
                                <p>From online shopping to social media, web development impacts how we interact with technology. It provides the infrastructure for e-commerce, communication, and entertainment, making it a critical part of modern life.</p>
                            </div>
                            <img src="OIP.jpg" alt="Importance of Web Development" className="section-image" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="impact">
                <div className="impact-content">
                    <h2>Impact of Web Development on Future Technology</h2>
                    <div className="impact-text">
                        <div className="impact-item">
                            <img src="AS.jpg" alt="Future Technology" className="impact-image" />
                            <div className="impact-description">
                                <h3>Advancements in AI and Machine Learning</h3>
                                <p>Web development is paving the way for advancements in AI and machine learning. Enhanced web applications leverage AI to provide personalized user experiences and more efficient data processing.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <img src="OL.jpg" alt="Web 3.0" className="impact-image" />
                            <div className="impact-description">
                                <h3>Transition to Web 3.0</h3>
                                <p>The transition to Web 3.0 is revolutionizing how we interact with the web. Decentralized applications and blockchain technology are becoming more integrated, thanks to the foundational work of web developers.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <img src="IOT.jpg" alt="IoT" className="impact-image" />
                            <div className="impact-description">
                                <h3>Integration with IoT</h3>
                                <p>As the Internet of Things (IoT) expands, web development is crucial in creating interfaces and applications that connect and control a vast array of smart devices, enhancing the functionality and usability of IoT systems.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <img src="UX.jpg" alt="User Experience" className="impact-image" />
                            <div className="impact-description">
                                <h3>Enhanced User Experiences</h3>
                                <p>Future technologies are increasingly focused on providing seamless and intuitive user experiences. Web development is at the forefront of creating engaging interfaces and interactive elements that enhance user satisfaction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <p>&copy; 2024 WebWhiz Wizards. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
