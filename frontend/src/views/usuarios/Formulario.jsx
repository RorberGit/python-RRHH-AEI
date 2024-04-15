import { Container, Paper } from "@mui/material";

export default function Formulario() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 2, display: "block", flexDirection: "column" }}>
          <h1>Form1</h1>
          <h1>Form2</h1>
          <h1>Form3</h1>
          <h1>Form4</h1>
        </Paper>
      </Container>
    </>
  );
}
