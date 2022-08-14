import Model from "../MyAvatar";
import "./style.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, PresentationControls } from "@react-three/drei";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaChevronRight} from "react-icons/fa"
const MainBanner = () => {
	return (
		<div className={"bannerWrapper"}>
			<div className={"modelWrapper"}>
				<Canvas>
					<Suspense fallback={null}>
						<PresentationControls
							global
							zoom={1}
							rotation={[0, 0, 0]}
							polar={[0, 0]}
							azimuth={[-Math.PI, Math.PI]}
						>
							<Model position={[0, 0, 0]} scale={22} />
						</PresentationControls>
						<spotLight angle={1} position={[0, 100, 100]} intensity={1} />
					</Suspense>
					<PerspectiveCamera makeDefault position={[0, 20, 100]} fov={35} />
				</Canvas>
			</div>
			<div className={"descriptionWrapper"}>
				<p>
					Hi, I'm Mahmoud Arab, I'm a software/machine learning engineer. I love
					creating meaningful software and experimenting with the newest
					technologies. In my free time I like to play video games, go to the
					gym, read books, and work on personal projects.
				</p>
				<div className={"iconsWrapper"}>
					<a href="https://github.com/mhmodo10" className={"icon"}>
						<BsGithub></BsGithub>
					</a>
					<a
						href="https://www.linkedin.com/in/mahmoud-arab-267507120/"
						className={"icon"}
					>
						<AiOutlineLinkedin></AiOutlineLinkedin>
					</a>
					<a href="mailto:mhmodarab55@gmail.com" className={"icon"}>
						<AiOutlineMail></AiOutlineMail>
					</a>
				</div>
                <a href={"#right"} className={"scrollToProjects"} onClick={(e) =>{ return true;}}>Projects<FaChevronRight></FaChevronRight></a>
			</div>
		</div>
	);
};

export default MainBanner;
