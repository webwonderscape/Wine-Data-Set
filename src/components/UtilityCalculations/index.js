import React, {useContext} from 'react'
import Context from '../Context/Context';
import './index.css'

// Function to group data by alcohol value
function groupByAlcohol(data){
    const groupedData = {}
    data.forEach(item=>{
        const alcoholValue = item["Alcohol"];
       
        if(!groupedData[alcoholValue]){
            groupedData[alcoholValue]=[]
        }
        groupedData[alcoholValue].push(item)
        
    })
    return groupedData;
}


// Mean, Median, Mode
function calculateMean(data) {
    const sum = data.reduce((acc, value) => acc + value, 0);
    const mean = sum / data.length;
    return mean.toFixed(3);
  }
  
  function calculateMedian(data) {
    const sortedData = data.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);
  
    if (sortedData.length % 2 === 0) {
      const median = (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
      return median.toFixed(3);
    } else {
      return sortedData[middleIndex].toFixed(3);
    }
  }
  
  function calculateMode(data) {
    const frequencyMap = {};
    data.forEach(value => {
      if (!frequencyMap[value]) {
        frequencyMap[value] = 1;
      } else {
        frequencyMap[value]++;
      }
    });
  
    let maxFrequency = 0;
    let mode = [];
  
    for (const value in frequencyMap) {
      if (frequencyMap[value] > maxFrequency) {
        maxFrequency = frequencyMap[value];
        mode = [value];
      } else if (frequencyMap[value] === maxFrequency) {
        mode.push(value);
      }
    }
  
    if (mode.length === Object.keys(frequencyMap).length) {
      return 'No mode';
    }
  
    return mode.join(', ');
  }


  function calculateGamma(data) {
    return data.map(item => (item["Ash"] * item["Hue"]) / item["Magnesium"]);
  }



// Component for displaying Flavanoids-related calculations

  function FlavanoidsTable({ groupedData }) {
    const classNames = Object.keys(groupedData);
    const measure = 'Flavanoids';
  
    return (
      <div className='conatiner'>
        <h2>{measure} Table</h2>
        <table>
          <thead>
            <tr>
              <th>Measure</th>
              {classNames.map(className => (
                <th key={className}>Class {className}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{measure} Mean</td>
              {classNames.map(className => {
                const classData = groupedData[className].map(item => item[measure]);
                const mean = calculateMean(classData);
                return <td key={`${measure}-mean-${className}`}>{mean}</td>;
              })}
            </tr>
            <tr>
              <td>{measure} Median</td>
              {classNames.map(className => {
                const classData = groupedData[className].map(item => item[measure]);
                const median = calculateMedian(classData);
                return <td key={`${measure}-median-${className}`}>{median}</td>;
              })}
            </tr>
            <tr>
              <td>{measure} Mode</td>
              {classNames.map(className => {
                const classData = groupedData[className].map(item => item[measure]);
                const mode = calculateMode(classData);
                return <td key={`${measure}-mode-${className}`}>{mode}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  // Component for displaying Gamma-related calculations
  
  function GammaTable({ groupedData }) {
    // Get the list of class names from groupedData keys
    const classNames = Object.keys(groupedData);
    const measure = 'Gamma';
  
    return (
      <div className='conatiner'>
        <h2>{measure} Table</h2>
        <table>
          <thead>
            <tr>
              <th>Measure</th>
              {classNames.map(className => (
                <th key={className}>Class {className}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{measure} Mean</td>
              {classNames.map(className => {
                const classData = calculateGamma(groupedData[className]);
                const mean = calculateMean(classData);
                return <td key={`${measure}-mean-${className}`}>{mean}</td>;
              })}
            </tr>
            <tr>
              <td>{measure} Median</td>
              {classNames.map(className => {
                const classData = calculateGamma(groupedData[className]);
                const median = calculateMedian(classData);
                return <td key={`${measure}-median-${className}`}>{median}</td>;
              })}
            </tr>
            <tr>
              <td>{measure} Mode</td>
              {classNames.map(className => {
                const classData = calculateGamma(groupedData[className]);
                const mode = calculateMode(classData);
                return <td key={`${measure}-mode-${className}`}>{mode}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }


// Component for performing utility calculations using grouped data
const UtilityCalculations=()=>{
    const data = useContext(Context);
    // Group the data by alcohol value
    const groupedData = groupByAlcohol(data)
    

return(
    <div className='bg-conatiner'>
      <FlavanoidsTable groupedData={groupedData} />
      <GammaTable groupedData={groupedData} />
    </div>

)
}
export default UtilityCalculations