import './Product.css';

export default function Product({title, description}) {

	return (
		<div className="card">
			<h2>{title}</h2>
			<p>{description}</p>
		</div>

	);
}
