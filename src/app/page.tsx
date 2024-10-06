'use client'
import Image from 'next/image';
import type { Metadata } from 'next'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import pdp from './assets/kyo.jpeg';

import Navbar from './fonts/components/navbar';
import icon from "./assets/icon.ico";
import load from './assets/load.gif';
export default function Home() {
  const [title, setTitle] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [viewDes, setViewDes] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false);

  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:7000/api/blog');
        const data = await response.json();
        setTitle(data.title);
        setDescription(data.description);
        setViewDes(data.totalDescription);
        setIsLoading(false); // Les données ont été récupérées
      } catch (error) {
        console.error("Erreur lors de la récupération des données : ", error);
        setIsLoading(false); // Arrêter l'indicateur de chargement même en cas d'erreur
      }
    }
    fetchData();
  }, []);

  function toggleView() {
    setShowFullDescription(prevState => !prevState);
  }

  return (
    <>
      <Navbar />
      <div className="container text-center" style={{ color: 'blue' }}>
        <h1>Blog Flow</h1>

        {/* Indicateur de chargement */}
        {isLoading ? (
          <Image src={load} alt="Chargement..." width={50} height={50} />
        ) : (
          <div className="card mt-5" style={{ maxWidth: '600px', marginRight: '400px' }} >
            <div className="card-body">
              <h3 className="card-title text-black">{title}</h3>
              <p>{showFullDescription ? viewDes : description}</p>
              
              {/* Bouton "voir plus" */}
              <span 
                onClick={toggleView} 
                style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
                {showFullDescription ? 'Voir moins' : 'Voir plus'}
              </span>
              <div className="card-footer">
                <Image src={pdp} alt="Profil" width={80} className="rounded-full" />
                <p>Ecrit par Christian ferreol</p> 
              </div>
            </div>

          </div>
        )}
      </div>
    </>
  );
}
