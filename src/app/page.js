"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FcBearish, FcSurvey, FcSynchronize, FcBadDecision, FcExternal } from "react-icons/fc";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Home()
{
  const [ toggle, setToggle ] = useState( false );
  // console.log( toggle );
  function createData( name, calories, fat, carbs, protein )
  {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData( 'Frozen yoghurt', 159, 6.0, 24, 4.0 ),
    createData( 'Ice cream sandwich', 237, 9.0, 37, 4.3 ),
    createData( 'Eclair', 262, 16.0, 24, 6.0 ),
    createData( 'Cupcake', 305, 3.7, 67, 4.3 ),
    createData( 'Gingerbread', 356, 16.0, 49, 3.9 ),
  ];
  return (
    <div className="">
      {/* main */}
      <div className="  bg-[#debbbbb6]">
        {/* nav */}
        <div className="flex h-24 items-center px-5">
          {/* dashbord */}
          <div className="flex font-bold mt-5 ml-5 text-4xl w-3/6">
            Dashboard
          </div>
          <div className="flex ml-44">
            {/* search box */}
            <div className="flex">
              <input
                className="rounded-full w-68 h-12 relative"
                placeholder="        Search for anything..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 absolute mt-3 ml-2"
              >
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
              </svg>
            </div>
            {/* alert */}
            <div className="bg-white w-12 h-12 rounded-full ml-5">
              <div className="mt-3 ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
              </div>
            </div>
            {/* avatar */}
            <div>

              <div className="flex relative">
                <div className="w-44 h-12 bg-white ml-4 rounded-full">
                  {/* avatar */}
                  <div className="ml-1 mt-1">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                {/* name */}
                <div className="absolute ml-20">
                  Alex Marie
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second line */}
        <hr className="h-px my-8 border-0 bg-gray-700" />
        {/* third line */}
        <div className="flex justify-between px-10">
          <span className="text-2xl ">Overview</span>
          <div className="">
            <Box sx={{ minWidth: 220, minHeight: 100 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  className="rounded-full bg-white"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select "
                  // value={age}
                  label="Last 30 days"
                // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        {/* fourth line */}
        <div className="grid grid-cols-4 px-5 gap-6">
          <div className="w-[320px] h-[200px] bg-[#c89898b6] rounded-lg ">
            <div className="bg-[#e5cae8b6] w-fit rounded-full px-2 py-2 ml-3 mt-3">
              <FcBearish size={'30px'} />
            </div>
            <span className="flex ml-3 mt-3 opacity-50">Total Revenue</span>
            <span className="flex ml-3 mt-1 text-4xl">$53,000</span>
            <div className="flex mt-2 ml-2">
              <FcExternal size={'30px'} />
              <span className="mt-1"> 12% income from last month</span>
            </div>
          </div>
          <div className="w-[320px] h-[200px] bg-[#c89898b6] rounded-lg ">
            <div className="bg-[#dad8dab6] w-fit rounded-full px-2 py-2 ml-3 mt-3">
              <FcSurvey size={'30px'} />
            </div>
            <span className="flex ml-3 mt-3 opacity-50">Total Revenue</span>
            <span className="flex ml-3 mt-1 text-4xl">$53,000</span>
            <div className="flex mt-2 ml-2">
              <FcExternal size={'30px'} />
              <span className="mt-1"> 12% income from last month</span>
            </div>
          </div>
          <div className="w-[320px] h-[200px] bg-[#c89898b6] rounded-lg ">
            <div className="bg-[#c8def1b6] w-fit rounded-full px-2 py-2 ml-3 mt-3">
              <FcSynchronize size={'30px'} />
            </div>
            <span className="flex ml-3 mt-3 opacity-50">Total Revenue</span>
            <span className="flex ml-3 mt-1 text-4xl">95/100</span>
            <div className="flex mt-2 ml-2">
              <FcExternal size={'30px'} />
              <span className="mt-1"> 12% income from last month</span>
            </div>
          </div>
          <div className="w-[320px] h-[200px] bg-[#c89898b6] rounded-lg ">
            <div className="bg-[#e5cae8b6] w-fit rounded-full px-2 py-2 ml-3 mt-3">
              <FcBadDecision size={'30px'} />
            </div>
            <span className="flex ml-3 mt-3 opacity-50">Total Revenue</span>
            <div className="flex">
              <span className="flex ml-3 mt-1 text-4xl">100 </span>
              <span className="flex items-end">/120</span>
            </div>
            <div className="flex mt-2 ml-2">
              <FcExternal size={'30px'} />
              <span className="mt-1"> 12% income from last month</span>
            </div>
          </div>
        </div>
        {/* fifth line */}
        <div className={`flex flex-cols px-7 py-10 ${!toggle ? ( 'gap-5' ) : ( 'gap-3' )} `}>
          {/* 1st box */}
          <div className="w-4/6 h-fit  px-5 bg-[#e6b3b3] rounded-lg">
            {/* 1st line */}
            <div className="flex flex-cols">

              <div className="w-1/2 mt-5">
                <span>Project Summary</span>
              </div>

              <div className="flex gap-2">

                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label text-black">Project</InputLabel>
                  <Select
                    className="bg-white text-voilet px-2 rounded-full"
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    // value={age}
                    // onChange={handleChange}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

                <FormControl variant="standard" sx={{ minWidth: 180 }}>
                  <InputLabel id="demo-simple-select-label">Project Manager</InputLabel>
                  <Select
                    className="bg-white rounded-full px-2"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Age"
                  // onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

                <FormControl variant="standard" sx={{ minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    className="bg-white rounded-full px-2 font"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Age"
                  // onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

              </div>

            </div>
            {/* 2nd line */}
            <div className="py-2">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Fat&nbsp;(g)</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map( ( row ) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ) )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
          {/* 2nd box */}
          <div className="w-2/6 bg-[#e6b3b3] rounded-lg">
            <div className="flex flex-wrap py-10">
              <BarChart
                xAxis={[ { scaleType: 'band', data: [ 'group A', 'group B', 'group C' ] } ]}
                series={[ { data: [ 4, 3, 5 ] }, { data: [ 1, 6, 3 ] }, { data: [ 2, 5, 6 ] } ]}
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
