import './App.css'
import Button from "./Components/Button/Button.jsx";
import Product from "./Components/Product/Product.jsx";
import Tile from "./Components/Tile/Tile.jsx";
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';

/*

            // Stap 1 - Buttons
            // Plaats drie buttons op de pagina, omwikkeld door een nav-element.
            // De buttons: to the collection, shop all bags, pre-orders.
            // Als je op de buttons klikt, moet de buttontekst in de console verschijnen.
            // De laatste van de drie is disabled.


function App() {
    return (
        <div>
            <h1>Handbags & Purses</h1>





            <nav>
                <button onClick={() => console.log('to the collection')}>to the collection</button>
                <button onClick={() => console.log('shop all bags')}>shop all bags</button>
                <button onClick={() => console.log('pre-orders')} disabled>pre-orders</button>
            </nav>

        </div>
*/
/*

          // Stap 2 - Buttons
          // Maak nu een custom Button-component die alle benodigde data kan ontvangen,
          // zodat hij voor alle drie de huidige uitvoeringen te gebruiken is.
          //
          // Vervang de huidige buttons door jouw custom component
          // en geef de juiste informatie mee.

function App() {
    return (
        <div>
            <h1>Handbags & Purses</h1>

            <div>
                <nav>
                    <Button
                        text='to the collection'
                        onClick={() => console.log('to the collection')}
                    />

                    <Button
                        text='shop all bags'
                        onClick={() => console.log('shop all bags')}
                    />

                    <Button
                        text='pre-orders'
                        onClick={() => console.log('pre-orders')}
                        disabled

                    />
                </nav>



            </div>
        </div>

*/

// Stap 1 - Producten
// Maak een omwikkelende main-tag voor de producten.

// Stop daar vier article-elementen in zoals op bovenstaande afbeelding,
// met:
// - Een span voor het rode label
// - De afbeelding van de tassen
// - Een p voor de naam van de tas
// - Een h4 voor de prijs

function App() {
    return (
        <div>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    text='to the collection'
                    onClick={() => console.log('to the collection')}
                />

                <Button
                    text='shop all bags'
                    onClick={() => console.log('shop all bags')}
                />

                <Button
                    text='pre-orders'
                    onClick={() => console.log('pre-orders')}
                    disabled

                />
            </nav>
            {/*Producten - Stap 1
            <main>
                <article>
                    <span>rood label</span>
                    <img .="" alt=""/>
                    <p>naam tas</p>
                    <h4>prijs</h4>
                </article>

                <article>
                    <span>rood label</span>
                    <img .="" alt=""/>
                    <p>naam tas</p>
                    <h4>prijs</h4>
                </article>

                <article>
                    <span>rood label</span>
                    <img .="" alt=""/>
                    <p>naam tas</p>
                    <h4>prijs</h4>
                </article>

                <article>
                    <span>rood label</span>
                    <img .="" alt=""/>
                    <p>naam tas</p>
                    <h4>prijs</h4>
                </article>
            </main>*/}
            {/*Producten - Stap 2
            Maak nu een custom Product-component die alle benodigde data kan ontvangen,
            zodat hij voor alle vier de huidige uitvoeringen te gebruiken is.

            Vervang dan de huidige product-blokken door jouw custom component en geef je juiste informatie mee.*/}
            <main>
                <Product
                    label='Best Seller'
                    img={bag_1}
                    name='The handy bag'
                    price='€400'
                />

                <Product
                    label='Best Seller'
                    img={bag_2}
                    name='The stylish bag'
                    price='€250'
                />

                <Product
                    label='New Collection'
                    img={bag_3}
                    name='The simple bag'
                    price='€300'
                />


                <Product
                    label='New Collection'
                    img={bag_4}
                    name='The trendy bag'
                    price='€150'
                />
            </main>

            {/*Tegels - Stap 1
            Maak een omwikkelende footer-tag voor de tegels.
            Maak vier section-elementen met daarin:
            - Een afbeelding van het merk of de designers (als er geen tekst in staat)
            - Een h2-element voor de titel en p-elementen voor de paragrafen (als er wel tekst in staat)*/}
            {/*<footer>
                <section>
                    <img src="" alt=""/>
                    <h2>Title</h2>
                    <p></p>
                </section>

                <section>
                    <img src="" alt=""/>
                    <h2>Title</h2>
                    <p></p>
                </section>

                <section>
                    <img src="" alt=""/>
                    <h2>Title</h2>
                    <p></p>
                </section>

                <section>
                    <img src="" alt=""/>
                    <h2>Title</h2>
                    <p></p>
                </section>
            </footer>*/}
            {/*Tegels - deel 2
            zie src/assets/Components/Tile*/}
            <footer>
                <Tile
                    title='The Brand'
                    paragraphs={[
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
                    ]}
                />

                <Tile
                    img={brand}
                    title=''
                    paragraphs={[]}
                />

                <Tile
                    img={our_story}
                    title=''
                    paragraphs={[]}
                />

                <Tile
                    title='HDP Meiden!'
                    paragraphs={[
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
                    ]}
                />

            </footer>
        </div>
    )
}

export default App
