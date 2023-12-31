import { useRef, useState, useEffect } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};


const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    console.log(`initial isMobile: ${isMobile}`)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            console.log(`isMobile: ${isMobile}`)
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={"animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>
                    Passionate about technology,
                    <br /> always looking for new challenges.
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    {!isMobile && (
                        // Mobile view
                        <img src="/people.webp" alt="" />
                    )
                    }
                    <h1>
                        What are my <motion.b whileHover={{ color: "orange" }}>Knowledges</motion.b>.
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        and <motion.b whileHover={{ color: "orange" }}>Skills.</motion.b>.
                    </h1>
                    {/* <button>WHAT WE DO?</button> */}
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Languages</h2>
                    <p>
                        - C++ <br />
                        - Java <br />
                        - Python <br />
                        - JavaScript<br />
                        - Typescript <br />
                        - HTML <br />
                        - CSS <br />
                    </p>

                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Databases</h2>
                    <p>
                        - MySQL <br />
                        - MongoDB <br />
                        - Firebase <br />
                        - PostgreSQL <br />
                        - Microsoft SQL Server <br />
                        - Oracle <br />
                        - Neo 4j <br />
                    </p>

                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Technologies</h2>
                    <p>
                        - React <br />
                        - Next <br />
                        - Angular <br />
                        - Express.js <br />
                        - Docker <br />
                        - AWS <br />
                        - Azure
                    </p>

                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Certificates</h2>
                    <p>
                        {isMobile ? (
                            // Mobile view
                            <>
                                - HTML<br />
                                - CSS<br />
                                - JavaScript<br />
                                - C# Unity Game Developer 2D<br />
                                - Python Masterclass<br />
                                - and more...<br />
                            </>
                        ) : (
                            // Desktop view
                            <>
                                - Certificate in HTML - Sololearn - 2023 <br />
                                - Certificate in CSS - Sololearn - 2023 <br />
                                - Certificate in JavaScript - Sololearn - 2023 <br />
                                - Certificate in Emerging Technology - Arizona State University - 2022 <br />
                                - Certificate of Completion C# Unity Game Developer 2D - Udemy - 2022 <br />
                                - Python Masterclass Certificate - Udemy - 2022 <br />
                                - Junior Achievement Guatemala - 2019
                            </>
                        )}
                    </p>

                </motion.div>
                {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div> */}
            </motion.div>
        </motion.div>
    );
};

export default Services;
