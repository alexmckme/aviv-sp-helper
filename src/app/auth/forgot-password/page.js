'use client'
import React from "react"
import { supabase } from "@/lib/supabase"

export default function ResetPasswordWithEmail() {


    const [data, setData] = React.useState({email: ''})



    async function resetPassword(){
        try {
            const { dataUser, error } = await supabase
                .auth
                .resetPasswordForEmail(
                    data.email,
                    {redirectTo: "http://localhost:3000/authentication/change-password"}
                )

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
            <p>Réinitialiser le mot de passe</p>
            <div>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                />
            </div>

            <div>
                <button onClick={resetPassword}>Reset Password</button>
            </div>
        </div>
    )
}