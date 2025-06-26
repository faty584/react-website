import Partners from "../component/partners";
import Welcome from "../component/welcome";
import Dolor from "../component/dolor";
import Nobis from "../component/nobis";
import Team from "../component/team";



const Home = () => {
    return (
        <div className="home">
            
            <Welcome />
            <Partners/>
            <Dolor />
            <Nobis />
            <Team />
        


        </div>
    );
};

export default Home;
