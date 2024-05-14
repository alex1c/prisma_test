'use client';
import React from 'react';
//import e from '../../public/price/lutner.csv'

const fs = require('fs');
const { parse } = require('csv-parse');
//const fastCsv = require('fast-csv');
const needle = require("needle");
const csvParser = require("csv-parser");

const uploadprice = () => {
	function uploadHandler() {
		/* fs.createReadStream('https://lutner.ru/bitrix/catalog_export/upload/lutner_new.csv')//('../../public/price/lutner.csv')
			.pipe(parse({ delimiter: ';', from_line: 2 }))
			.on('data', function (row) {
				console.log(row);
			})
			.on('end', function () {
				console.log('finished');
			})
			.on('error', function (error) {
				console.log(error.message);
			}); */

      const result = [];

      const url = "https://lutner.ru/bitrix/catalog_export/upload/lutner_new.csv";
      
      needle
        .get(url)
        .pipe(csvParser({ separator: ';' }))
        .on("data", (data) => {
          result.push(data);
        })
        .on("done", (err) => {
          if (err) console.log("An error has occurred");
          else console.log(result);
        });
	}

	return (
		<div className='mx-20'>
			upload price
			<button
				className='btn btn-outline'
				onClick={() =>uploadHandler()}
			>
				Загрузить
			</button>
		</div>
	);
};

export default uploadprice;
