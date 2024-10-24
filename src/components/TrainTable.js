import React from "react";
import MaterialTable from "@material-table/core";
import { forwardRef } from "react";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from "@mui/icons-material";

// Icons used in Material Table
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

// Sample train data
const trainData = [
  { id: 1, name: "Express 101", route: "NYC - Washington", schedule: "10:00 AM - 1:00 PM", total_seats: 200 },
  { id: 2, name: "Metro 203", route: "Boston - NYC", schedule: "2:00 PM - 6:00 PM", total_seats: 150 },
  { id: 3, name: "Rapid 405", route: "Chicago - Detroit", schedule: "9:00 AM - 12:00 PM", total_seats: 100 },
  { id: 4, name: "Bullet 505", route: "SF - LA", schedule: "8:00 AM - 11:30 AM", total_seats: 250 },
  { id: 5, name: "Express 303", route: "Houston - Dallas", schedule: "3:00 PM - 6:00 PM", total_seats: 180 },
];

// Function to handle custom button click
const handleButtonClick = (rowData) => {
  console.log("Row Data:", rowData);
  alert(`Train Selected: ${rowData.name}`);
};

function TrainTable() {
  return (
    <Paper style={{ padding: "20px", marginTop: "50px" }}>
      <MaterialTable
        icons={tableIcons}
        title="Train Schedule"
        columns={[
          { title: "ID", field: "id", type: "numeric" },
          { title: "Train Name", field: "name" },
          { title: "Route", field: "route" },
          { title: "Schedule", field: "schedule" },
          { title: "Total Seats", field: "total_seats", type: "numeric" },
          {
            title: "Actions",
            field: "actions",
            filtering: false, // Disable filtering for this column
            render: (rowData) => (
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleButtonClick(rowData)}
              >
                Select Train
              </Button>
            ),
          },
        ]}
        data={trainData}
        options={{
          search: true,
          paging: true,
          filtering: true, // Keep filtering enabled for other columns
          exportButton: true,
          actionsColumnIndex: -1,
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
            fontSize: "16px",
          },
          rowStyle: {
            fontSize: "14px",
          },
        }}
      />
    </Paper>
  );
}

export default TrainTable;
