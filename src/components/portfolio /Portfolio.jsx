import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from "react";
import './portfolio.scss'


export default function Portfolio(){

    const projects = [
        {
            id:1,
            title: "volunteerconnect",
            img:"https://images.pexels.com/photos/16129728/pexels-photo-16129728/free-photo-of-man-coding-on-pc.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "VolunteerConnect is a platform designed to bridge the gap between  organizations seeking volunteers and student volunteers"
        },{
            id:2,
            title: "Portfolio website",
            img:"https://images.pexels.com/photos/16129728/pexels-photo-16129728/free-photo-of-man-coding-on-pc.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "a website to showcase my past and inprogress projects  "
        },

        {
            id:3,
            title: "CodeFlowHub",
            img:"https://images.pexels.com/photos/16129728/pexels-photo-16129728/free-photo-of-man-coding-on-pc.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "I've developed a web application that lets users ask and answer programming questions using the MERN  stack. "},

    ]
    const Single = ({item})=>{
        const ref = useRef()

        const {scrollYProgress} =
            useScroll({
                target: ref,
                // offset:["start start","end start"]
            })

        const y = useTransform(scrollYProgress,[0,1],[-100,100])
        return(
            <section >
                <div className={"container"}>
                    <div className={"Wrapper"}>
                        <div className={"imageContainer"} ref={ref}>
                            <img src={item.img} alt={"m"}/>
                        </div>
                    </div>
                    <motion.div className={"textContainer"} style={{y}} >
                        <h2 >{item.title}</h2>
                        <p>{item.description}</p>
                        <button> see demo</button>
                    </motion.div>

                </div>

            </section>
        )
    }
    const ref  =useRef()
    const {scrollYProgress} =  useScroll({target: ref, offset:["end end", "start start"]})
    const scaleX =useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })


    return (


        <div className={"portfolio"}>
            <div className={"progress"}>
                <h1>projects</h1>
                <motion.div  style={{scaleX}}className={"progressbar"}> </motion.div>
            </div>
            {projects.map(item=>(
                <Single item={item} key={item.id}/>
            ))}

        </div>
    )

}