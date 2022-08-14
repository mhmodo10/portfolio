import "./index.css";
import MainBanner from "./components/MainBanner";
import NavBar from "./components/Navbar";
import Project from "./components/Project";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { projects } from "./projects";
import { useWindowDimensions } from "./customHooks";

function App() {
	const { height, width } = useWindowDimensions();
	return (
		<div className="appWrapper">
			{width < 1200 ? (
				<Parallax
					pages={3}
					innerStyle={{ scrollBehavior: "smooth", overflow: "visible" }}>
					<ParallaxLayer speed={0.3}>
						<NavBar></NavBar>
						<MainBanner></MainBanner>
					</ParallaxLayer>
					<ParallaxLayer
						id={"right"}
						offset={width < 900 && width > 600 ? 1.95 : width < 600 ? 1.4 : 1}
						speed={0.7}
						style={{ pointerEvents: "none", scrollSnapAlign: "top" }}>
						{projects.map((project, index) => {
							return <Project key={index} {...project}></Project>;
						})}
					</ParallaxLayer>
				</Parallax>
			) : (
				<Parallax
					pages={3.3}
					innerStyle={{ scrollBehavior: "smooth", overflow: "visible" }}>
					<ParallaxLayer>
						<NavBar></NavBar>
						<MainBanner></MainBanner>
					</ParallaxLayer>
					<ParallaxLayer
						id={"left"}
						offset={1.2}
						speed={0.6}
						style={{ pointerEvents: "none", scrollSnapAlign: "top" }}>
						{projects.map((project, index) => {
							return (
								index % 2 === 1 && (
									<Project key={index} {...project} isLeft={true}></Project>
								)
							);
						})}
					</ParallaxLayer>

					<ParallaxLayer
						id={"right"}
						offset={1}
						speed={0.5}
						style={{ pointerEvents: "none" }}>
						{projects.map((project, index) => {
							return (
								index % 2 === 0 && <Project key={index} {...project}></Project>
							);
						})}
					</ParallaxLayer>
				</Parallax>
			)}
		</div>
	);
}

export default App;
