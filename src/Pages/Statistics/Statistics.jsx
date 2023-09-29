import { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
const Statistics = () => {

  const [donation,setDonation] =useState([])
  

  useEffect(()=>{
      const addDonation = JSON.parse(localStorage.getItem("adddonation"));
      if(addDonation){
      setDonation(addDonation)
      }
      else{
          setNoFound("No data found");
      }
  },[])

        const data = [
          { name: 'Group A', value:  12},
          { name: 'Group B', value:  donation.length},
        ];
        
        const COLORS = ['#FF444A', '#00C49F'];
        
        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
          const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          
          const y = cy + radius * Math.sin(-midAngle * RADIAN);
          return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
        }





        return (
            <div className="justify-center bg-white">
                <PieChart width={1600} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
            </div>
  
          );
        };


export default Statistics;