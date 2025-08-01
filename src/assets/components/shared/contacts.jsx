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
        <div className=' h-screen flex items-center'>
            <div className="w-2/5 relative p-4 pl-0 ">
                <img className='rounded-2xl' src={myImage} alt="" />
            </div>
            <div className="w-3/5 pl-8">
                <h1 className='text-6xl'>LET'S WORK TOGETHER</h1>
                <p className='my-4'>Let’s build something impactful together—whether it’s  your website, or your next big idea.</p>
                <form action="submit">
                    <div className='flex justify-between w-full'>
                        <Input type="text" style={{width: `50%`}}  label_name="Name" placeholder="John Doe"></Input>
                        <Input type="text" label_name="Email" placeholder="johndoe@example.com"></Input>
                    </div>
                    <DropdownInput
                        label="Service Needed ?"
                        options={["UI/UX development", "Backend API development", "System Design", "Database Development"]}
                        placeholder="Select..."
                        value={skill}
                        onChange={setSkill}
                    />
                    <MessageBox
                        label="What can I help you..."
                        value={message}
                        onChange={setMessage}
                        placeholder="Hello, I'd like to enquire about..."
                    />
                    <SecondaryBTN text="SUBMIT"/>
                </form>
            </div>
        </div>
    )
}