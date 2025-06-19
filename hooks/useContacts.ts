import { useAppDispatch } from '@/store';
import * as Contacts from 'expo-contacts';
import { useEffect, useState } from "react";

const useContacts = () =>{
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(true)
    const [contacts, setContacts] = useState<Contacts.Contact[]>([])
    const [permissionDenied, setPermissionDenied] = useState(false);

    const fetchContacts = async () => {
        setLoading(true)
        try {
            const { status } = await Contacts.requestPermissionsAsync()
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
                })
                setContacts(data)
            } else {
                console.error("Permission to access contacts was denied")
                setPermissionDenied(true)
            }
        } catch (error) {
            console.error("Error fetching contacts:", error)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchContacts()
    }, [])

    return {contacts, loading, refetch: fetchContacts, permissionDenied}
}

export default useContacts