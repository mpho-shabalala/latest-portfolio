import { useState } from 'react'
import myImage from '../../images/my-img.png'
import Input from './input'
import DropdownInput from './DropdownInput'
import MessageBox from './messageBox'
import SecondaryBTN from './secondaryBtn'
export default function Contacts(){

    const [skill, setSkill] = useState("");
    const [message, setMessage] = useState("")
    return (
        <div className=' md:h-screen flex flex-col md:flex-row items-center'>
            <div className="w-2/5  p-4 pl-0 ">
                <img className='rounded-2xl' src={myImage} alt="" />
            </div>
            <div className="w-full p-4  md:w-3/5 md:pl-8 ">
                <h1 className=' mb-2 text-4xl font-bold'>LET'S WORK TOGETHER</h1>
                <p className='my-4'>Let’s build something impactful together—whether it’s  your website, or your next big idea.</p>
                <form className=''
                     action="submit">
                    <div className='flex flex-col md:flex-row justify-between w-full'>
                        <div className='md:mr-2'>
                        <Input type="text"    label_name="Name" placeholder="John Doe"></Input>
                        </div>
                            <Input  type="text" label_name="Email" placeholder="johndoe@example.com"></Input>
                    </div>
                    <DropdownInput
                        label="Service Needed ?"
                        options={["UI/UX development", "Backend API development", "System Design", "Database Development"]}
                        placeholder="Select..."
                        value={skill}
                        onChange={setSkill}
                    />
                    <MessageBox
                        label="What Can I Help You..."
                        value={message}
                        onChange={setMessage}
                        placeholder="Hello, I'd like to enquire about..."
                    />
                    <div className=' pt-8'>
                        <SecondaryBTN type='submit' text="SUBMIT"/>
                    </div>
                </form>
            </div>
        </div>
    )
}