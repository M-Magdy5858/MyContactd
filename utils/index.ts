import { Contact } from "expo-contacts";

export const getGender = async (contact: Contact)=>{
    if (!contact.name) return "unknown";
    
    const firstName = contact.name.split(" ")[0];
    try {
        const res = await fetch(`https://api.genderize.io/?name=${firstName}`);
        const data = await res.json();
        return data.gender || "unknown";
    } catch (e) {
        return "unknown";
    }
}