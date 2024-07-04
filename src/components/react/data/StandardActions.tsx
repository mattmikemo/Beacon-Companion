import supabase from "../../../config/supabaseClient";
import BeaconCard from "../../BeaconCard.astro"
import { useEffect, useState } from "react";

const Home = () => {
   const [fetchError, setFetchError] = useState(null)
   const [StandardActions, setStandardActions] = useState(null)

   useEffect(() => {
    const fetchStandardActions = async () => {
        const { data, error } = await supabase
            .from('Standard-Actions')
            .select()
            
            if (error) {
                setFetchError('Could not fetch the data')
                setStandardActions(null)
                console.log(error)
            }
            if (data) {
                setStandardActions(data)
                setFetchError(null)
            }
    }

        fetchStandardActions()

   }, [])

    return (
        <div>
          
        </div>
        
    )
}

export default StandardActions