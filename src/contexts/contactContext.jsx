import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";
import { createContext, useContext, useState } from "react";
import { db } from '../firebase/init.js'

const ContactContext = createContext();

const ContactFormProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const submitForm = async (data, collectionName = 'enquieries') => {
        setLoading(true)
        try{
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
            console.log(error)
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

