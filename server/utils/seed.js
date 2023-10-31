import { User } from '../models/schema'

const users = [
    {
        "id": 1,
        "firstname": "Biruk",
        "lastname": "Aklilu",
        "gender": "female",
        "height": "51",
        "weight": "40",
        "bodyType": "body type 2",
        "religion": "Itaque sed aperiam e",
        "email": "cuzozijujy@mailinator.com",
        "birthday": "1976-01-29",
        "username": "yerosen",
        "bio": "Mollit blanditiis ar",
        "password": "password",
        "login_status": true,
        "createdAt": "2022-04-17T08:05:56.000Z",
        "updatedAt": "2022-04-20T14:11:28.000Z"
    },
    {
        "id": 2,
        "firstname": "Abebe",
        "lastname": "Lakew",
        "gender": "female",
        "height": "51",
        "weight": "40",
        "bodyType": "body type 2",
        "religion": "Itaque sed aperiam e",
        "email": "cuzozijujy@mailinator.com",
        "birthday": "1976-01-29",
        "username": "muluken",
        "bio": "Mollit blanditiis ar",
        "password": "password",
        "login_status": true,
        "createdAt": "2022-04-17T08:05:56.000Z",
        "updatedAt": "2022-04-20T14:15:26.000Z"
    },
    {
        "id": 3,
        "firstname": "Setuzhu Proto",
        "lastname": "Aklilu",
        "gender": "female",
        "height": "51",
        "weight": "40",
        "bodyType": "body type 2",
        "religion": "Itaque sed aperiam e",
        "email": "cuzozijujy@mailinator.com",
        "birthday": "1976-01-29",
        "username": "setuzu",
        "bio": "Mollit blanditiis ar",
        "password": "password",
        "login_status": true,
        "createdAt": "2022-04-17T08:05:56.000Z",
        "updatedAt": "2022-04-20T14:11:28.000Z"
    },
    {
        "id": 4,
        "firstname": "Amelework",
        "lastname": "Lakew",
        "gender": "female",
        "height": "51",
        "weight": "40",
        "bodyType": "body type 2",
        "religion": "Itaque sed aperiam e",
        "email": "cuzozijujy@mailinator.com",
        "birthday": "1976-01-29",
        "username": "amele",
        "bio": "Mollit blanditiis ar",
        "password": "password",
        "login_status": true,
        "createdAt": "2022-04-17T08:05:56.000Z",
        "updatedAt": "2022-04-20T14:15:26.000Z"
    },
    {
        "id": 5,
        "firstname": "Abeba",
        "lastname": "Aklilu",
        "gender": "female",
        "height": "51",
        "weight": "40",
        "bodyType": "body type 2",
        "religion": "Itaque sed aperiam e",
        "email": "cuzozijujy@mailinator.com",
        "birthday": "1976-01-29",
        "username": "abeba",
        "bio": "Mollit blanditiis ar",
        "password": "password",
        "login_status": true,
        "createdAt": "2022-04-17T08:05:56.000Z",
        "updatedAt": "2022-04-20T14:11:28.000Z"
    },
    {
        "id": 6,
        "firstname": "Sheleme",
        "lastname": "Lakew",
        "gender": "female",
        "height": "51",
        "weight": "40",
        "bodyType": "body type 2",
        "religion": "Itaque sed aperiam e",
        "email": "cuzozijujy@mailinator.com",
        "birthday": "1976-01-29",
        "username": "sheleme",
        "bio": "Mollit blanditiis ar",
        "password": "password",
        "login_status": true,
        "createdAt": "2022-04-17T08:05:56.000Z",
        "updatedAt": "2022-04-20T14:15:26.000Z"
    },
    {
        "id": 7,
        "firstname": "Zinahbizu",
        "lastname": "Aklilu",
        "gender": "female",
        "height": "51",
        "weight": "40",
        "bodyType": "body type 2",
        "religion": "Itaque sed aperiam e",
        "email": "cuzozijujy@mailinator.com",
        "birthday": "1976-01-29",
        "username": "zinachew",
        "bio": "Mollit blanditiis ar",
        "password": "password",
        "login_status": true,
        "createdAt": "2022-04-17T08:05:56.000Z",
        "updatedAt": "2022-04-20T14:11:28.000Z"
    },
    {
        "id": 8,
        "firstname": "Bezawit",
        "lastname": "Lakew",
        "gender": "female",
        "height": "51",
        "weight": "40",
        "bodyType": "body type 2",
        "religion": "Itaque sed aperiam e",
        "email": "cuzozijujy@mailinator.com",
        "birthday": "1976-01-29",
        "username": "bezuka",
        "bio": "Mollit blanditiis ar",
        "password": "password",
        "login_status": true,
        "createdAt": "2022-04-17T08:05:56.000Z",
        "updatedAt": "2022-04-20T14:15:26.000Z"
    },
    {
        "id": 9,
        "firstname": "Biruktawit",
        "lastname": "Aklilu",
        "gender": "female",
        "height": "51",
        "weight": "40",
        "bodyType": "body type 2",
        "religion": "Itaque sed aperiam e",
        "email": "cuzozijujy@mailinator.com",
        "birthday": "1976-01-29",
        "username": "birukti",
        "bio": "Mollit blanditiis ar",
        "password": "password",
        "login_status": true,
        "createdAt": "2022-04-17T08:05:56.000Z",
        "updatedAt": "2022-04-20T14:11:28.000Z"
    },
    {
        "id": 10,
        "firstname": "Alemnesh",
        "lastname": "Lakew",
        "gender": "female",
        "height": "51",
        "weight": "40",
        "bodyType": "body type 2",
        "religion": "Itaque sed aperiam e",
        "email": "cuzozijujy@mailinator.com",
        "birthday": "1976-01-29",
        "username": "alemeye",
        "bio": "Mollit blanditiis ar",
        "password": "password",
        "login_status": true,
        "createdAt": "2022-04-17T08:05:56.000Z",
        "updatedAt": "2022-04-20T14:15:26.000Z"
    }
]

users.forEach(async(user) => {
    await User.create(user)
});