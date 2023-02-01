import Link from "next/link"

export default function Contact() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="text-center">
                    <h1 className="font-bold text-3xl">Contact Me</h1>
                    <p>Get in touch with me</p>
                    <br />
                </div>
            </div>
            <div className="text-center">
                <h2 className="text-xl font-bold">Contact methods</h2>
                <p>Here are the best ways to contact me</p>
                <br />
                <ul>
                    <li>• Twitter: <Link className="underline" href={"https://twitter.com/MrNickKW1"}>Twitter</Link></li>
                    <li>• Discord: nickk#1000</li>
                    <li>• Email: nkirkwood46@gmail.com</li>
                </ul>
                <br />
                <p>I'm looking forward to hearing from you soon!</p>
            </div>
            
        </>
    )
}