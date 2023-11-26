const salary = (wage, hours, days)=>{
    return Math.round(wage*hours*days);

};

const taxed = (salary, procento) => {
    return Math.round ((salary*(100-procento))/100);

};
const wage = parseFloat(prompt("Zadejte hrubou mzdu za hodinu (Kč):"));
    const hours = parseFloat(prompt("Zadejte průměrný počet hodin denně:"));
    const days = parseFloat(prompt("Zadejte průměrný počet pracovních dní v měsíci:"));
const predZdanenim = salary (wage, hours, days);
const poZdaneni = taxed (predZdanenim, 15);
document.body.innerHTML +=`
<p>Shrnutí: </p> 
<p>Hrubá mzda za hodinu v Kč: ${wage}</p> 
<p>Počet hodin denně: ${hours}</p> 
<p>Počet pracovních dní v měsíci: ${days}</p> 
<p>Částka před zdaněním: ${predZdanenim}</p> 
<p>Částka po zdanění: ${poZdaneni}</p> 
`;