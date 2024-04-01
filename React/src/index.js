import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

// import First from './components/First'
// import WelcomeMessage from './components/Welcome';
// import { BoaNoite, BomDia } from './components/mult';
// import multiplas from './components/mult';
// import Saudacoes from './components/Salutions';
// import Pai from './components/Pai'
import Pai from './components/Pai2'
import Filho from './components/Filho';

const root = createRoot(document.getElementById('root'));

root.render(
    <div>
        <Pai nome="Fulano" sobrenome="Opa">
            <Filho nome="Cléber" />
            <Filho nome="Marcos" />
            <Filho nome="Zé" />
        </Pai>
    </div>
);
