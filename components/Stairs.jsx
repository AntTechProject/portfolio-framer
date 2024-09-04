import { animate, motion} from "framer-motion"

//variants
const startAnimation = {
    inital:{
        top:"0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%", "0%"],
    },
}

// calculate the reverse index for staggared delay
const reverseIndex = (index)=>{
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
        {/* render 6 motion divs, each representing a step of the staris 
            each div will move the same animation defined by the startAnimation object.
            The delay for each div is calculated sinamacally based on it's revised index,
            creating a staggard effect with decreasing delay for each subsiquent step.
        */}
      {[...Array(6)].map((_, index)=>{
        return(
            <motion.div key={index} variants={startAnimation} initial="initial" animate="animate" exit="exit" transition={{
                duration:0.4,
                ease:'easeInOut',
                delay: reverseIndex(index) * 0.1,
            }} 
            className="h-full w-full bg-white relative"
            />
        )
        })}
        </>
    )
}

export default Stairs