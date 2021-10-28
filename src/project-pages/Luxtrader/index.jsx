import styled from "styled-components";
import { useParams } from "react-router";

const Luxtrader = (props) => {
	const { id } = useParams()
	return(
		<div>
      <h3>Тут luxtrader ID: {id}</h3>
    </div>
	);
}

export default Luxtrader
