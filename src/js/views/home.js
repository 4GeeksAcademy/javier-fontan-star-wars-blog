import React, { useContext } from "react";
import "../../styles/home.css";
import { PeopleCard } from "../component/peopleCard.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context)

	return (
		<div className="text-center mt-5">
			<div className="row">
				{store.people?.map(el =>
					<PeopleCard
						key={el.uid}
						img={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`}
						name={el.name}
						uid={el.uid}
					/>)}
			</div>
		</div>
	);
}
