export const MAP_OPTIONS = (cursor = false) => {
  return {
    disableDefaultUI: true,
    fullscreenOption: false,
    maxZoom: 17,
    minZoom: 10,
    zoom: 14,
    draggableCursor: cursor ? 'crosshair' : ''
  };
};
