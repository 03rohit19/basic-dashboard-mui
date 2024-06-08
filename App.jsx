import DataTable from "./components/dataTable";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className=" mx-auto p-4 text-center font-bold">
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        className="text-2xl font-bold mb-6"
      >
        User Data Table
      </Typography>
      <DataTable />
    </div>
  );
}

export default App;
