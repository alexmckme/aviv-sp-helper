'use client'
import React from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation";


export default function Login() {


    const [data, setData] = React.useState({email: '', password: ''})


    const router = useRouter()

    async function login() {
        try {
            const { dataUser, error } = await supabase
                .auth
                .signInWithPassword({
                    email: data.email,
                    password: data.password
            })

            if (dataUser) {
                router.refresh()
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
                login()
            }}
        >
            <p>Se connecter</p>
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
                <button>Login</button>
        </form>
)
}