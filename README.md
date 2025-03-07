# Documentación de la API

## Descripción general

Esta aplicación construida con Next js, Typescript y MySQL tiene como objetivo el manejo de empleados del Gobierno de la Ciudad.
Permite al usuario crear empleados mediante un formulario, tambien incluye un Dashboard donde podran visualizarlos, editarlos y eliminarlos.

---

### Instalación y ejecución

#### Clona el repositorio

```bash
git clone https://github.com/TomasPerez1/GOTIPM
```

#### Instala las dependencias

```bash
npm install
```

#### Configura la base de datos en .env

(debe ser un DB de MySQL)

```env
DATABASE_URL="mysql://usuario:contraseña@localhost:3306/nombre_de_la_base"
```

#### Ejecuta las migraciones de Prisma:

```bash
npx prisma migrate dev --name init
```

#### Inicia el servidor:

```bash
npm run dev
```

---

### Modelos de la base de datos

#### Employee (Empleado)

```prisma
model Employee {
  dni         Int      @id @unique
  fullName    String
  dateOfBirth DateTime
  description String
  roleId      Int
  Role        Role     @relation(fields: [roleId], references: [id])
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

#### Role (Rol)

```prisma
model Role {
  id        Int        @id @default(autoincrement())
  value     String     @unique
  name      String
  employees Employee[]
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
}
```

---

## Endpoints

## -- Empleados --

### Obtener empleados

**Descripción:** Obten un array de todos los empleados.

- **Método:** `GET`
- **Ruta:** `/api/employees/get`


#### Respuesta exitosa (retorna un array con todos los empleados)

```json
[
  {
    "dni": 12345678,
    "fullName": "Juan Pérez",
    "dateOfBirth": "1990-01-01T00:00:00.000Z",
    "description": "Empleado de marketing",
    "roleId": 1,
    "createdAt": "2023-10-01T12:00:00.000Z",
    "updatedAt": "2023-10-01T12:00:00.000Z"
  },
  {
    "dni": 43251602,
    "fullName": "Catarina Tomatzuk",
    "dateOfBirth": "1990-01-01T00:00:00.000Z",
    "description": "Es una gran empleada..",
    "roleId": 3,
    "createdAt": "2023-10-01T12:00:00.000Z",
    "updatedAt": "2023-10-01T12:00:00.000Z"
  }
]
```

---

### Crear un nuevo empleado

**Descripción:** Crea un nuevo empleado.

- **Método:** `POST`
- **Ruta:** `/api/employees/create`

#### Cuerpo de la solicitud

```json
{
  "dni": "number",
  "fullName": "string",
  "roleId": "number",
  "dateOfBirth": "date",
  "description": "string"
}
```

#### Respuesta exitosa (retorna el employee creado)

```json
{
  "employee": {
    "dni": 12345678,
    "fullName": "Juan Pérez",
    "dateOfBirth": "1990-01-01T00:00:00.000Z",
    "description": "Empleado de marketing",
    "roleId": 1,
    "createdAt": "2023-10-01T12:00:00.000Z",
    "updatedAt": "2023-10-01T12:00:00.000Z"
  }
}
```

---

### Editar un empleado

**Descripción:** Permite actualizar la información de un empleado utilizando su DNI (PK).

- **Método:** `PUT`
- **Ruta:** `/api/employees/edit`

#### Cuerpo de la solicitud

```json
{
  "dni": "number", //(primary key)
  "newData": { // Propiedades que deseas cambiar
    "description": "Gerente de marketing"
  }
}
```

#### Respuesta exitosa

```json
{
  "updatedEmployee": {
    "dni": 12345678,
    "fullName": "Juan Pérez Gómez",
    "dateOfBirth": "1990-01-01T00:00:00.000Z",
    "description": "Gerente de marketing",
    "roleId": 2,
    "createdAt": "2023-10-01T12:00:00.000Z",
    "updatedAt": "2023-10-02T14:00:00.000Z"
  }
}
```

---

### Eliminar un empleado

**Descripción:** Elimina un empleado de utilizando su DNI (PK).

- **Método:** `DELETE`
- **Ruta:** `/api/employees/delete`

#### Cuerpo de la solicitud:

```json
{
  "dni": "number", //(primary key)
}
```

#### Respuesta exitosa (retorna el employee eliminado)

```json
{
  "message": "Empleado eliminado correctamente",
  "deletedEmployee": {
    "dni": 12345678,
    "fullName": "Juan Pérez",
    "dateOfBirth": "1990-01-01T00:00:00.000Z",
    "description": "Empleado de marketing",
    "roleId": 1,
    "createdAt": "2023-10-01T12:00:00.000Z",
    "updatedAt": "2023-10-01T12:00:00.000Z"
  }
}
```

---

## -- Roles --

### Obtener todos los roles

**Descripción:** Devuelve una lista con todos los roles.

- **Método:** `GET`
- **Ruta:** `/api/roles/get`

#### Respuesta exitosa (Ejemplo)

```json
{
  "roles": [
    {
      "id": 1,
      "value": "admin",
      "name": "Administrador",
      "createdAt": "2023-10-01T12:00:00.000Z",
      "updatedAt": "2023-10-01T12:00:00.000Z"
    },
    {
      "id": 2,
      "value": "user",
      "name": "Usuario",
      "createdAt": "2023-10-01T12:00:00.000Z",
      "updatedAt": "2023-10-01T12:00:00.000Z"
    }
  ]
}
```

---

### Crear todos los roles

**Descripción:** Crea todos los roles necesarios, este es un endpoint que utiliza la aplicacion automaticamente para crear los roles cuando se inicia la aplicación.

- **Método:** `GET`
- **Ruta:** `/api/roles/create`

#### Respuesta exitosa (Ejemplo)

```json
{
  {}
}
```

#### Posibles Errores

- **400 Bad Request:** Si faltan campos obligatorios o los datos son inválidos.
- **500 Internal Server Error:** Si ocurre un error en el servidor.

---

## Dependencias utilizadas

```json
{
  "next": "15.2.1",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "prisma": "^6.4.1",
  "typescript": "^5",
  "tailwindcss": "^4",
  "axios": "^1.8.1",
  "formik": "^2.4.6",
  "luxon": "^3.5.0",
  "sonner": "^2.0.1"
}
```
