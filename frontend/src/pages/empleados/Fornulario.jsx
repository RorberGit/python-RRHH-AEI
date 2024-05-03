import { Container, Paper, Box, Stack, Tab, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Formik } from "formik";
import { CampoTexto, AutoCompletar } from "../../components/mui";
import { field_color_piel, field_sexo } from "./resources/campos";
import { useFetch } from "../../hooks/useFetch";

export default function Formulario() {
  const [loading, setLoading] = useState(true);
  const [municipioData, setMunicipioData] = useState(null);

  const [value, setValue] = useState("1");
  //const [data, setData] = useState(null);

  const provincia = useFetch("localidad/provincia/");
  const municipio = useFetch("localidad/municipio/");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  useEffect(() => {
    setMunicipioData(municipio.data);
  }, [municipio.data]);

  const handleChangeTabList = (event, newValue) => {
    setValue(newValue);
  };

  const initialValues = {
    nombre: "",
    provincia: null,
    municipio: null,
  };

  const handleFile = async (event) => {
    event.preventDefault();

    console.info("click en componente file");
  };

  if (loading)
    return (
      <>
        <h1>Cargando...</h1>
      </>
    );
  const handleForm = (value) => console.info(value);

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Stack spacing={2} direction="row">
          <Paper sx={{ p: 2, maxWidth: 200 }}>
            <Stack spacing={2}>
              <Box component="img"></Box>
              <input type="file" onChange={handleFile} />
            </Stack>
          </Paper>
          <Paper sx={{ p: 2 }}>
            <Formik onSubmit={handleForm} initialValues={initialValues}>
              {({
                values,
                touched,
                errors,
                setFieldValue,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <TabContext value={value}>
                    <TabList
                      onChange={handleChangeTabList}
                      aria-label="lab API tabs example"
                      variant="scrollable"
                      scrollButtons="auto"
                    >
                      <Tab label="Datos personales" value="1"></Tab>
                      <Tab label="Dirección particular" value="2"></Tab>
                      <Tab label="Datos laborales" value="3"></Tab>
                      <Tab label="Afiliaciones" value="4"></Tab>
                      <Tab label="Vestimenta de trabajo" value="5"></Tab>
                      <Tab label="Vivienda" value="6"></Tab>
                      <Tab label="Alojamiento" value="7"></Tab>
                    </TabList>
                    {/* //! Datos personales */}
                    <TabPanel value="1">
                      <Box
                        display="grid"
                        gap="15px 10px"
                        m={2}
                        gridTemplateColumns="repeat(12, 1fr)"
                      >
                        <CampoTexto
                          name="nombre"
                          label="Nombre"
                          value={values.nombre}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.nombre}
                          errors={errors.nombre}
                          ncol="4"
                        />
                        <CampoTexto
                          name="apellido_paterno"
                          label="Apellido paterno"
                          value={values.apellido_paterno}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.apellido_paterno}
                          errors={errors.apellido_paterno}
                          ncol="4"
                        />
                        <CampoTexto
                          name="apellido_materno"
                          label="Apellido materno"
                          value={values.apellido_materno}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.apellido_materno}
                          errors={errors.apellido_materno}
                          ncol="4"
                        />
                        <CampoTexto
                          name="ci"
                          label="Número de Identidad"
                          value={values.ci}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.ci}
                          errors={errors.ci}
                          ncol="3"
                        />
                        <AutoCompletar
                          options={field_sexo}
                          label="Sexo"
                          value={values.sexo}
                          onChange={(event, value) =>
                            setFieldValue("sexo", value)
                          }
                          handleBlur={handleBlur}
                          touched={touched.sexo}
                          errors={errors.sexo}
                          ncol="3"
                        />
                        <AutoCompletar
                          options={field_color_piel}
                          label="Color de la Piel"
                          value={values.color_piel}
                          onChange={(event, value) =>
                            setFieldValue("color_piel", value)
                          }
                          handleBlur={handleBlur}
                          touched={touched.color_piel}
                          errors={errors.color_piel}
                          ncol="3"
                        />
                        <CampoTexto
                          name="telefono"
                          label="Teléfono"
                          value={values.telefono}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.telefono}
                          errors={errors.telefono}
                          ncol="3"
                        />
                      </Box>
                    </TabPanel>

                    {/* //! Dirección particular */}
                    <TabPanel value="2">
                      <Box
                        display="grid"
                        gap="15px 10px"
                        m={2}
                        gridTemplateColumns="repeat(12, 1fr)"
                      >
                        <CampoTexto
                          name="no"
                          label="No"
                          value={values.no}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.no}
                          errors={errors.no}
                          ncol="2"
                        />
                        <CampoTexto
                          name="calle"
                          label="Calle"
                          value={values.calle}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.calle}
                          errors={errors.calle}
                          ncol="10"
                        />
                        <CampoTexto
                          name="entre"
                          label="Entre"
                          value={values.apellido_paterno}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.apellido_paterno}
                          errors={errors.apellido_paterno}
                          ncol="6"
                        />
                        <CampoTexto
                          name="y"
                          label="Y"
                          value={values.y}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.y}
                          errors={errors.y}
                          ncol="6"
                        />
                        <CampoTexto
                          name="edif"
                          label="Edificio"
                          value={values.edif}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.edif}
                          errors={errors.edif}
                          ncol="2"
                        />
                        <CampoTexto
                          name="apto"
                          label="Apartamento"
                          value={values.apto}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.apto}
                          errors={errors.apto}
                          ncol="3"
                        />
                        <CampoTexto
                          name="poblado_barrio"
                          label="Barrio/Poblado"
                          value={values.poblado_barrio}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.poblado_barrio}
                          errors={errors.poblado_barrio}
                          ncol="7"
                        />

                        {/* //! Provincia */}
                        {!provincia.loading && (
                          <AutoCompletar
                            options={provincia.data}
                            label="Provincia"
                            value={values.provincia}
                            onChange={(event, value) => {
                              setFieldValue("provincia", value);
                              setMunicipioData(
                                municipio.data.filter(
                                  (item) => item.provincia.id === value.id
                                )
                              );
                              setFieldValue("municipio", null);
                            }}
                            handleBlur={handleBlur}
                            touched={touched.provincia}
                            errors={errors.provincia}
                            ncol="6"
                          />
                        )}

                        {/* //! Municipio */}
                        {!municipio.loading && (
                          <AutoCompletar
                            options={municipioData}
                            label="Municipio"
                            value={values.municipio}
                            onChange={(event, value) =>
                              setFieldValue("municipio", value)
                            }
                            setFieldValue={setFieldValue}
                            field="municipio"
                            handleBlur={handleBlur}
                            touched={touched.municipio}
                            errors={errors.municipio}
                            ncol="6"
                          />
                        )}
                      </Box>
                    </TabPanel>
                    {/* //! Datos laborales */}
                    <TabPanel value="3">
                      <Box
                        display="grid"
                        gap="15px 10px"
                        m={2}
                        gridTemplateColumns="repeat(12, 1fr)"
                      >
                        <CampoTexto
                          name="ag"
                          label="Año de graduado"
                          value={values.ag}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.ag}
                          errors={errors.ag}
                          ncol="6"
                        />
                        <CampoTexto
                          name="antdd"
                          label="Antigüedad"
                          value={values.antdd}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.antdd}
                          errors={errors.antdd}
                          ncol="6"
                        />
                        <CampoTexto
                          name="area_dpto"
                          label="Área / Departamento"
                          value={values.area_dpto}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.area_dpto}
                          errors={errors.area_dpto}
                          ncol="6"
                        />
                        <CampoTexto
                          name="cargo"
                          label="Cargo"
                          value={values.cargo}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.cargo}
                          errors={errors.cargo}
                          ncol="6"
                        />
                        <CampoTexto
                          name="cpt"
                          label="Cobra por tarjeta"
                          value={values.cpt}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.cpt}
                          errors={errors.cpt}
                          ncol="6"
                        />
                        <CampoTexto
                          name="especialidad"
                          label="Especialidad"
                          value={values.especialidad}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.especialidad}
                          errors={errors.especialidad}
                          ncol="6"
                        />
                        <CampoTexto
                          name="fecha_captado"
                          label="Fecha de captado"
                          value={values.fecha_captado}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.fecha_captado}
                          errors={errors.fecha_captado}
                          ncol="6"
                        />
                        <CampoTexto
                          name="fecha_cc"
                          label="Fecha de contrato en el cargo"
                          value={values.fecha_cc}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.fecha_cc}
                          errors={errors.fecha_cc}
                          ncol="6"
                        />
                        <CampoTexto
                          name="ne"
                          label="Nivel Escolar"
                          value={values.ne}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.ne}
                          errors={errors.ne}
                          ncol="6"
                        />
                        <CampoTexto
                          name="nip"
                          label="Número de identificación personal"
                          value={values.nip}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.nip}
                          errors={errors.nip}
                          ncol="6"
                        />
                        <CampoTexto
                          name="nuevo_ingreso"
                          label="Nuevo ingreso"
                          value={values.nuevo_ingreso}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.nuevo_ingreso}
                          errors={errors.nuevo_ingreso}
                          ncol="6"
                        />
                        <CampoTexto
                          name="pase"
                          label="Pase (RTD)"
                          value={values.pase}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.pase}
                          errors={errors.pase}
                          ncol="6"
                        />
                        <CampoTexto
                          name="procedencia"
                          label="Procedencia"
                          value={values.procedencia}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.procedencia}
                          errors={errors.procedencia}
                          ncol="6"
                        />
                        <CampoTexto
                          name="proyecto"
                          label="Proyecto"
                          value={values.proyecto}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.proyecto}
                          errors={errors.proyecto}
                          ncol="6"
                        />
                        <CampoTexto
                          name="turno"
                          label="Turno"
                          value={values.turno}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.turno}
                          errors={errors.turno}
                          ncol="6"
                        />
                      </Box>
                    </TabPanel>
                    {/*//! Afiliaciones */}
                    <TabPanel value="4">
                      <Box
                        display="grid"
                        gap="15px 10px"
                        m={2}
                        gridTemplateColumns="repeat(12, 1fr)"
                      >
                        <CampoTexto
                          name="afp"
                          label="Afiliación política"
                          value={values.afp}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.afp}
                          errors={errors.afp}
                          ncol="6"
                        />
                        <CampoTexto
                          name="defensa"
                          label="Ubicación defensa"
                          value={values.defensa}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.defensa}
                          errors={errors.defensa}
                          ncol="6"
                        />
                        <CampoTexto
                          name="orm"
                          label="Organizaciones de masa"
                          value={values.orm}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.orm}
                          errors={errors.orm}
                          ncol="6"
                        />
                      </Box>
                    </TabPanel>
                    {/* //! Vestimenta de trabajo */}
                    <TabPanel value="5">
                      <Box
                        display="grid"
                        gap="15px 10px"
                        m={2}
                        gridTemplateColumns="repeat(12, 1fr)"
                      >
                        <CampoTexto
                          name="talla_calzado"
                          label="Talla Calzado"
                          value={values.talla_calzado}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.talla_calzado}
                          errors={errors.talla_calzado}
                          ncol="6"
                        />
                        <CampoTexto
                          name="talla_camisa"
                          label="Talla Camisa / Blusa"
                          value={values.talla_camisa}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.talla_camisa}
                          errors={errors.talla_camisa}
                          ncol="6"
                        />
                        <CampoTexto
                          name="talla_pantalon"
                          label="Talla pantalón"
                          value={values.talla_pantalon}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.talla_pantalon}
                          errors={errors.talla_pantalon}
                          ncol="6"
                        />
                      </Box>
                    </TabPanel>
                    {/* //! Vivienda */}
                    <TabPanel value="6">
                      <Box
                        display="grid"
                        gap="15px 10px"
                        m={2}
                        gridTemplateColumns="repeat(12, 1fr)"
                      >
                        <CampoTexto
                          name="estado_vivienda"
                          label="Estado de la vivienda"
                          value={values.estado_vivienda}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.estado_vivienda}
                          errors={errors.estado_vivienda}
                          ncol="6"
                        />
                        <CampoTexto
                          name="propietario"
                          label="Propietario"
                          value={values.propietario}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.propietario}
                          errors={errors.propietario}
                          ncol="6"
                        />
                        <CampoTexto
                          name="vivienda_vinculada"
                          label="Vivienda vinculada"
                          value={values.vivienda_vinculada}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.vivienda_vinculada}
                          errors={errors.vivienda_vinculada}
                          ncol="6"
                        />
                      </Box>
                    </TabPanel>
                    {/* //! Alojamiento */}
                    <TabPanel value="7">
                      <Box
                        display="grid"
                        gap="15px 10px"
                        m={2}
                        gridTemplateColumns="repeat(12, 1fr)"
                      >
                        <CampoTexto
                          name="alojamiento_viajante"
                          label="Base de alojamiento / Viajante"
                          value={values.alojamiento_viajante}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.alojamiento_viajante}
                          errors={errors.alojamiento_viajante}
                          ncol="6"
                        />
                        <CampoTexto
                          name="apartamento"
                          label="Apartamento"
                          value={values.apartamento}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.apartamento}
                          errors={errors.apartamento}
                          ncol="6"
                        />
                        <CampoTexto
                          name="bloque"
                          label="Bloque"
                          value={values.bloque}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.bloque}
                          errors={errors.bloque}
                          ncol="6"
                        />
                        <CampoTexto
                          name="cuarto"
                          label="Cuarto"
                          value={values.cuarto}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.cuarto}
                          errors={errors.cuarto}
                          ncol="6"
                        />
                        <CampoTexto
                          name="pg"
                          label="Parada omnibus"
                          value={values.pg}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.pg}
                          errors={errors.pg}
                          ncol="6"
                        />
                        <CampoTexto
                          name="ruta"
                          label="Ruta"
                          value={values.ruta}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.ruta}
                          errors={errors.ruta}
                          ncol="6"
                        />
                        <CampoTexto
                          name="pantry"
                          label="Pantry"
                          value={values.pantry}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          touched={touched.pantry}
                          errors={errors.pantry}
                          ncol="6"
                        />
                      </Box>
                    </TabPanel>
                  </TabContext>
                  <Box textAlign="right">
                    <Button type="submit" variant="contained">
                      Guardar
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Paper>
        </Stack>
      </Container>
    </>
  );
}
