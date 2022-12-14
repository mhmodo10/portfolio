import "./style.css";
import { SiGithub, SiYoutube } from "react-icons/si";
const Project = ({
	title,
	description,
	technologies,
	year,
	isLeft,
	imageStyle,
	style,
	youtube,
	github,
}) => {
	return (
		<section className={`projectWrapper ${isLeft ? "left" : ""}`} style={style}>
			<div className={"projectContainer"}>
				<div className={"imageWrapper"} style={imageStyle}>
					<div className={"imageOverlay"}></div>
					<div className={"description"}>
						<h1>{title}</h1>
						<p>{description}</p>
						<div className={"projectLinks"}>
							{github ? (
                                <a className="proejctLink" href={github} target="_blank">
                                    <SiGithub color="white"></SiGithub>
                                </a>
							) : (
								<></>
							)}
							{youtube ? (
									<a  className="proejctLink" href={youtube} target="_blank">
										<SiYoutube color="red"></SiYoutube>
									</a>
							) : (
								<></>
							)}
						</div>
					</div>
				</div>
				<div className={"bottomContainer"}>
					<p className={"projectTitle"}>{title}</p>
					<div className={"technologies"}>
						{technologies.map((tech, index) => {
							return (
								<div key={index} className={"technology"}>
									{tech}
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className={"yearWrapper"}>{year}</div>
		</section>
	);
};

export default Project;
