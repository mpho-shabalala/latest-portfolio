import SubHeading from "../shared/SubHeading";
import { stackData } from "../../../data/stackData";
import stack from '../../images/stack.jpg';
import StackLi from "../shared/stackLi";
import ImgDiv from "../shared/imgDiv";
export default function TechStack(){
    return (
        <div className=" px-4 md:px-0 flex items-center min-h-screen">
            <div className="  w-full md:w-1/2">
                <SubHeading heading="MY TECH STACK"  text="I build with intention, decide which route to take depending on project's primary characteristics, implement features based on project requirements and stack selected.
                    Below is a high overview of the tach-stack I frequently choose from.
                " />
                <div>
                    <ul>
                    {
                        stackData.map((stack, index) => {
                            return <StackLi img={stack.img} title={stack.title} description={stack.description} key={index} />
                        })
                    }
                    </ul>
                </div>
            </div>
            <ImgDiv img={stack} hidden={true} />
        </div>
    )
}