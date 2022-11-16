# Turkcell Geleceği Yazanlar 401 E-Ticaret Projesi
![Geleceği Yazanlar Logo](https://gelecegiyazanlar.turkcell.com.tr/themes/custom/gyz/logo.svg)

## Backend Ayağa Kaldırma

- Mongodb ve Redis'i yükleyebilmek için backend içerisindeki docker-compose dosyası çalıştırılmalıdır. ( Bilgisayarınızda docker ve compose yüklü olmalıdır. [Docker indirmek ve bilgi almak için tıklayın](https://docs.docker.com/get-docker/ "Docker Web Site"))
 Bunun için backend dizinine gidilerek docker-compose up komutu çalıştırışlır.

-  `cd backend`
- `docker-compose up -d`
 


- backend dizininde .env dosyası oluşturulur ve içerisine gerekli bilgiler girilir. (Örnek aşağıda yer almaktadır.)
 
 
```
MONGO_URI=mongodb://localhost:27017
JWT_SECRET=sdgkMKEVlm3v23kl_n423vGG3b_TVnm234xnv23x
JWT_REFRESH_SECRET=rerv1jv15v1CVBnasd23jnv13123nvrqwr23
```

- Mongodb compass uygulamasında Yeni bir db oluşturulur. ([MongoDb Compass İndirmek için tıklayın](https://studio3t.com/download/ "İndirmek için tıklayın"))

- mongodb://localhost:27017 adresine bağlantı kurulur.
- Create Database diyerek "test" isimli bir database oluşturulur ve bir collection girilir. Ardından sıra ile diğerleride eklenir.

<img width="1544" alt="Ekran Resmi 2022-11-17 01 52 39" src="https://user-images.githubusercontent.com/88403704/202311785-1623e38c-9b3d-4306-9313-2f7576ee867d.png">

- Bu işlemin ardından "Add Data -> Import File" diyerek backend dizininde yer alan assets klasöründeki json dosyalarını ilgili collectionlara eklenir.

<img width="1544" alt="Ekran Resmi 2022-11-17 01 54 35" src="https://user-images.githubusercontent.com/88403704/202312099-535b8142-fbbb-4597-b34f-5fb1dd4163a7.png">

- backend dizininde `yarn dev` komutu çalıştırarak backend ayağa kaldırılır.
<img width="652" alt="Ekran Resmi 2022-11-17 01 57 07" src="https://user-images.githubusercontent.com/88403704/202312661-914784e9-5939-4143-bf52-12eb07ca4646.png">

- http://localhost:4000/ adresinde istek atarak backend'in ayakta olduğunu doğrulayabilirsiniz.

## Frontend Ayağa Kaldırma

- client dizinine giderek `yarn start` komutu ile react projesi ayağa kaldırılır.
