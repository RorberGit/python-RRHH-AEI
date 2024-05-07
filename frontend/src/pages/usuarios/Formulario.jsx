import { Container, Paper } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import { useEffect, useState } from "react";
import { AttachFile } from "@mui/icons-material";

export default function Formulario() {
  const [file, setFile] = useState(null);

  const handleChange = (newFile) => {
    setFile(newFile);
  };

  useEffect(() => {
    console.info("File :>", file);
  }, [file]);

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 2, display: "block", flexDirection: "column" }}>
          <h1>Form1</h1>
          <h1>Form2</h1>
          <h1>Form3</h1>
          <h1>Form4</h1>
          <MuiFileInput value={file} onChange={handleChange} />
          <MuiFileInput
            value={file}
            onChange={handleChange}
            size="medium"
            variant="outlined"
            InputProps={{
              inputProps: {
                accept: "image/*",
              },
              startAdornment: <AttachFile />,
            }}
          />
        </Paper>
      </Container>
    </>
  );
}
