//horario como json
let schedule = {
  Radiología: [
    {
      HORA: "11:00",
      ESPECIALISTA: "IGNACIO SCHULZ",
      PACIENTE: "FRANCISCA ROJAS",
      RUT: "9878782-1",
      PREVISION: "FONASA",
    },
    {
      HORA: "11:30",
      ESPECIALISTA: "FEDERICO SUBERCASEAUX",
      PACIENTE: "PAMELA ESTRADA",
      RUT: "15345241-3",
      PREVISION: "ISAPRE",
    },
    {
      HORA: "15:00",
      ESPECIALISTA: "FERNANDO WURTHZ",
      PACIENTE: "ARMANDO LUNA",
      RUT: "16445345-9",
      PREVISION: "ISAPRE",
    },
    {
      HORA: "15:30",
      ESPECIALISTA: "ANA MARIA GODOY",
      PACIENTE: "MANUEL GODOY",
      RUT: "17666419-0",
      PREVISION: "FONASA",
    },
    {
      HORA: "16:00",
      ESPECIALISTA: "PATRICIA SUAZO",
      PACIENTE: "RAMON ULLOA",
      RUT: "14989389-K",
      PREVISION: "FONASA",
    },
  ],
  Traumatología: [
    {
      HORA: "8:00",
      ESPECIALISTA: "MARIA PAZ ALTUZARRA",
      PACIENTE: "PAULA SANCHEZ",
      RUT: "15554774-5",
      PREVISION: "FONASA",
    },
    {
      HORA: "10:00",
      ESPECIALISTA: "RAUL ARAYA",
      PACIENTE: "ANGÉLICA NAVAS",
      RUT: "15444147-9",
      PREVISION: "ISAPRE",
    },
    {
      HORA: "10:30",
      ESPECIALISTA: "MARIA ARRIAGADA",
      PACIENTE: "ANA KLAPP",
      RUT: "17879423-9",
      PREVISION: "ISAPRE",
    },
    {
      HORA: "11:00",
      ESPECIALISTA: "ALEJANDRO BADILLA",
      PACIENTE: "FELIPE MARDONES",
      RUT: "1547423-6",
      PREVISION: "ISAPRE",
    },
    {
      HORA: "11:30",
      ESPECIALISTA: "CECILIA BUDNIK",
      PACIENTE: "DIEGO MARRE",
      RUT: "16554741-K",
      PREVISION: "FONASA",
    },
    {
      HORA: "12:00",
      ESPECIALISTA: "ARTURO CAVAGNARO",
      PACIENTE: "CECILIA MENDEZ",
      RUT: "9747535-8",
      PREVISION: "ISAPRE",
    },
    {
      HORA: "12:30",
      ESPECIALISTA: "ANDRES KANACRI",
      PACIENTE: "MARCIAL SUAZO",
      RUT: "11254785-5",
      PREVISION: "ISAPRE",
    },
  ],
  Dental: [
    {
      HORA: "8:30",
      ESPECIALISTA: "ANDREA ZUÑIGA",
      PACIENTE: "MARCELA RETAMAL",
      RUT: "11123425-6",
      PREVISION: "ISAPRE",
    },
    {
      HORA: "11:00",
      ESPECIALISTA: "MARIA PIA ZAÑARTU",
      PACIENTE: "ANGEL MUÑOZ",
      RUT: "9878789-2",
      PREVISION: "ISAPRE",
    },
    {
      HORA: "11:30",
      ESPECIALISTA: "SCARLETT WITTING",
      PACIENTE: "MARIO KAST",
      RUT: "7998789-5",
      PREVISION: "FONASA",
    },
    {
      HORA: "13:00",
      ESPECIALISTA: "FRANCISCO VON TEUBER",
      PACIENTE: "KARIN FERNANDEZ",
      RUT: "18887662-K",
      PREVISION: "FONASA",
    },
    {
      HORA: "13:30",
      ESPECIALISTA: "EDUARDO VIÑUELA",
      PACIENTE: "HUGO SANCHEZ",
      RUT: "17665461-4",
      PREVISION: "FONASA",
    },
    {
      HORA: "14:00",
      ESPECIALISTA: "RAQUEL VILLASECA",
      PACIENTE: "ANA SEPULVEDA",
      RUT: "14441281-0",
      PREVISION: "ISAPRE",
    },
  ],
};

// horario dividido  en 3 arreglos

const dental = schedule["Dental"];
const trauma = schedule["Traumatología"];
const radio = schedule["Radiología"];

//prepara el html para pintar en html
function createRow(hour, patient, medic, ID, insurance) {
  return `<tr><th scope="row">${hour}</th><td>${medic}</td><td>${patient}</td><td>${ID}</td><td>${insurance}</td></tr>`;
}
//recibe el paciente y lo convierte a una linea de tabla
function createPatient(e) {
  return createRow(e.HORA, e.PACIENTE, e.ESPECIALISTA, e.RUT, e.PREVISION);
}

//obtiene la primera hora
function getFirst(_array) {
  return _array[0];
}
//obtiene la ultima hora 
function getLast(_array) {
  return _array[_array.length - 1];
}

//toma un array y lo asigna a la tabla que corresponde en el html
function fillTable(tablename, _array) {
  _array.forEach((element) => {
    document.getElementById(tablename).innerHTML += createPatient(element);
  });

}
//llena el primero y el ultimo de un array especifico
function fillFirstAndLast(tablename,_array){
const firstRow = `<th>Primera Hora<th>${createPatient(getFirst(_array))}`;
const lastRow = `<th>Ultima Hora<th>${createPatient(getLast(_array))}`;
document.getElementById(tablename).innerHTML =firstRow+lastRow;
}


//pinta el html con cada arreglo.
fillFirstAndLast("tableBodyFirstAndLastRadio",radio);
fillTable("tableBodyRadio",radio);

fillFirstAndLast("tableBodyFirstAndLastTrauma",trauma);
fillTable("tableBodyTrauma",trauma);

fillFirstAndLast("tableBodyFirstAndLastDental",dental);
fillTable("tableBodyDental",dental);


