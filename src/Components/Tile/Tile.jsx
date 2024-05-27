/* Tegels - stap 2

Maak nu een custom Tile-component
die alle benodigde data kan ontvangen.
Als er een afbeelding wordt meegegeven gedraagt hij zich als een foto-tegel,
maar zonder afbeelding is het een tekst-tegel.

Houd er rekening mee dat je van tevoren ook
niet weet hoeveel losse paragrafen er in een Tile komen te staan.*/

function Tile ({ img, title, paragraphs }) {
    return (
        <section>
            {img ? <img src={img} alt=""/> : null}
            <h2>{title}</h2>
            {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </section>
    );
}

export default Tile;