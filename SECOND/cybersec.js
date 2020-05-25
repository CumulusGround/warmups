console.log("cybersec");
// Cybersec
// The 'penetration testing' team have obtained a file from a suspect's private machine... and the information is incriminating! The only problem is... your tracking software only accepts a particular format. Take the compromised file, and turn it into a format for your backend to process it.

// Text file with incriminating info:

// customer,product,cost per unit,units
// Alica Brereton,Marijuana,9.18,50
// William Kotai,ecstasy,19.12,20
// Joel Forro,heroin,91.16,5
// David Ernest,Methamphetamine,108.78,5
// David Ernest,cocaine,80,2
// Joel Forro,ecstasy,19.12,10
// Gabriella Hyde,Marijuana,9.18,10
// Gabriella Hyde,Methamphetamine,108.78,8

// Sample output of the format we want our data for processing:
// {  
//    'Alica Brereton':[  
//       {  
//          product:'Marijuana',
//          unitPrice:'9.18',
//          units:'50',
//          totalPrice:'459.00'
//       }
//    ],
//    'William Kotai':[  
//       {  
//          product:'ecstasy',
//          unitPrice:'19.12',
//          units:'20',
//          totalPrice:'382.40'
//       }
//    ]
// }

const fs = require('fs');
const buffer = fs.readFileSync(process.argv[2])
// console.log(buffer.toString());
const dataFile = buffer.toString()

console.log(textToObject(dataFile));

function textToObject(rawStringData) {
    const processedData = {}
    let rawDataArray = rawStringData.split('\n')
    // take the first line and remember them as key
    let dataKeys = rawDataArray.shift().split(',').slice(1)
    // console.log(rawDataArray);
    // console.log(dataKeys);
    // console.log(rawDataArray.slice(1)); 

    // go through each line
        rawDataArray.forEach(line => {
            let lineArray = line.split(',')
            let personData = [{}]
            let dataValues = lineArray.slice(1)
            
            //then make an array matching the keys to the value
            for (let i = 0; i < dataValues.length; i++) {
                personData[0][dataKeys[i]] = dataValues[i]
                // console.log(personData);
            }
            // console.log(personData);

            //first one is a key
            processedData[lineArray[0]] = personData
            // console.log(processedData);
        });
    //return that
    return processedData
}

// console.log(textToObject('customer,product,cost per unit,units\n Alica Brereton,Marijuana,9.18,50\n William Kotai,ecstasy,19.12,20'));
