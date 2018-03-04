import * as THREE from 'three';

//sphere vector
export function getSphereVector(lat, lon, radius) {
        let phi = (90 - lat) * (Math.PI / 180),
        theta = (lon + 180) * (Math.PI / 180),
        x = -(radius * Math.sin(phi) * Math.cos(theta)),
        z = radius * Math.sin(phi) * Math.sin(theta),
        y = radius * Math.cos(phi);
  
        return new THREE.Vector3(x, y, z);
}

//random integer generator from range
export function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
}