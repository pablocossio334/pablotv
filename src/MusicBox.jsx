import React, { useState, useEffect } from 'react';

const MusicBox = ({canal}) => {
    useEffect(() => {
        
        const playerInstance = window.jwplayer('player');
        playerInstance.setup({
            file: canal.direccion,
            autostart: true,
            image: canal.imagen,
            height: '100%', // Altura del reproductor
            width: '100%', // Ancho del reproductor
            stretching: 'exactfit',
        });
    }, [canal]);

    return (<>
    <h2>canal seleccionado {canal.nombre}</h2>
     <div id="player" style={{ height: '360px', width: '640px' }}></div> 
    </>
       // Estilos en línea para el contenedor del reproductor
    );
};

export default MusicBox;
