import styled from "styled-components";
import PageTemplate from "../../components/PageTemplate";
import MainTitle from "../../components/MainTitle";
import UnderLine from "../../components/Underline";
import ItemProj from "../../components/ItemProj";
import PlugSpotImg from "../../img/PlugSpot.jpg";
import AODImg from "../../img/AOD.jpg";
import LuxtraderImg from "../../img/Luxtrader.jpg";
import TodoListImg from "../../img/TODOLIST.jpg";


const Wrapper = styled.div`
margin: 0px 0px 50px 84px;
font-size: 14px;
`

const projects = [
	{id:1, src: PlugSpotImg, title:"PlugSpot", text:"Application for finding charging places", gitlink:"https://github.com/TimTimi4/PlugSpot", route: `/projects/plugspot`},
	{id:2, src: TodoListImg, title:"TodoList", text:"To do list app", gitlink:"https://github.com/TimTimi4/TODOLIST", route: `/projects/todolist`},
	{id:3, src: LuxtraderImg, title:"Luxtrader", text:"Antique auction", gitlink:"https://github.com/TimTimi4/Luxtrader", route: `/projects/luxtrader`},
	{id:4, src:AODImg, title:"AOD", text:"Antique bike shop", gitlink:"https://github.com/TimTimi4/AOD", route: `/projects/aod`}
]


const Projects = () => {
	return(
		<PageTemplate>
			<Wrapper>
				<MainTitle>My Projects</MainTitle>
				<UnderLine/>
				{
				projects.map(item =>(
					<ItemProj key={item.id} src={item.src} title={item.title} text={item.text} gitlink={item.gitlink} link={item.route}></ItemProj>
				))
				}
			</Wrapper>
		</PageTemplate>
	);
}

export default Projects


