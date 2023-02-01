import Link from "next/link"
async function getProfile(){
    const res = await fetch('https://api.lanyard.rest/v1/users/265781702306037762')

    if(!res.ok) {
        throw new Error('failed to fetch discord status')
    }

    return res.json()
}

export default async function Navigation() {

    const profile = await getProfile()
    const status = profile.data.discord_status
    let ringCol = ""
    if (status == "dnd") { ringCol = "border-red-500" } else if (status == "online") { ringCol = "border-green-500" } else if (status== "idle") { ringCol = "border-yellow-500" } else { ringCol == "border-gray-500" }

    return (
        <div className="width-full bg-zinc-800 border-zinc-700 border-2 p-4 rounded-lg flex flex-col md:flex-row gap-4 text-center transition-all opacity-90 hover:opacity-100 justify-center">
            <Link href="/" className="m-auto"><p className="hover:underline font-bold">Home</p></Link>
            <Link href="/about" className="m-auto"><p className="hover:underline font-bold">About Me</p></Link>
            <Link href="/projects" className="m-auto"><p className="hover:underline font-bold">Projects</p></Link>
            <Link href="/contact" className="m-auto"><p className="hover:underline font-bold">Contact</p></Link>
            <div className="flex-grow w-10 h-10 m-auto rounded-full">
                <img src={`https://cdn.discordapp.com/avatars/${profile.data.discord_user.id}/${profile.data.discord_user.avatar}.png`} className={`w-10 h-10 p-1 rounded-full mr-0 m-auto border-2 ${ringCol}`} />
            </div>
        </div>
    )
}