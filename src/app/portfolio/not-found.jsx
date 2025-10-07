import { Breadcrumb } from "@/components/elements";
import { shimmer, toBase64 } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
	return (
		<React.Fragment>
			<Breadcrumb title="Page not found" />
			<section className="section-notfound">
				<div className="not-found-wrapper pb-24 pt-10 lg:pt-14 lg:pb-28 xl:pt-16 xl:pb-32 bg-grey">
					<div className="container mx-auto">
						<div className="not-found text-center">
							<Image
								src="/images/notfound.svg"
								height={500}
								width={500}
								alt="not found"
								placeholder="blur"
								blurDataURL={`data:image/svg+xml;base64,${toBase64(
									shimmer(500, 500)
								)}`}
								className="mx-auto"
							/>
							<div>
								<Link href="/" className="btn btn-large">
									<span>Back to home</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}
