'use client'
import React from "react"
import { supabase } from "@/lib/supabase"

export default function ChangePassword() {


    const [data, setData] = React.useState({password: ''})



    async function changePassword(){
        try {
            const { dataUser, error } = await supabase
                .auth
                .updateUser({
                    password: data.password,
                })

            if (dataUser) {
                console.log(dataUser)
            }


        } catch (error) {
            console.log(error)
        }
    }



    function handleChange(event) {
        const {name, value} = event.target
        setData(currentData => {
            return {
                ...currentData,
                [name]: value
            }
        })
    }


    return (
        <div>
            <p>Saisissez votre nouveau mot de passe</p>

            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button onClick={changePassword}>Enregistrer</button>
            </div>
        </div>
    )
}