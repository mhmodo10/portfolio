import ocr_ai from "./media/ocr_ai.png";
import crime_dashboard from "./media/crime_dashboard.png";
import vr_viewer from "./media/vr_viewer.png";
import super_res from "./media/super_res.png";
import ar_infravision from "./media/ar_infravision.png";
import plant_watering from "./media/plant_iot.png";
import trip_tracker from "./media/trip_tracker.png";
import {
	SiFlask,
	SiReact,
	SiPython,
	SiR,
	SiCss3,
	SiUnity,
	SiCsharp,
	SiOculus,
	SiTensorflow,
	SiOpencv,
	SiRaspberrypi,
	SiAndroidstudio,
    SiJava,
    SiGooglemaps
} from "react-icons/si";

export const projects = [
	{
		title: "OCR AI",
		year: 2022,
		description:
			"This project is the result of my bachelor thesis. An end-to-end software that is able to extract data from invoices and generate filled in logistics forms using that data. It utilizes OCR AI to read text off of images of invoices. up to 4x faster than manual data extraction.",
		technologies: [
			<SiFlask></SiFlask>,
			<SiReact></SiReact>,
            <h4>AI</h4>,
		],
		image: ocr_ai,
		github: "",
		youtube: "",
		imageStyle: { background: `no-repeat center/cover url(${ocr_ai})` },
	},
	{
		title: "Crime dashboard",
		year: 2022,
		description:
			"I have worked on this project with my team during my data science minor. It is a software that visualizes crime statistics in the Netherlands. It contains a crime prediction model which can predict different types of crime using seasonal data.",
		technologies: [<SiR></SiR>, <SiCss3></SiCss3>, <h4>AI</h4>],
		image: crime_dashboard,
		github: "",
		youtube: "",
		imageStyle: { background: `no-repeat center/cover url(${crime_dashboard})` },
	},
	{
		title: "VR Viewer",
		year: 2021,
		description:
			"This project is the result of my internship at Soltegro. It is a software which allows users to view and navigate a 3D digital world with(out) a VR headset.",
		technologies: [
			<SiCsharp></SiCsharp>,
			<SiUnity></SiUnity>,
			<SiOculus></SiOculus>,
		],
		image: vr_viewer,
		github: "",
		youtube: "",
		imageStyle: { background: `no-repeat center/cover url(${vr_viewer})` },
	},
	{
		title: "Super Resolution AI",
		year: 2021,
		description:
			"I have worked on this project during my minor in Machine learning. It is a Deep learning model which takes in images and scales them up by 4x without suffering from quality loss.",
		technologies: [
			<SiPython></SiPython>,
			<SiTensorflow></SiTensorflow>,
			<SiOpencv></SiOpencv>,
		],
		image: super_res,
		github: "",
		youtube: "",
		imageStyle: { background: `no-repeat center/ 100% 100% url(${super_res})` },
	},
	{
		title: "AR infravision",
		year: 2020,
		description:
			"I have worked on this project during my internship at Soltegro. It is a mixed reality application for the Microsoft Hololens (1st gen). It allows engineers to help maintenance workers remotely. It tracks the movement of the worker and simulates it in a 3D world that can be seen by the engineer.",
		technologies: [<SiUnity></SiUnity>, <SiCsharp></SiCsharp>, <h4>AR</h4>],
		image: ar_infravision,
		github: "",
		youtube: "",
		imageStyle: { background: `no-repeat center/cover url(${ar_infravision})` },
	},
	{
		title: "Plant watering",
		year: 2020,
		description:
			"I created this app that reminds the user of watering their plant. It works in combination with a respberry pi and a soilmoisture sensor.",
		technologies: [<SiPython></SiPython>, <SiRaspberrypi></SiRaspberrypi>,<SiAndroidstudio></SiAndroidstudio>],
		image: plant_watering,
		github: "",
		youtube: "",
		imageStyle: { background: `no-repeat center/cover url(${plant_watering})` },
	},
	{
		title: "Trip tracker",
		year: 2019,
		description:
			"I have worked on this app with my team during the first year of my bachelor. it's an android app that lets you document trip by writing memories, uploading images and videos.",
		technologies: [<SiAndroidstudio></SiAndroidstudio>,<SiJava></SiJava>,<SiGooglemaps></SiGooglemaps>],
		image: trip_tracker,
		github: "",
		youtube: "",
		imageStyle: {
			background: `no-repeat center/100% url(${trip_tracker}), linear-gradient(0deg, rgba(7,94,149,1) 30%, rgba(2,34,41,1) 100%)`,
		},
	},
];
