import PlugSpotImg from "../../img/PlugSpot.jpg";
import AODImg from "../../img/AOD.jpg";
import LuxtraderImg from "../../img/Luxtrader.jpg";
import TodoListImg from "../../img/TODOLIST.jpg";
import Sl1PlugSpot from "../../img/PlugSpot/slide-1.jpg";
import Sl2PlugSpot from "../../img/PlugSpot/slide-2.jpg";
import Sl3PlugSpot from "../../img/PlugSpot/slide-3.jpg";
import Sl4PlugSpot from "../../img/PlugSpot/slide-4.jpg";
import Sl5PlugSpot from "../../img/PlugSpot/slide-5.jpg";
import Sl6PlugSpot from "../../img/PlugSpot/slide-6.jpg";



export const projects = [
	{
	id:"plugspot", 
	src: PlugSpotImg, 
	title:"PlugSpot", 
	text:"Application for finding charging places", 
	gitlink:"https://github.com/TimTimi4/PlugSpot", 
	route: "/projects/plugspot", 
	desc:
	`
	This application is designed to help people find a place where they can charge their phone.
	My task for this project was to mark up the layout given to me by designer. For this project, html was written with BEM methodology by Yandex. Styles were described with scss and compiled by the prepros program.
	`,
	slide_1: Sl1PlugSpot,
	slide_2: Sl2PlugSpot,
	slide_3: Sl3PlugSpot,
	slide_4: Sl4PlugSpot,
	slide_5: Sl5PlugSpot,
	slide_6: Sl6PlugSpot,
	},
	{
	id:"todolist", 
	src: TodoListImg, 
	title:"TodoList", 
	text:"To do list app", 
	gitlink:"https://github.com/TimTimi4/TODOLIST", 
	route: "/projects/todolist", 
	desc:"PlugSpot"
	},
	{
	id:"luxtrader", 
	src: LuxtraderImg, 
	title:"Luxtrader", 
	text:"Antique auction", 
	gitlink:"https://github.com/TimTimi4/Luxtrader", 
	route: "/projects/luxtrader", 
	desc:"PlugSpot"
	},
	{
	id:"aod", 
	src:AODImg, 
	title:"AOD", 
	text:"Antique bike shop", 
	gitlink:"https://github.com/TimTimi4/AOD", 
	route: "/projects/aod", 
	desc:"PlugSpot"
	}
]
