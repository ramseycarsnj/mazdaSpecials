$(document).ready(function(){

  const expiration =  '6/30/17';
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
     vehicleUrl,
     buyItNow
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
      this.buyItNow = buyItNow;
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

        ${thisCar.buyItNow}

        <a href="${thisCar.vehicleUrl}" class="linkButton" target="_blank">VIEW VEHICLE</a>

        <p class="disclaimer">VIN ${thisCar.vin}. Stk ${thisCar.stock}. ${thisCar.doors}, ${thisCar.engine}, ${thisCar.transmission}, air conditioning, power steering/ABS brakes/windows/locks/mirrors, cd/MP3, ${thisCar.equipment}. MSRP: $${thisCar.msrp}. $${thisCar.totalAtInception} due at inception. $${thisCar.moneyDown} down + 1st mo pymt $${thisCar.leasePrice}+ bank fee incl. + $0 sec dep. $${thisCar.totalPayment} ttl pymts/$${thisCar.residual} residual.${thisCar.additionalInfo} Prices include all costs to be paid by a consumer except for licensing, registration, taxes, and $299 doc. fee. Tier 1 credit approval thru primary lender. Lessee resp. for excess wear/tear. 10K mi. per yr/.25¢ per mi. over thereafter. See dealer for complete details. Not resp. for typos. Offers expire ${expiration}.</p>
      </div>
    </div>
    `

  }

  vehicleArray[0] = new Vehicle(
  2016.5,
  'Mazda',
  'MAZDA3 TOURING',
  'Silver',
  '4DR',
  '4-cylinder Automatic with OD',
  'Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/seats/mirrors,',
  'air conditioning, AM/FM radio, cruise control, dual airbags, side airbags, alloy wheels, keyless remote entry',
  'HM117158',
  'MZH0184',
  '',
  '22,330',
  169,
  '12,281',
  0,
  'included',
  '2,333',
  '6,084',
  36,
  10,
  '.15',
  '2,997',
  '',
  'vehicleImages/mz3.png',
  'http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda3-233019a10a0e0ae77948e5c823783c3e.htm',
  '');

  vehicleArray[1] = new Vehicle(
  2016.5,
  'Mazda',
  'MAZDA6 SPORT',
  'Titianium Flash',
  '4DR',
  '4-cylinder Automatic with OD',
  'Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/seats/mirrors,',
  'air conditioning, AM/FM radio, cruise control, dual airbags, side airbags, alloy wheels, keyless remote entry',
  'H1120561',
  'MZH0212',
  '',
  '23,830',
  189,
  '12,629',
  0,
  'included',
  '2,383',
  '6,804',
  36,
  10,
  '.15',
  '3,167',
  '',
  'vehicleImages/mz6.png',
  'http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda6-eef8e6ea0a0e0a1771591b19fff16f61.htm',
  '');

  vehicleArray[2] = new Vehicle(
  2016.5,
  'Mazda',
  'CX-9 TOURING',
  'Black',
  '5DR, 7 passenger',
  '4-cylinder Automatic with OD AWD',
  'Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/seats/mirrors,',
  'air conditioning, leather interior, heated seats, AM/FM radio, cruise control, dual airbags, side airbags, 3rd row seats, alloy wheels, keyless remote entry, R/wiper/washer',
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
  'http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda+CX-9-19e0bad40a0e0a1725c5dc92ee32445c.htm',
  '');

  vehicleArray[3] = new Vehicle(
  2016.5,
  'Mazda',
  'CX-3 SPORT',
  'Ceramic',
  '5DR hatch',
  '4-cylinder Automatic with OD AWD',
  'Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/seats/mirrors,',
  'air conditioning, AM/FM radio, cruise control, dual airbags, side airbags, alloy wheels, keyless remote entry, traction control, r/wiper/washer',
  'H0164820',
  'MZH0323',
  '',
  '22,150',
  179,
  '13,068',
  0,
  'included',
  '2,215',
  '6,444',
  36,
  10,
  '.15',
  '2,989',
  '',
  'vehicleImages/cx3.png',
  'http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda+CX-3-be929cdd0a0e0ae70fea12d2004dbd3c.htm',
  '');

  vehicleArray[4] = new Vehicle(
  2016.5,
  'Mazda',
  'CX-5 SPORT',
  'Black',
  '5DR hatch',
  '4-cylinder Automatic with OD AWD',
  'Automatic',
  'abs breaks,',
  'power steering,',
  'power windows/locks/seats/mirrors,',
  'air conditioning, AM/FM radio, cruise control, dual airbags, side airbags, alloy wheels, keyless remote entry, traction control, r/wiper/washer',
  'H0103449',
  'MZH0378',
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
  '3,442.50',
  '',
  'vehicleImages/cx5-1.png',
  'http://www.ramseymazda.com/new/Mazda/2017-Mazda-Mazda+CX-5-b94a8f4f0a0e0ae836bfff518f0dfcc3.htm',
  '');


// <div style="margin-bottom: 20px;background-color:#fff;">Buy Now Price: <span style="font-weight: 900; font-size: 35px;background-color: #fff;">$25,995<sup>*</sup></span></div>

  for (var i = 0; i < vehicleArray.length; i++) {
    listing(vehicleArray[i]);
  }



});
