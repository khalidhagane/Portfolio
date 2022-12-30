
**database:** PostgreSql


## API Reference

### Autentication

| Method | Api     | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `/api/Auth/login` | **Register**|
| `POST` | `/api/Auth/register` | **Login**|
| `GET` | `/api/Auth/confirm/:token` | **confirmEmail**|
| `POST` | `/api/Auth/forgetpassword` | **forgetpassword**|
| `POST` | `/api/Auth/resetpassword/:token` | **resetpassword**|    