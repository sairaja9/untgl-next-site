'use client'

import Navbar from "./components/navbar";

import Link from 'next/link';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export default function Home() {
	return (
		<main className="min-h-screen bg-blue text-white font-body">

			<Navbar />

			<div className="flex justify-center items-center text-center font-heading pt-32 pb-20">
				<div className="w-1/3">
					<h4 className="text-lg pb-10">YOUR ONE STOP SHOP FOR</h4>
					<h2 className="text-5xl">ONLINE MARKETING AND SOFTWARE DEVELOPMENT</h2>
				</div>
			</div>

			<div className="h-[680px] bg-[url('../public/assets/home-landing.jpg')] bg-cover bg-center"></div>

			<div className="px-[10%]">
				<div className="text-center">
					<div className="flex justify-center w-full pt-40 pb-20"><h4 className='text-5xl font-heading'>WORK WITH UNTGL</h4></div>
					<div className="flex justify-between items-center">
						<div className="w-[27%]">
							<h5 className="font-heading text-3xl pb-10">DESIGN AND DEVELOPMENT</h5>
							<p className="pb-5">Craft a bespoke digital platform with our Design and Development Plan. Our experts blend custom branding with unparalleled user experience, creating a captivating website that elevates your brand and engages your clients.</p>
							<Link href='/services' className="underline underline-offset-8 text-grey">Learn More</Link>
						</div>
						<div className="w-[27%]">
							<h5 className="font-heading text-3xl pb-10">MARKETING BUNDLE</h5>
							<p className="pb-5">Our Marketing Bundle Plan leverages SEO and social media marketing to drive traffic and brand growth. Experienced specialists focus on amplifying your digital footprint, propelling your brand to new heights.</p>
							<Link href='/services' className="underline underline-offset-8 text-grey">Learn More</Link>
						</div>
						<div className="w-[27%]">
							<h5 className="font-heading text-3xl pb-10">CUSTOM BUNDLE</h5>
							<p className="pb-5">The Custom Plan offers flexibility to mix and match design, development, and marketing services to fit your budget. Create a bespoke package that aligns with your vision, ensuring a comprehensive digital strategy from the start.</p>
							<Link href='/services' className="underline underline-offset-8 text-grey">Learn More</Link>
						</div>
					</div>
				</div>

				<div className="mt-28 border-t">
					<div className="pt-5 flex justify-between">
						<div className="w-1/2">
							<h6 className="font-heading text-xl pb-10">ONLINE MARKETING GUIDANCE</h6>
							<div className="h-96 w-[50%] bg-[url('../public/assets/google.jpg')] bg-cover bg-center"></div>
						</div>
						<div className="w-1/2">
							<h5 className="font-heading text-3xl pb-20">IMPROVING YOUR ONLINE DISCOVERABILITY</h5>
							<div className="flex justify-between">
								<div className="w-[45%]">
									<h6 className="font-heading text-xl pb-10">EMBRACE YOUR BRAND</h6>
									<p className="pb-5">Unlock the power of your brand online with our expertise. Our services transform your website into a digital showcase, reflecting your unique offerings and brand values. Let us bring your brand's voice and vision to life, creating a compelling online presence that captivates visitors.</p>
									<Link href='/projects' className="underline underline-offset-8 text-grey">Explore Featured Projects</Link>
								</div>
								<div className="w-[45%]">
									<h6 className="font-heading text-xl pb-10">CONNECT WITH YOUR TARGET MARKET</h6>
									<p className="pb-5">Elevate your reach with our SEO and social media services, connecting you directly to your target market. We ensure your website is not just visible, but irresistible to the right audience, amplifying your online presence effectively.</p>
									<Link href='/projects' className="underline underline-offset-8 text-grey">Schedule a Strategy Consultation</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-28 border-t">
					<div className="pt-5 flex justify-between">
						<div className="w-1/2">
							<h6 className="font-heading text-xl pb-10">AGENCY BENEFITS</h6>
							<div className="h-96 w-[50%] bg-[url('../public/assets/whiteboard-session.jpg')] bg-cover bg-center"></div>
						</div>
						<div className="w-1/2">
							<h5 className="font-heading text-3xl pb-20">CREATING A PLAN THAT WORKS FOR YOU</h5>
							<p className="pb-20 text-lg">Opting for our agency takes away the hassle of searching for skilled individuals or navigating complex online builders. We provide a one-stop solution, handling everything from design to launch, ensuring your website is uniquely yours.<br></br><br></br>This approach is not only simpler but also saves time and avoids hidden costs. With our expertise, we craft a website that truly represents your brand, all the while making the process straightforward and worry-free. Let us help bring your vision to life, hassle-free.</p>
							<Link href='/consultation' className="bg-grey text-black py-4 px-7 text-lg font-body font-bold">Book a free strategy call</Link>
						</div>
					</div>
				</div>

				<div className="mt-28 border-t">
					<div className="flex justify-between text-xl py-5">
						<h6 className="font-heading">FEATURED PROJECTS</h6>
						<div className="flex justify-between">
							<MdArrowBackIos />
							<MdArrowForwardIos />
						</div>
					</div>
					<div className="flex justify-between">
						<div className="h-96 w-[18%] bg-[url('../public/assets/whiteboard-session.jpg')] bg-cover bg-center"></div>
						<div className="h-96 w-[18%] bg-[url('../public/assets/whiteboard-session.jpg')] bg-cover bg-center"></div>
						<div className="h-96 w-[18%] bg-[url('../public/assets/whiteboard-session.jpg')] bg-cover bg-center"></div>
						<div className="h-96 w-[18%] bg-[url('../public/assets/whiteboard-session.jpg')] bg-cover bg-center"></div>
						<div className="h-96 w-[18%] bg-[url('../public/assets/whiteboard-session.jpg')] bg-cover bg-center"></div>
					</div>
				</div>

			</div>
		</main>
	);
}
