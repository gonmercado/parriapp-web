import { useState, useEffect } from 'react';
import { getAxiosInstance } from '../../../../config/axiosInstance';

const subCategoryHC = [
  {
    "id": 56,
    "nombre": "Bondiola cocida",
    "foto_sm_url": "http://staging.parriapp.com//uploads/subcategoria_articulos/foto/56/cuadrado_fill_400_bondiola.gif",
    "foto_lg_url": "http://staging.parriapp.com//uploads/subcategoria_articulos/foto/56/cuadrado_fill_800_bondiola.gif",
    "subtitulo": "$225,00 el kilo",
    "articulos": [
      {
        "id": 424,
        "nombre": "Bondiola cocida ",
        "precio": 202.5,
        "tamaño": 0.9,
        "unidad": "kg",
        "stock": 21,
        "categoria_id": 1,
        "subcategoria_id": 56,
        "alcohol": false,
        "tamanio": 0.9
      }
    ]
  },
  {
    "id": 3,
    "nombre": "Entraña ",
    "foto_sm_url": "http://staging.parriapp.com//uploads/subcategoria_articulos/foto/3/cuadrado_fill_400_117-300x251.jpg",
    "foto_lg_url": "http://staging.parriapp.com//uploads/subcategoria_articulos/foto/3/cuadrado_fill_800_117-300x251.jpg",
    "subtitulo": "$183,00 el kilo",
    "articulos": [
      {
        "id": 101,
        "nombre": "Pack Entraña",
        "precio": 311.1,
        "tamaño": 1.7,
        "unidad": "kg",
        "stock": 1,
        "categoria_id": 1,
        "subcategoria_id": 3,
        "alcohol": false,
        "tamanio": 1.7
      },
      {
        "id": 159,
        "nombre": "Pack Entraña",
        "precio": 329.4,
        "tamaño": 1.8,
        "unidad": "kg",
        "stock": 1,
        "categoria_id": 1,
        "subcategoria_id": 3,
        "alcohol": false,
        "tamanio": 1.8
      },
      {
        "id": 153,
        "nombre": "Pack Entraña",
        "precio": 347.7,
        "tamaño": 1.9,
        "unidad": "kg",
        "stock": 1,
        "categoria_id": 1,
        "subcategoria_id": 3,
        "alcohol": false,
        "tamanio": 1.9
      },
      {
        "id": 180,
        "nombre": "Pack Entraña",
        "precio": 356.85,
        "tamaño": 1.95,
        "unidad": "kg",
        "stock": 1,
        "categoria_id": 1,
        "subcategoria_id": 3,
        "alcohol": false,
        "tamanio": 1.95
      },
      {
        "id": 246,
        "nombre": "Pack Entraña",
        "precio": 366,
        "tamaño": 2,
        "unidad": "kg",
        "stock": 1,
        "categoria_id": 1,
        "subcategoria_id": 3,
        "alcohol": false,
        "tamanio": 2
      },
      {
        "id": 152,
        "nombre": "Pack Entraña",
        "precio": 384.3,
        "tamaño": 2.1,
        "unidad": "kg",
        "stock": 2,
        "categoria_id": 1,
        "subcategoria_id": 3,
        "alcohol": false,
        "tamanio": 2.1
      },
      {
        "id": 248,
        "nombre": "Pack Entraña",
        "precio": 402.6,
        "tamaño": 2.2,
        "unidad": "kg",
        "stock": 1,
        "categoria_id": 1,
        "subcategoria_id": 3,
        "alcohol": false,
        "tamanio": 2.2
      },
      {
        "id": 247,
        "nombre": "Pack Entraña",
        "precio": 411.75,
        "tamaño": 2.25,
        "unidad": "kg",
        "stock": 1,
        "categoria_id": 1,
        "subcategoria_id": 3,
        "alcohol": false,
        "tamanio": 2.25
      },
      {
        "id": 317,
        "nombre": "Pack Entraña",
        "precio": 466.65,
        "tamaño": 2.55,
        "unidad": "kg",
        "stock": 1,
        "categoria_id": 1,
        "subcategoria_id": 3,
        "alcohol": false,
        "tamanio": 2.55
      }
    ]
  },
  {
    "id": 11,
    "nombre": "Picana ",
    "foto_sm_url": "http://staging.parriapp.com//uploads/subcategoria_articulos/foto/11/cuadrado_fill_400_punta-trasera.jpeg",
    "foto_lg_url": "http://staging.parriapp.com//uploads/subcategoria_articulos/foto/11/cuadrado_fill_800_punta-trasera.jpeg",
    "subtitulo": "$199,00 el kilo",
    "articulos": [
      {
        "id": 267,
        "nombre": "Picana",
        "precio": 228.85,
        "tamaño": 1.15,
        "unidad": "kg",
        "stock": 1,
        "categoria_id": 1,
        "subcategoria_id": 11,
        "alcohol": false,
        "tamanio": 1.15
      },
      {
        "id": 174,
        "nombre": "Picana",
        "precio": 268.65,
        "tamaño": 1.35,
        "unidad": "kg",
        "stock": 1,
        "categoria_id": 1,
        "subcategoria_id": 11,
        "alcohol": false,
        "tamanio": 1.35
      },
      {
        "id": 103,
        "nombre": "Picana",
        "precio": 278.6,
        "tamaño": 1.4,
        "unidad": "kg",
        "stock": 3,
        "categoria_id": 1,
        "subcategoria_id": 11,
        "alcohol": false,
        "tamanio": 1.4
      }
    ]
  }
];

const useSubCategories = (categoryId) => {
  const [ subCategories, setSubCategories ] = useState([]);

  const fetchSubCategories = () => {
    getAxiosInstance().get(`/subcategories?category_id=1`)
      .then(subCategoriesResult => {
        setSubCategories(subCategoryHC);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchSubCategories();
  }, [ categoryId ]);

  return subCategories;
};

export default useSubCategories;
