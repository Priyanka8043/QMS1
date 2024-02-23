import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../App.css';

const Info = () => {
    const [scrollY, setScrollY] = useState(0);
    const [animationStarted, setAnimationStarted] = useState([false, false, false]);
    const controls = [useAnimation(), useAnimation(), useAnimation()];

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!animationStarted[0] && scrollY > 100) {
            controls[0].start({
                opacity: 1,
                x: 0,
                transition: { duration: 1 }
            });
            setAnimationStarted([true, false, false]);
        } else if (!animationStarted[1] && scrollY > 200) {
            controls[1].start({
                opacity: 1,
                x: 0,
                transition: { duration: 1 }
            });
            setAnimationStarted([true, true, false]);
        } else if (!animationStarted[2] && scrollY > 300) {
            controls[2].start({
                opacity: 1,
                x: 0,
                transition: { duration: 1 }
            });
            setAnimationStarted([true, true, true]);
        }
    }, [scrollY, controls, animationStarted]);

    return (
        <div className='info'>
            <section className='sec'>
                <motion.div 
                    className="content"
                    initial={{ opacity: 0, x: -100 }}
                    animate={controls[0]}
                >
                    <h2>Heading Heading Heading</h2>
                    <h3>subheading</h3>
                    <p>
                        If you already installed the "ES7+ React/Redux/React-Native snippets" extension and it's still not working, look at the bottom-right corner of VS code, you'll see JavaScript. Simply click on it and type "React" and then select "JavaScript JSX". Try typing "rafce" again and it should work now. **Also make sure the file extension is correct. Make sure it's ".js" attached Hope this helps
                    </p>
                </motion.div>
            </section>
            <section className='sec'>
                <motion.div 
                    className="content"
                    initial={{ opacity: 0, x: -100 }}
                    animate={controls[1]}
                >
                    <h2>Heading Heading Heading</h2>
                    <h3>subheading</h3>
                    <p>
                        If you already installed the "ES7+ React/Redux/React-Native snippets" extension and it's still not working, look at the bottom-right corner of VS code, you'll see JavaScript. Simply click on it and type "React" and then select "JavaScript JSX". Try typing "rafce" again and it should work now. **Also make sure the file extension is correct. Make sure it's ".js" attached Hope this helps
                    </p>
                </motion.div>
            </section>
            <section className='sec'>
                <motion.div 
                    className="content"
                    initial={{ opacity: 0, x: -100 }}
                    animate={controls[2]}
                >
                    <h2>Heading Heading Heading</h2>
                    <h3>subheading</h3>
                    <p>
                        If you already installed the "ES7+ React/Redux/React-Native snippets" extension and it's still not working, look at the bottom-right corner of VS code, you'll see JavaScript. Simply click on it and type "React" and then select "JavaScript JSX". Try typing "rafce" again and it should work now. **Also make sure the file extension is correct. Make sure it's ".js" attached Hope this helps
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default Info;
