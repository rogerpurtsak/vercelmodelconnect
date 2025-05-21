import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const Dashboard = () => {
  const [bookingData, setBookingData] = useState(null);
  const [retentionData, setRetentionData] = useState(null);
  const [arpcData, setArpcData] = useState(null);
  const [diversityData, setDiversityData] = useState(null);


useEffect(() => {
  fetch('/data/booking_ratio.json')
    .then(res => res.json())
    .then(json => setBookingData(json));

  fetch('/data/retention_rate.json')
    .then(res => res.json())
    .then(json => setRetentionData(json));

  fetch('/data/arpc.json')
    .then(res => res.json())
    .then(json => setArpcData(json));

  fetch('/data/diversity_index.json')
    .then(res => res.json())
    .then(json => setDiversityData(json));
}, []);


if (
  !bookingData?.andmed ||
  !retentionData?.andmed ||
  !arpcData?.andmed ||
  !diversityData?.andmed
) {
  return <p>Laen andmeid...</p>;
}

  const bookingOption = {
    title: {
      text: `${bookingData.kpi} (${bookingData.ühik})`,
      subtext: `Allikas: ${bookingData.allikas}`,
      left: 'center'
    },
    xAxis: {
      type: 'category',
      data: bookingData.andmed.map(item => item.kuu),
      name: 'Kuu'
    },
    yAxis: {
      type: 'value',
      name: bookingData.ühik
    },
    series: [
      {
        label: {
        show: true,
        formatter: '{c}',
        position: 'top',
        fontSize: 12,
        color: '#000'
        },
        data: bookingData.andmed.map(item => item.väärtus),
        type: 'bar',
        label: { show: true, position: 'top', formatter: '{c}%' },
        itemStyle: { color: ['#0072B2', '#56B4E9']
     }
      }
      
    ]
  };

  const retentionOption = {
    title: {
      text: `${retentionData.kpi} (${retentionData.ühik})`,
      subtext: `Allikas: ${retentionData.allikas}`,
      left: 'center'
    },
    xAxis: {
      type: 'category',
      data: retentionData.andmed.map(item => item.kuu),
      name: 'Kuu'
    },
    yAxis: {
      type: 'value',
      name: retentionData.ühik
    },
    series: [
      {
        label: {
        show: true,
        formatter: '{c}',
        position: 'top',
        fontSize: 12,
        color: '#000'
        },
        data: retentionData.andmed.map(item => item.väärtus),
        type: 'line',
        smooth: true,
        label: { show: true, position: 'top', formatter: '{c}%' },
        itemStyle: { color: ['#E69F00', '#F0E442']}
      }
    ]
  };

  const arpcOption = {
  title: {
    text: `${arpcData.kpi} (${arpcData.ühik})`,
    subtext: `Allikas: ${arpcData.allikas}`,
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    formatter: params => `${params[0].name}: $${params[0].value}`
  },
  xAxis: {
    type: 'category',
    data: arpcData.andmed.map(item => item.kuu),
    name: 'Kuu'
  },
  yAxis: {
    type: 'value',
    name: arpcData.ühik
  },
  series: [
    {
        
      data: arpcData.andmed.map(item => item.väärtus),
      type: 'line',
      smooth: true,
      areaStyle: {},
      label: {
        show: true,
        position: 'top',
        formatter: '${c}',
          fontSize: 12,
        color: '#000'

      },
      itemStyle: {
        color: ['#009E73', '#92C5DE']
      }
    }
  ]
};

const diversityOption = {
  color: ['#CC79A7', '#D55E00'],
  title: {
    text: 'Modellide mitmekesisuse indeks kuude lõikes',
    subtext: 'Allikas: BusinessPlan Templates',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    top: '10%',
    data: ['Naised', 'Mehed', 'Muu']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Jaanuar', 'Veebruar', 'Märts', 'Aprill']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '%',
      min: 0,
      max: 100
    }
  ],
  series: [
    {
      label: {
        show: true,
        formatter: '{c}',
        position: 'top',
        fontSize: 12,
        color: '#000'
        },
  
      name: 'Naised',
      type: 'line',
      stack: 'total',
      smooth: true,
      lineStyle: { width: 0 },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgb(128, 255, 165)' },
          { offset: 1, color: 'rgb(1, 191, 236)' }
        ])
      },
      emphasis: { focus: 'series' },
      data: [45, 47, 50, 52]
    },
    {
      name: 'Mehed',
      type: 'line',
      stack: 'total',
      smooth: true,
      lineStyle: { width: 0 },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgb(0, 221, 255)' },
          { offset: 1, color: 'rgb(77, 119, 255)' }
        ])
      },
      emphasis: { focus: 'series' },
      data: [28, 27, 26, 28]
    },
    {
      name: 'Muu',
      type: 'line',
      stack: 'total',
      smooth: true,
      lineStyle: { width: 0 },
      showSymbol: false,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}%'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgb(255, 191, 0)' },
          { offset: 1, color: 'rgb(224, 62, 76)' }
        ])
      },
      emphasis: { focus: 'series' },
      data: [5, 6, 6, 5]
    }
  ]
};


  return (
    <div className="px-6 py-8 max-w-5xl mx-auto bg-white rounded-2xl shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            ModelConnect Dashboard
        </h1>


      <div style={{ marginBottom: '4rem' }}>
        <ReactECharts option={bookingOption} style={{ height: '400px' }} />
        <p>Allikas: <a href={bookingData.allika_url} target="_blank">{bookingData.allikas}</a></p>
      </div>

      <div style={{ marginBottom: '4rem' }}>
        <ReactECharts option={retentionOption} style={{ height: '400px' }} />
        <p>Allikas: <a href={retentionData.allika_url} target="_blank">{retentionData.allikas}</a></p>
      </div>

      <div style={{ marginBottom: '4rem' }}>
        <ReactECharts option={arpcOption} style={{ height: '400px' }} />
        <p>Allikas: <a href={arpcData.allika_url} target="_blank" rel="noreferrer">{arpcData.allikas}</a></p>
        </div>
        <div style={{ marginBottom: '4rem' }}>
            <ReactECharts option={diversityOption} style={{ height: '400px' }} />
            <p>Allikas: <a href={diversityData.allika_url} target="_blank" rel="noreferrer">{diversityData.allikas}</a></p>
        </div>



    </div>
  );
};

export default Dashboard;
