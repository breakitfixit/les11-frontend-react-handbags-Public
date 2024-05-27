function Product({ label, img, name, price }) {
    return (
        <article>
            <span>{label}</span>
            <img src={img} alt={name} />
            <p>{name}</p>
            <h4>{price}</h4>
        </article>
    );
}

export default Product;