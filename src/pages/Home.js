import getData from '../utils/getData'

const Home = async () => {
    const character = await getData();
    const view = `
        <div class="Characters">
            ${character.results.map(characterr => `
            <article class="Characters-item">
                <a href="#/${characterr.id}/">
                    <img src="${characterr.image}" alt="name">
                    <h2>${characterr.name}</h2>
                </a>
            </article>
            `).join('')}
        </div>
    `;
    return view;
}
export default Home;