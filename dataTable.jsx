import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";
import "./dataTable.css";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  // fetching data from a public API using fetch inside useEffect with no dependency so that the data load once only.
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetch(API_URL);
        const data = await result.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  // handleSerach function for the input input field
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Implementing a search bar logic to filter the displayed items based on user input.
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <TextField
          label="Search by name"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleSearch}
          value={searchQuery}
          className="w-full"
        />
      </div>
      <Paper className="w-full overflow-x-auto">
        <TableContainer>
          <Table className="min-w-full leading-normal">
            <TableHead>
              <TableRow className="bg-gray-200">
                <TableCell className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Name
                </TableCell>
                <TableCell className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Username
                </TableCell>
                <TableCell className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Email
                </TableCell>
                <TableCell className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  WEBSITE
                </TableCell>
                <TableCell className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  COMPANY
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {item.name}
                  </TableCell>
                  <TableCell className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {item.username}
                  </TableCell>
                  <TableCell className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {item.email}
                  </TableCell>

                  <TableCell className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {item.website}
                  </TableCell>
                  <TableCell className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {item.company.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default DataTable;
