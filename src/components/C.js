import {AppContext} from '../App';

export default function C() {

	return (
		<AppContext.Consumer>
			{
				({fn, x}) => {


					return <div>


						<button onClick={fn}>{x}</button>

					</div>;
				}
			}
		</AppContext.Consumer>
	)
		;
}
