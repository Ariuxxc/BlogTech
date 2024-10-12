"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from '../fonts/components/navbar';
import Modal from '../components/modal';
import React, { useState } from 'react';
import axios from 'axios';
import { Head } from 'next/document';
import icon from '../assets/icon.ico';
import Image from 'next/image';

// Interface pour les articles
interface Article {
    title?: string | null | undefined
    content: string;
    author: string;
}
axios.defaults.baseURL = 'http://localhost:7000';

function Admin() {
    const [Article, setArticle] = useState<Article>({
        title: "",
        content: "",
        author: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setArticle({
            ...Article,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {

      e.preventDefault();
    
      try {
        // Logique de soumission, appel à une API par exemple
        await axios.post("/admin/add-article", Article);
        console.log("Article soumis avec succès");
      } catch (error) {
        console.error("Erreur lors de la soumission de l'article", error);
      }
    };
    function alert() {
        return (
            <Modal />
        )
    }
function NavBarAdmin() {
    return (
        <nav className="bg-blue-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Image 
          src={icon}
          alt="Logo"
          width={50}
          className='rounded-full'
          
          />
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-300 hover:text-white hover:transition-all">Users</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Stats</a></li>
          </ul>
        </div>
      </nav>
    )
}
function ModalAdmin() {
    return (
<form onSubmit={handleSubmit}>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Détails de l'article</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Article à ajouter</p><br />
                            
                            <div className="form-floating mb-3 col-8">
                              
                                <input type="text" className="form-control" id="floatingInput" placeholder="Titre de l'article" name="title"onChange={handleChange} required />

                                <label htmlFor="floatingInput">Titre de l'article</label>

                                <br />
                            </div>
                            <div className="form-floating mb-3 col-8">
                              <input type="text" className="form-control" id="floatingInput" placeholder="Contenu de l'article"  name="content" onChange={handleChange}  value={Article.content} required />
                              <label htmlFor='floatingInput'>Contenu de l'article</label>
                            </div><br></br>
                            <div className="form-floating mb-3 col-8">
                              <input type="text" className="form-control" id="floatingInput" placeholder="Auteur"  name="author" onChange={handleChange} required value={Article.author} />
                              <label htmlFor='floatingInput'>l'auteur</label>
                            </div>


                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Abandonner</button>
                            <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={alert}>Enregistrer</button>
                            
                        </div>
                       
                    </div>
                </div>
            </div>
             </form>
    )
}
    return (
        <>

    <head>
    <title>Panneau d'administration</title>
    </head>

           <NavBarAdmin />


            <center><h1>Bienvenue à l'administration</h1></center><br />

            <center>
                <button className="btn btn-primary" aria-label='Add' aria-placeholder='Add' data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Ajouter un post
                </button>
            </center>
            <ModalAdmin />

        </>
    );
}

export default Admin;
