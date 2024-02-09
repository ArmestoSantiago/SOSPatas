import './FeaturesButton.css';

export function FeaturesButtons () {
  return (
    <div className='buttons-container'>
      <RedirectLocationButton />
      <MainButton />
    </div>
  );
}

export function RedirectLocationButton () {
  return (
    <button className='features__button redirect-location__button ' />
  );
}

export function MainButton () {
  return (
    <button className='features__button main__button' />
  );
}
