const origin = [
    {
        origin_id: "O01",
        origin_name: "Bakauheni",
    },
    {
        origin_id: "O02",
        origin_name: "Sunda Kelapa",
    },
    {
        origin_id: "O03",
        origin_name: "Merak",
    },
    {
        origin_id: "O04",
        origin_name: "Harbour Bay",
    },
    {
        origin_id: "O05",
        origin_name: "Ketapang",
    },
];

const destination = [
    {
        destination_id: "D01",
        destination_name: "Bakauheni",
    },
    {
        destination_id: "D02",
        destination_name: "Sunda Kelapa",
    },
    {
        destination_id: "D03",
        destination_name: "Merak",
    },
    {
        destination_id: "D04",
        destination_name: "Harbour Bay",
    },
    {
        destination_id: "D05",
        destination_name: "Ketapang",
    },
];

const service = [
    {
        service_id : "S01",
        service_name : "Express",
    },
    {
        service_id : "S02",
        service_name : "Regular",
    },
];

const date = [
    {
        date_id : "DT01",
        date_detail : "01-04-2022",
    },
    {
        date_id : "DT02",
        date_detail : "02-04-2022",
    },
    {
        date_id : "DT03",
        date_detail : "03-04-2022",
    },
    {
        date_id : "DT04",
        date_detail : "04-04-2022",
    },
    {
        date_id : "DT05",
        date_detail : "05-04-2022",
    },
];

const time = [
    {
        time_id : "T01",
        time_detail : "09:00",
    },
    {
        time_id : "T02",
        time_detail : "12:00",
    },
    {
        time_id : "T03",
        time_detail : "03:00",
    },
    {
        time_id : "T04",
        time_detail : "06:00",
    },
    {
        time_id : "T05",
        time_detail : "01:00",
    },
];

const price = [
    {
        price_id : "P01",
        origin_id : "O01",
        destination_id : "D03",
        service_id : "S01",
        date_id : "DT01",
        time_id : "T01",
        price_detail : "Rp 500.000",
    },
    {
        price_id : "P02",
        origin_id : "O01",
        destination_id : "D03",
        service_id : "S02",
        date_id : "DT01",
        time_id : "T01",
        price_detail : "Rp 300.000",
    },
    {
        price_id : "P03",
        origin_id : "O02",
        destination_id : "D05",
        service_id : "S02",
        date_id : "DT03",
        time_id : "T03",
        price_detail : "Rp 900.000",
    },
    {
        price_id : "P04",
        origin_id : "O01",
        destination_id : "D04",
        service_id : "S01",
        date_id : "DT04",
        time_id : "T04",
        price_detail : "Rp 1.000.000",
    },
    {
        price_id : "P05",
        origin_id : "O03",
        destination_id : "D02",
        service_id : "S02",
        date_id : "DT05",
        time_id : "T05",
        price_detail : "Rp 150.000",
    },
];
export {origin,destination,service,date,time,price}