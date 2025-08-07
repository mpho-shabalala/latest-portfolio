import SubHeading from "../shared/SubHeading";
import { journeyData } from "../../../data/journeyData";
import JourneyLi from "../shared/journeyLI";
import ImgDiv from "../shared/imgDiv";
import learning from '../../images/learning.jpg';

export default function LearningJourney() {
  return (
    <div className="flex items-center min-h-screen">
        <div className="w-full px-4 md:px-0 md:w-1/2">
            <SubHeading heading="Discover My Learning Journey" 
                text="
                    From curious computer science student to failures, and finding my passion in web development,
                    below timeframe outline the trajectory of my learning journey
            "/>
            <div>
                <ul>
                    {
                        journeyData.map((journey, index) => {
                            return <JourneyLi course={journey.course} institution={journey.institution} timeframe={journey.timeFrame} key={index} />
                        })
                    }
                </ul>
            </div>
        </div>
        <ImgDiv img={learning} hidden={true} />
    </div>  
  );
}