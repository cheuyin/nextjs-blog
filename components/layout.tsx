import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const name = "Stanley Cheung";
export const siteTitle = "Stanley's Blog";

export default function Layout({
	children,
	home,
}: {
	children: React.ReactNode;
	home?: boolean;
}) {
	return (
		<div className="container mx-auto max-w-xl px-4 my-12">
			<Head>
				<link
					rel="icon"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
				/>
			</Head>
			<header className="flex flex-col items-center">
				{home ? (
					<>
						<Image
							priority
							src="/images/profile.jpg"
							className="rounded-full"
							height={144}
							width={144}
							alt=""
						/>
						<h1 className="text-4xl font-bold leading-loose">{name}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<Image
								priority
								src="/images/profile.jpg"
								className="rounded-full"
								height={108}
								width={108}
								alt=""
							/>
						</Link>
						<h2 className="text-2xl font-semibold leading-loose">
							<Link href="/" className="text-inherit">
								{name}
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className="mt-12">
					<Link href="/">Back to home</Link>
				</div>
			)}
		</div>
	);
}
