

import { useEffect, useState } from 'react'
import myImage from '../../images/my-img.png'
import Input from './input'
import Status from './status'
import DropdownInput from './DropdownInput'
import MessageBox from './messageBox'
import SecondaryBTN from './secondaryBtn'
import ReCAPTCHA from "react-google-recaptcha";

import { useFormContext } from '../../../contexts/contactContext'

export default function Contacts() {
    const { loading, submitForm, error, success } = useFormContext()

    const [status, setStatus] = useState({
        status: false,
        statusText: ''
    })

    const [recaptchaToken, setRecaptchaToken] = useState(null)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        service: ''
    })

    const handleChange = e => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Check missing fields
        if (
            !formData.name ||
            !formData.email ||
            !formData.message ||
            !formData.service
        ) {
            setStatus({ status: false, statusText: 'Please fill out every field on the form!!' })
            return
        }

        // Check captcha
        if (!recaptchaToken) {
            setStatus({ status: false, statusText: 'Please complete the captcha!' })
            return
        }

        // SEND FORM DATA + CAPTCHA TOKEN
        await submitForm({ ...formData, recaptchaToken })

        if (loading) {
            setStatus({ status: true, statusText: 'Loading, wait a sec!!' })
        }

        if (success) {
            setFormData({ name: '', email: '', message: '', service: '' })
            setRecaptchaToken(null)
            setStatus({ status: true, statusText: 'Success!!' })
        } else {
            setStatus({ status: false, statusText: 'Failed!!' })
        }
    }

    // Auto-dismiss status
    useEffect(() => {
        if (!status.statusText) return

        const timer = setTimeout(() => {
            setStatus({ status: false, statusText: '' })
        }, 10000)

        return () => clearTimeout(timer)
    }, [status])

    return (
        <div id='contacts' className='md:h-screen flex flex-col md:flex-row items-center'>
            <div className="w-2/5 p-4 pl-0">
                <img className='rounded-2xl' src={myImage} alt="" />
            </div>

            <div className="w-full p-4 md:w-3/5 md:pl-8">

                <h1 className='mb-2 text-4xl font-bold'>LET'S WORK TOGETHER</h1>
                <p className='my-4'>Let’s build something impactful together—whether it’s your website, or your next big idea.</p>

                <form className='' onSubmit={handleSubmit}>
                    <div className='flex flex-col md:flex-row justify-between w-full'>
                        <div className='md:mr-2'>
                            <Input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                label_name="Name"
                                placeholder="John Doe"
                            />
                        </div>

                        <Input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="text"
                            label_name="Email"
                            placeholder="johndoe@example.com"
                        />
                    </div>

                    <DropdownInput
                        label="Service Needed ?"
                        options={["UI/UX web development", "Feature upgrade/addition", "General enquiry", "Collaboration"]}
                        placeholder="Select..."
                        name="service"
                        value={formData.service}
                        handleChange={handleChange}
                    />

                    <MessageBox
                        label="What Can I Help You..."
                        value={formData.message}
                        name="message"
                        handleChange={handleChange}
                        placeholder="Hello, I'd like to enquire about..."
                    />

                    <ReCAPTCHA
                        sitekey={'6LcHBx4sAAAAAFDjVAdmD-JiIeE24QmJB3cHOk0H'}
                        onChange={(value) => setRecaptchaToken(value)}
                    />

                    <div className='pt-8'>
                        <SecondaryBTN
                            handleSubmit={handleSubmit}
                            loading={loading}
                            type='submit'
                            text="SUBMIT"
                        />
                    </div>
                </form>
            </div>

            {status.statusText && (
                <Status status={status.status} statusText={status.statusText} />
            )}
        </div>
    )
}
