export const SERVER_API = "http://127.0.0.1:8000/";

export const RUTAS_API = {
  USERS: {
    LOGIN: "users/login/",
    LOGOUT: "users/logout/",
    LISTING: "users/listing/",
    RETRIEVE: "users/retrieve/",
  },
  EMPLOYEE: {
    LISTING: "employee/listing/",
    CREATE: "employee/create/",
    RETRIEVE: "employee/retrieve/",
  },
  OTHER: {
    ANTIGUEDAD: "other/antique/",
    NIVEL_ESCOLAR: "other/school/",
    PROCEDENCIA: "other/procedence/",
    TURNO: "/other/turn/",
    PASE: "/other/pass/",
  },
  organization: {
    PROYECTO: "organization/projects/",
    AREA: "organization/areadpto/",
    CARGO: "organization/positions/",
    ESPECIALIDAD: "organization/specialties/",
  },
};
