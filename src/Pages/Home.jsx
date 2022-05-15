import Veggie from "../Components/Veggie";
import Popular from "../Components/Popular";
import {motion} from 'framer-motion'

function Home(){
    return(
        <motion.div>
            {/* <Veggie></Veggie> */}
            <Popular></Popular>
        </motion.div>
    )
}
export default Home;