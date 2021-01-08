import Navbar from "../components/navbar";

export default function About() {
	return (
		<div>
			<div className="relative bg-white">
				<div className="max-w-7xl mx-auto">
					<Navbar></Navbar>	
				</div>
			</div>

			<div className="mt-10 mb-10 py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h3 className="text-3xl font-semibold">Contact Us</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
