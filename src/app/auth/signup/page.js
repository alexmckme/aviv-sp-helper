'use client'
import React from "react"
import { supabase } from "@/lib/supabase"

export default function Signup() {


    const [data, setData] = React.useState({email: '', password: ''})



    async function signup(){
        try {
            const { dataUser, error } = await supabase
                .auth
                .signUp({
                    email: data.email,
                    password: data.password,
                    options: {
                        emailRedirectTo: "http://localhost:3000/auth/login"
                    }
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
        <form

        onSubmit={(event) => {
            event.preventDefault()
            signup()
        }}
        >
            <p>S'enregistrer</p>
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
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                />
            </div>
                <button>Sign Up</button>
        </form>
    )
}