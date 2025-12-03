import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";
import { createContext, useContext, useState } from "react";
import { db } from '../firebase/init.js'

const ContactContext = createContext();

const ContactFormProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const submitForm = async (data, collectionName = 'enquieries') => {
        // e.preventDefault();
        setLoading(true);
    try{
        const url = 'https://us-central1-my-portfolio-637e8.cloudfunctions.net/api/verify-captcha'
        const token = document.querySelector('textarea[name="g-recaptcha-response"]')?.value;
        if(!token) {
            alert("Please complete the captcha");
            return;
        }
        console.log(token)

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
        });

    const data = await res.json();
    console.log(data);
            const docRef = await addDoc(
                collection(db, collectionName), 
                {
                    ...data, 
                    createdAt: serverTimestamp()
                }
            )
            console.log("Form submitted with ID:", docRef.id);
            setSuccess(true)
        }catch(error){
            console.log(error.message)
            setError(error)
        }finally{
            setLoading(false)
        }
    }

    return <ContactContext.Provider

        value={{submitForm, loading, error, success}}
    >
        {children}
    </ContactContext.Provider>
}

const useFormContext = () => {
    const ctx = useContext(ContactContext)
    if( ctx == undefined) {
        console.log('Cannot use ctx outside the provider')
        throw new Error('Cannot use ctx outside the provider') 
    }
    return ctx
}
export {useFormContext, ContactFormProvider}

