'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import pdp from './assets/kyo.jpeg';

import Navbar from './fonts/components/navbar';
import load from './assets/load.gif';
import { useSelectedLayoutSegments } from 'next/navigation';



export default function Home() {
  const [title, setTitle] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [viewDes, setViewDes] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false);
  const [newArticle, setNewArticle] = useState<any[]>([]);

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

  useEffect(() => {
    async function dataArticle() {
      try {
        const DataArticle = await fetch('http://localhost:7000/admin/get-article');
        const arData = await DataArticle.json();
        setNewArticle(arData);
        console.log('Ajouté avec succès');
      } catch (error) {
        console.error("Erreur lors de la récupération des articles : ", error);
      }
    }
    dataArticle();
  }, []);

  function toggleView() {
    setShowFullDescription(prevState => !prevState);
  }

  return (
    <>
      <Navbar /><br></br>
      
        

        {/* Affichage des articles */}
        <div className="container">
          <div className="row">
            {newArticle.map(article => (
              <div className="col-12 col-md-6" key={article.id}>
                <div className="card mb-3 article-card">
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.content}</p>
                    <div className="card-footer">
                    <p className="card-author text-muted">Écrit par : {article.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {newArticle.length === 0 && <p>Aucun article disponible</p>}
        </div>

      
    </>
  );
}
