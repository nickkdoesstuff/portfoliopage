import Link from "next/link"

export default function Projects() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="text-center">
                    <h1 className="font-bold text-2xl">My Projects</h1>
                    <p>Here&apos;s what I&apos;ve worked on before</p>
                </div>

                <div className="text-center">
                    <h2 className="font-bold text-xl">Harmony Version 2</h2>
                    <img src="https://cdn.harmonyrad.io/files/8aae496d78e17584df1fea55.png" className="max-h-60 m-auto my-4 rounded-xl" />
                    <Link target={'_blank'} href="https://weareharmony.net/" className="italic underline opacity-80">https://weareharmony.net/</Link>
                    <p>I was the Lead Developer for the Harmony Version 2 launch, where I was responsible for identifying issues with the site pre-launch, and fixing bugs post-launch. <br />I was also responsible for creating many features for the site, such as validating purchases in the store, handling subscriptions, general improvement, and creating the Version 2 backend Staff Panel (picture not included due to privacy)<br />This included features such as a timetable, request line, post away requests, managing staff members, and more!</p>
                </div>

                <div className="text-center">
                    <h2 className="font-bold text-xl">RadioWiki</h2>
                    <img src="https://i.imgur.com/StlfaIT.png" className="max-h-60 m-auto my-4 rounded-xl" />
                    <Link target={'_blank'} href="https://radiowiki.net/" className="italic underline opacity-80">https://radiowiki.net/</Link>
                    <p>The main RadioWiki page (linked above) was primarily developed with just myself. <br />RadioWiki is a site for station owners to share their station and its history. It features an account system, profile system, station creation, article creation, staff systems, and more!</p>
                </div>

                <div className="text-center">
                    <h2 className="font-bold text-xl">Tovy</h2>
                    <img src="https://i.imgur.com/63qrGH6.png" className="max-h-60 m-auto my-4 rounded-xl" />
                    <Link target={'_blank'} href="https://tovyblox.xyz/" className="italic underline opacity-80">https://tovyblox.xyz/</Link>
                    <p>I&apos;m currently helping with development of Tovy, a staff management tool aimed at ROBLOX group owners. <br /> My most recent task to date has been creating the &apos;allies&apos; feature, where users can add groups, assign allaince reps, and schedule visits with said alliance. <br />This is an ongoing project of mine, and you can view what I&apos;m up to by viewing the link above.</p>
                </div>
            </div>
        </>
    )
}