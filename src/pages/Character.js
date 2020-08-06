import getData from '../utils/getData'
import getHash from '../utils/getHash';
const Character = async () => {
    const id = await getHash()
    const data = await getData(id)
    const view = `
        <div class="Characters-inner" >
            <article class="Characters-card">
                <img src="${data.image}" alt="${data.name}">
                <h2> ${data.name} </h2>
            </article>
            <article class="Characters-card">
                <h3> Episodes: <span>${data.episode.length}</span> </h3>
                <h3> Status:   <span>${data.status}</span> </h3>
                <h3> Species:  <span>${data.species}</span> </h3>
                <h3> Gender:   <span>${data.gender}</span> </h3>
                <h3> Origin:   <span>${data.origin.name}</span> </h3>
                <h3> Last Location: <span>${data.location.name}</span> </h3>
            </article>

        </div>
    `;
    return view;
};

export default Character;