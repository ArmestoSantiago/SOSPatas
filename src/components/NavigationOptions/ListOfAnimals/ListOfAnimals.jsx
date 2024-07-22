import './ListOfAnimals.css';
import { useContext } from 'react';
import { AnimalContext } from '../../../context/AnimalsContext';


const imgSource = 'animalsImg/';

export function AnimalList () {
    const { lostAnimalsList } = useContext(AnimalContext);


    return (
        <section className='animal-list__container'>
            {
                lostAnimalsList.map((animal, index) => {
                    return (
                        <article key={animal.key}>
                            <img src={`${imgSource}${animal.animalType}.jpg`}></img>
                            <h2>{animal.animalType}</h2>
                            <span>{animal.condition}</span>
                            <span>{animal.address}</span>
                            <span>{animal.description}</span>
                        </article>
                    );
                })
            }

        </section>
    );
}