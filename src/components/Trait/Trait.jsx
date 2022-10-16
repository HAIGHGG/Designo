import { TraitWrapper } from './Trait.styles'

function Trait({trait}) {
	return (
		<TraitWrapper>
			<div>
				<img src={trait.image} alt={trait.alt} />
			</div>
			<div>
			<h3>{trait.title}</h3>
			<p>{trait.description}</p>
			</div>
		</TraitWrapper>
	)
}

export default Trait
