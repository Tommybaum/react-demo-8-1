import { useState } from "react"


const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const submitHandler = (submit) => {
        submit.preventDefault();
        alert(`Your Name: ${name} 
        Your Email: ${email} 
        Your Phone Number: ${phoneNumber}`)
    }
    return (
        <>
            <div id="contacts">
                <h1>Contacts</h1>
                <form onSubmit={submitHandler}>
                    <label>Enter your Name:
                        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </label>
                    <label>Enter your Email:
                        <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </label>
                    <label>Enter your Phone Number:
                        <input type="tel" placeholder="your Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </>
    )
}

export default Contact