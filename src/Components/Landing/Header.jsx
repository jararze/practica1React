import { motion } from 'motion/react';
const Header = () => {
    return (
        <motion.div
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5}}
        >
            <div className="header-container">
                <h1 className="header-title">
                    Módulo 7: DESARROLLO FRONTEND CON REACTJS
                </h1>
            </div>
        </motion.div>
    );
}

export default Header;