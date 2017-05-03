$(document).ready(function(){

  const expiration =  '4/30/17';
  const vehicleArray = [];

  function Vehicle(
     year,
     make,
     model,
     color,
     doors,
     engine,
     transmission,
     brakes,
     steering,
     power,
     equipment,
     vin,
     stock,
     miles,
     msrp,
     leasePrice,
     residual,
     security,
     bankFee,
     moneyDown,
     totalPayment,
     months,
     milesPerYear,
     thereAfter,
     totalAtInception,
     additionalInfo,
     vehicleImage,
     vehicleUrl
    ){
      this.year = year;
      this.make = make;
      this.model = model;
      this.color = color;
      this.doors = doors;
      this.engine = engine;
      this.transmission = transmission;
      this.brakes = brakes;
      this.steering = steering;
      this.power = power;
      this.equipment = equipment;
      this.vin = vin;
      this.stock = stock;
      this.miles = miles;
      this.msrp = msrp;
      this.leasePrice = leasePrice;
      this.residual = residual;
      this.security = security;
      this.bankFee = bankFee;
      this.moneyDown = moneyDown;
      this.totalPayment = totalPayment;
      this.months = months;
      this.milesPerYear = milesPerYear;
      this.thereAfter = thereAfter;
      this.totalAtInception = totalAtInception;
      this.additionalInfo = additionalInfo;
      this.vehicleImage = vehicleImage;
      this.vehicleUrl = vehicleUrl;
  }

  function listing(thisCar){
    document.body.innerHTML += `
    <div class="specialContainer">
      <div class="specialContent leftContent">
        <h3 class="yearMake">${thisCar.year} ${thisCar.make}</h3>
        <h2 class="modelTrim">${thisCar.model}</h2>
        <img src="${thisCar.vehicleImage}" alt="Mazda vehicle image" class="vehicleImage">
      </div>
      <div class="specialContent rightContent">
      <h3 class="leaseHead">Lease this vehicle for:</h3>
        <div class="leaseQuoteSection">

          <h1 class="lease">$${thisCar.leasePrice}</h1>
          <h3 class="monthsSections">/MO
            <br>
            ${thisCar.months} MOS
          </h3>
        </div>
        <h4 class="moneyDue">$${thisCar.totalAtInception} DUE AT SIGNING</h4>

        <a href="${thisCar.vehicleUrl}" class="linkButton" target="_blank">VIEW VEHICLE</a>

        <p class="disclaimer">VIN ${thisCar.vin}. Stk ${thisCar.stock}. ${thisCar.doors}, ${thisCar.engine}, ${thisCar.transmission}, air conditioning, power steering/ABS brakes/windows/locks/mirrors, cd/MP3, ${thisCar.equipment}. MSRP: $${thisCar.msrp}. $${thisCar.totalAtInception} due at inception. $${thisCar.moneyDown} down + 1st mo pymt $${thisCar.leasePrice}+ bank fee incl. + $0 sec dep. $${thisCar.totalPayment} ttl pymts/$${thisCar.residual} residual.${thisCar.additionalInfo} Prices include all costs to be paid by a consumer except for licensing, registration, taxes, and $299 doc. fee. Tier 1 credit approval thru primary lender. Lessee resp. for excess wear/tear. 10K mi. per yr/.25¢ per mi. over thereafter. See dealer for complete details. Not resp. for typos. Offers expire ${expiration}.</p>
      </div>
    </div>
    `

  }

  vehicleArray[0] = new Vehicle(
  2017,
  'Mazda',
  'Mazda 3 TOURING',
  'SILVER',
  '4DR',
  '4-cylinder Automatic with OD',
  'Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/seats/mirrors,',
  'air conditioning, AM/FM radio, cruise control, dual airbags, side airbags, traction control, alloy wheels, keyless remote entry',
  'HM112862',
  'MZH0161',
  '',
  '22,330',
  189,
  '12,281',
  0,
  'included',
  '2,233',
  '6,804',
  36,
  10,
  '.15',
  '3,017',
  '',
  'vehicleImages/m3.png',
  'http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda3-e4f5ee110a0e0ae80ba064fb2223becd.htm');

  vehicleArray[1] = new Vehicle(
  2017,
  'Mazda',
  'Mazda 6 SPORT',
  'Titanium',
  '4DR',
  '4-cylinder Automatic with OD',
  'Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/seats/mirrors,',
  'air conditioning, AM/FM radio, cruise control, dual airbags, side airbags, traction control, alloy wheels, keyless remote entry',
  'H1120561',
  'MZH0212',
  '',
  '23,830',
  194,
  '12,629',
  0,
  'included',
  '2,383',
  '6,984',
  36,
  10,
  '.15',
  '3,172',
  '',
  'vehicleImages/m6.png',
  'http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda6-eef8e6ea0a0e0a1771591b19fff16f61.htm');

  vehicleArray[2] = new Vehicle(
  2017,
  'Mazda',
  'CX-3 SPORT',
  'BLACK',
  '5DR hatch',
  '4-cylinder Automatic with OD AWD',
  'Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/seats/mirrors,',
  'air conditioning, AM/FM radio, cruise control, dual airbags, side airbags, traction control, alloy wheels, keyless remote entry,R/wiper/washer',
  'H0121920',
  'MZH0214',
  '',
  '22,110',
  189,
  '13,044',
  0,
  'included',
  '2,211',
  '6,804',
  36,
  10,
  '.15',
  '2,995',
  '',
  'vehicleImages/cx3.png',
  'http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda+CX-3-da7d1d830a0e0a1771591b19e093828e.htm');

  vehicleArray[3] = new Vehicle(
  2017,
  'Mazda',
  'CX-5 SPORT',
  'BLACK',
  '5DR hatch',
  '4-cylinder Automatic with OD AWD',
  'Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/seats/mirrors,',
  'air conditioning, AM/FM radio, cruise control, dual airbags, side airbags, traction control, alloy wheels, keyless remote entry, R/wiper/washer',
  'H0103527',
  'MZH0379',
  '',
  '26,285',
  219,
  '16,559',
  0,
  'included',
  '2,628',
  '7,884',
  36,
  10,
  '.15',
  '3,442',
  '',
  'vehicleImages/cx5.png',
  'http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda+CX-5-b94a8c230a0e0ae836bfff5126417d57.htm');

  vehicleArray[4] = new Vehicle(
  2017,
  'Mazda',
  'CX-9 TOURING',
  'BLACK',
  '5DR hatch, 7 passenger',
  '4-cylinder Automatic with OD AWD',
  'Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/seats/mirrors,',
  'air conditioning, leather interior, heated seats,  AM/FM radio, cruise control, dual airbags, side airbags, 3rd row seat, traction control, alloy wheels, keyless remote entry, R/wiper/washer',
  'H0132525',
  'MZH0283',
  '',
  '38,710',
  289,
  '24,387',
  0,
  'included',
  '3,871',
  '10,404',
  36,
  10,
  '.15',
  '4,755',
  '',
  'vehicleImages/cx9.png',
  'http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda+CX-9-19e0bad40a0e0a1725c5dc92ee32445c.htm');



  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
