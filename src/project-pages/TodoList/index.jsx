import styled from "styled-components";
import { useParams } from "react-router";

const TodoList = (props) => {
	const { id } = useParams()
	return(
		<div>
      <h3>Тут Ту ду лист ID: {id}</h3>
    </div>
	);
}

export default TodoList
