import Link from "next/link"

export default function About() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="text-center">
                    <h1 className="font-bold text-3xl">About Me</h1>
                    <p>Let's get to know each other</p>
                    <br />
                </div>
            </div>
            <div className="text-center">
                <h2 className="text-xl font-bold">Who are you?</h2>
                <p>That's a good question! I'm Nick, a developer who likes to create projects for fun. <br />I have a passion for creating fun, quirky projects, which hopefully provide some form of utility to others</p>
                <br />
                <h2 className="text-xl font-bold">What do you know?</h2>
                <p>Here's a list of (pretty much) everything I am confident with!</p>
                <ul>
                    <li>• Javascript</li>
                    <li>• Typescript</li>
                    <li>• React</li>
                    <li>• NextJS</li>
                    <li>• MongoDB</li>
                    <li>• Prisma</li>
                    <li>• Javascript</li>
                    <li>• CSS</li>
                    <li>• HTML</li>
                    <li>• Node.JS</li>
                    <li>• Markdown</li>
                    <li>• ...and much more!</li>
                </ul>
                <br />
                <h2 className="text-xl font-bold">Can I see some of your projects?</h2>
                <p>Yup! Head on over to my <Link href="/projects" className="underline">projects page</Link> to see some of my past work</p>
            </div>
            
        </>
    )
}