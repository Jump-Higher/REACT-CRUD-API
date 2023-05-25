# REACT CRUD API

## Tools installed & setup List Article

    Todo:
    1.  npm install axios bootstrap react-router-dom
    2.  CDN FontAwesome: dipasang pada index.html
        link docs : https://cdnjs.com/libraries/font-awesome/5.14.0
    3.  main.jsx
        - import dan pasang BrowserRouter from react-router-dom
    4.  component/Button/index.jsx
        - rafce
        - setup button
    5.  component/IconPencil/index.jsx
        - rafce
        - setup icon
    6.  component/IconTrash/index.jsx
        - rafce
        - setup icon
    7.  component/index.jsx
        - import Button, IconPencil,IconTrash
        - Export Button, IconPencil,IconTrash
    8.  App.jsx
        - buat table dengan bootstrap
        - import dan pasang Button
        - import dan pasang IconPencil
        - import dan pasang IconTrash
    9.  pengujian pada browser:
        - pada terminal : npm run dev
        - http://127.0.0.1:5173/

## Form Add Article

    Todo:
    1.  App.jsx
        - import dan pasang Routes,Route
        - import dan pasang ListArticle , ListArticle
    2.  crud/ListArticle/index.jsx
        - rafce
        - pindahkan list article pada App.jsx kesini
    3.  crud/AddArticle/index.jsx
        - rafce
        - form dari bootstrap
    4.  crud/index.jsx
        - import dan export ListArticle , AddArticle
    5.  components/Gap/index.jsx
        - digunakan untuk mengatur posisi width dan height
    6.  components/index.jsx
        - import dan export Gap
    7.  pengujian pada browser:
        - pada terminal : npm run dev
        - http://127.0.0.1:5173/

## Link to Form Article

    Todo:
    1.  crud/ListArticle/index.jsx
        - to menuju ke form article to='/add-article'
    2.  crud/AddArticle/index.jsx
        - to menuju kehalaman list article to='/'
    3.  pengujian pada browser:
        - pada terminal : npm run dev
        - http://127.0.0.1:5173/
        - klik button add article
        - pada halaman form artilce klik back

## Setup Proxy menggunakan axios instance

    Todo:
    1.  src/api/api_instance.jsx
        - setup proxy
    2.  crud/ListArticle/index.jsx
        - import dan pasang instance menggantikan axios
        - rubah pemanggilan enpoint
    3.  components/iconTrash/index.jsx
        - modify code
    4.  components/iconPencil/index.jsx
        - modify code
    5.  pengujian pada browser:
        - pada terminal : npm run dev
        - http://127.0.0.1:5173/
