import './hero.scss'
import {motion} from "framer-motion";

export default function Hero(){

    const scrollvariants = {
        initial:{
            x: 0,

        },
        animated:{
            x:"-220%",
            transition:{
                repeat:Infinity,
                repeatType:"mirror",
                duration: 30,

            }
        },
    }

    const textvariants = {
        initial:{
            x:-500,
            opacity :0
        },
        animated:{
            x:0,
            opacity :1,
            transition:{
                duration: 1,
                staggerChildren:0.2
            }
        },
        scrollButton:{
        opacity:0,
            y:10,
            transition:{
            duration: 2.0,
                repeat: Infinity
            }
        }



    }
    return(
        <div className={"hero"}>
            <div className={"Wrapper"}>
                <motion.div className={"textcontainer"} variants={textvariants} initial={"initial"} animate={"animated"}>
                    <motion.h2 variants={textvariants}> ENIOLUWA AKINWANDE</motion.h2>
                    <motion.h1 variants={textvariants}> Web developer and Cyber-security personnel</motion.h1>
                    <motion.div variants={textvariants} className={"buttons"}>
                        <motion.button variants={textvariants}> see my work </motion.button>
                        <motion.button variants={textvariants}><a href="./Contact">Contact me</a> </motion.button>
                    </motion.div>
                    <motion.img variants={textvariants} animate={"scrollButton"} src={"/scroll.png"} />
                </motion.div>
            </div>
            <motion.div className={"slidingTextContainer"} variants={scrollvariants} initial={"initial"} animate={"animated"}>
                Web developer Cyber security analyst
            </motion.div>

            <motion className={"imageContainer"}>
                <img src={"/hero.JPG"} />
            </motion>
        </div>

    )

}